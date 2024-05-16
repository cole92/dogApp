document.addEventListener('DOMContentLoaded', () => {
    const galleryGrid = document.getElementById('galleryGrid');
    const storedImages = JSON.parse(localStorage.getItem('dogImages')) || [];

    storedImages.forEach(url => {
        const image = document.createElement('img');
        image.src = url;
        image.alt = "A saved dog image";
        galleryGrid.appendChild(image);
    })
})