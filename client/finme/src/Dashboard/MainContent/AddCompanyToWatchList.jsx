import React, { useState, useEffect } from 'react';

const AddCompanyModal = ({ isOpen, onClose, onAddCompany }) => {
    const [companyName, setCompanyName] = useState('');

    const handleAddCompany = async () => {
        try {
            await onAddCompany(companyName);
            onClose();
        } catch (error) {
            console.error('Error adding company:', error);
        }
    };

    if (!isOpen) return null;

    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center'>
            <div className='absolute inset-0 bg-black opacity-75'></div>
            <div className='relative bg-white p-4 rounded-lg z-50'>
                <h2 className='text-xl mb-4'>Add New Company</h2>
                <input
                    type='text'
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className='border p-2 w-full mb-4'
                    placeholder='Enter company name'
                />
                <div className='flex justify-end'>
                    <button onClick={handleAddCompany} className='bg-blue-500 text-white p-2 rounded mr-2'>
                        Add Company
                    </button>
                    <button onClick={onClose} className='text-gray-500'>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddCompanyModal;