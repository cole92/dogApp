import { fetchAndDisplayImg } from './api.js';

// Listeneri za glavnu stranicu
export const setupMainListeners = () => {
    document.getElementById('getDogBtn').addEventListener('click', fetchAndDisplayImg);
    document.getElementById('gallery').addEventListener('click', () => {
        window.location.href = 'gallery/gallery.html';
    });
};
// Listener za galeriju 
export const setupGalleryListeners = () => {
    document.getElementById('backBtn').addEventListener('click', () => {
        window.location.href = '../index.html';
    });
};