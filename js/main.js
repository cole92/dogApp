import { eListeners } from './events.js';
import { loadImagesFromStorage } from './ui.js';

const initApp = () => {
    eListeners();
    loadImagesFromStorage();  // Učitaj slike iz localStorage
};

initApp();