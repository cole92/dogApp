import { setupGalleryListeners} from './events.js';
import { loadGalleryImages } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
    loadGalleryImages();
    setupGalleryListeners();
});
