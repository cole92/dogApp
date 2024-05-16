// Funkcija za eventListener
const eListeners = () => {
    document.getElementById('getDogBtn').addEventListener('click', fetchAndDisplayImg);
};
// Funkcija za dobavljanje i prikaz podataka
const fetchAndDisplayImg = () => {
    const imgApi = 'https://dog.ceo/api/breeds/image/random';

    fetch(imgApi)
    .then(handleResponse)
    .then(updateUI)
    .catch(handleError)
};
// Funkcija za obradu odgovora
const handleResponse = (response) => {
    if (!response.ok) {
        throw new Error (`Api call failed with status: ${response.status} and status text ${response.statusText}`);
    }
    return response.json();
};
// Funkcija za prikaz podataka
const updateUI = (data) => {
    const dogImages = document.getElementById('dogImages');
    const image = document.createElement('img');
    image.src = data.message;
    image.alt = "A random dog image";
    dogImages.textContent = '';
// Cuvanje slika u local storage
    let storedImages = JSON.parse(localStorage.getItem('dogImages')) || [];
    storedImages.push(data.message);
    localStorage.setItem('dogImages', JSON.stringify(storedImages));
    console.log(localStorage.getItem('dogImages'));
    dogImages.appendChild(image);
};
// Funkcija za obradu i prikaz greske
const handleError = error => {
    console.log(`Error while getting data`, error);
    document.getElementById('dogImages').textContent = '';
    document.getElementById('dogImages').textContent = `Failed to fetch quote, please try again later.`;
};

const initApp = () => {
    eListeners();
};

initApp();
// Funkcija za otvaranje nove strane
document.getElementById('gallery').addEventListener('click', () => {
    window.location.href = 'gallery/gallery.html';
})