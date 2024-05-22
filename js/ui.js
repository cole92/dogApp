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
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => {
            deleteImage(index);
        });
        // Dugme za deljenje
        const shareBtn = document.createElement('button');
        shareBtn.textContent = 'Share';
        shareBtn.classList.add('share-btn');
        shareBtn.addEventListener('click', () => {
            shareImage(url);
        });

        imageContainer.appendChild(image);
        imageContainer.appendChild(deleteBtn);
        imageContainer.appendChild(shareBtn);
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
// Funkcija za deljenje slika(webShareApi)
export const shareImage = (url) => {
        // Provera da li broswer podrzava webShareAPi
    if (navigator.share) {
        navigator.share({
            title: 'Dog Image', 
            text: 'Check out this cute dog!', 
            url: url
        })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
    } else {
        alert('Web Share API is not supported in your browser.');
    }
};
