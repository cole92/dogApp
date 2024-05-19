// Funkcija za obradu odgovora
export const handleResponse = (response) => {
    if (!response.ok) {
        throw new Error (`Api call failed with status: ${response.status} and status text ${response.statusText}`);
    }
    return response.json();
};

// Funkcija za obradu i prikaz greske
export const handleError = error => {
    console.log(`Error while getting data`, error);
    document.getElementById('dogImages').textContent = '';
    document.getElementById('dogImages').textContent = `Failed to fetch quote, please try again later.`;
};

// Funkcija za prikaz podataka
export const updateUI = (data) => {
    const dogImages = document.getElementById('dogImages');
    const image = document.createElement('img');
    image.src = data.message;
    image.alt = "A random dog image";
    dogImages.textContent = '';
    dogImages.appendChild(image);
};

export const loadImagesFromStorage = () => {
    const dogImages = document.getElementById('dogImages');
    const storedImages = JSON.parse(localStorage.getItem('dogImages')) || [];

    storedImages.forEach(url => {
        const image = document.createElement('img');
        image.src = url;
        image.alt = "A saved dog image"; // Dodajemo alt atribut za pristupačnost
        dogImages.appendChild(image);
    });
};