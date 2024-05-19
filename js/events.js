import { fetchAndDisplayImg } from './api.js';

    // eListener na dogBtn
export const eListeners = () => {
    document.getElementById('getDogBtn').addEventListener('click', fetchAndDisplayImg);
    // eListener za otvaranje nove strane
    document.getElementById('gallery').addEventListener('click', () => {
        window.location.href = 'gallery/gallery.html';
    });
};