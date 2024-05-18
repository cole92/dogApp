document.addEventListener('DOMContentLoaded', () => {
    const galleryGrid = document.getElementById('galleryGrid');
    const storedImages = JSON.parse(localStorage.getItem('dogImages')) || [];

    storedImages.forEach((url, index) => {
        // Dodajemo div i klasu na isti radi organizacije elemenata
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('image-container');
        // Kreiramo element slike i prosledjujemo putanju linka
        const image = document.createElement('img');
        image.src = url;
        image.alt = "A saved dog image";
        // Dodajemo delete dugme na svaku sliku
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            deleteImage(index);
        });
        // Kacimo elemente
        imageContainer.appendChild(image);
        imageContainer.appendChild(deleteBtn);
        galleryGrid.appendChild(imageContainer);
    });
    // Listener za back dugme
    document.getElementById('backBtn').addEventListener('click', () => {
        window.location.href = '../index.html';
    });
});
// Funkcija za deleteImage
const deleteImage = (index) => {
    let storedImages = JSON.parse(localStorage.getItem('dogImages')) || [];
    storedImages.splice(index, 1);
    localStorage.setItem('dogImages', JSON.stringify(storedImages));
    window.location.reload();
};
