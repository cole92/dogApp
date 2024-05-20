// Funkcija za obradu odgovora
export const handleResponse = (response) => {
    if (!response.ok) {
        throw new Error(`Api call failed with status: ${response.status} and status text ${response.statusText}`);
    }
    return response.json();
};
// Obrada greske
export const handleError = (error) => {
    console.log(`Error while getting data`, error);
    document.getElementById('dogImages').textContent = '';
    document.getElementById('dogImages').textContent = `Failed to fetch image, please try again later.`;
};
// Azuriranje userInterfac-a
export const updateUI = (data) => {
    const dogImages = document.getElementById('dogImages');
    const image = document.createElement('img');
    image.src = data.message;
    image.alt = "A random dog image";
    dogImages.textContent = '';
    dogImages.appendChild(image);
};
// Prikaz slika u galeiriji iz localStorage
export const loadGalleryImages = () => {
    const galleryGrid = document.getElementById('galleryGrid');
    const storedImages = JSON.parse(localStorage.getItem('dogImages')) || [];

    storedImages.forEach((url, index) => {
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('image-container');

        const image = document.createElement('img');
        image.src = url;
        image.alt = "A saved dog image";
        // Delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            deleteImage(index);
        });

        imageContainer.appendChild(image);
        imageContainer.appendChild(deleteBtn);
        galleryGrid.appendChild(imageContainer);
    });
};
// Funkcija za brisanje slika
export const deleteImage = (index) => {
    let storedImages = JSON.parse(localStorage.getItem('dogImages')) || [];
    storedImages.splice(index, 1);
    localStorage.setItem('dogImages', JSON.stringify(storedImages));
    window.location.reload();
};
