import React, { useState, useEffect } from 'react';

const AddCompanyModal = ({ isOpen, onClose, onAddCompany }) => {
    const [companyName, setCompanyName] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        if (companyName.length > 1) {
            fetchSuggestions(companyName);
        } else {
            setSuggestions([]);
        }
    }, [companyName]);

    const fetchSuggestions = async (query) => {
        try {
            const response = await fetch(`/searchCompanySymbols?query=${query}`);
            const data = await response.json();
            setSuggestions(data);
        } catch (error) {
            console.error('Error fetching company symbols:', error);
        }
    };

    const handleAddCompany = (name) => {
        onAddCompany(name);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
            <div className='bg-white p-4 rounded-lg'>
                <h2 className='text-xl mb-4'>Add New Company</h2>
                <input
                    type='text'
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className='border p-2 w-full mb-4'
                    placeholder='Enter company name'
                />
                <ul>
                    {suggestions.map((suggestion) => (
                        <li
                            key={suggestion.symbol}
                            onClick={() => handleAddCompany(suggestion.name)}
                            className='cursor-pointer p-2 hover:bg-gray-200'
                        >
                            {suggestion.name} ({suggestion.symbol})
                        </li>
                    ))}
                </ul>
                <button onClick={onClose} className='ml-2 text-gray-500'>
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default AddCompanyModal;
