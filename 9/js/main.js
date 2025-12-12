// Import
import { createPictures } from './data.js';
import { renderCards } from './thumbnails.js';
// import './thumbnails.js';

// Generate pictures data
const pictures = createPictures();

console.log(pictures);

// Render picture thumbnails
renderCards(pictures);
