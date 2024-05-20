import { handleResponse, handleError, updateUI } from './ui.js';

// Funkcija za dobavljanje i prikaz podataka
export const fetchAndDisplayImg = () => {
    const imgApi = 'https://dog.ceo/api/breeds/image/random';

    fetch(imgApi)
    .then(handleResponse)
    .then((data) => {
        updateUI(data);
        saveImageToLocalStorage(data.message);
    })
    .catch(handleError)
};
// Funkcija za snimanje slika u localStorage
export const saveImageToLocalStorage = (url) => {
    let storedImages = JSON.parse(localStorage.getItem('dogImages')) || [];
    storedImages.push(url);
    localStorage.setItem('dogImages', JSON.stringify(storedImages));
};
