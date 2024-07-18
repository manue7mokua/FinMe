import { removeStopwords } from 'stopword';
import { stemmer } from 'stemmer';

 export default function preprocess(text) {
  // Convert text to lowercase and split into words
  let words = text.toLowerCase().split(/\W+/);
  // Remove stop words
  words = removeStopwords(words);
  // Stem the words
  words = words.map(word => stemmer(word));
  return words;
}

