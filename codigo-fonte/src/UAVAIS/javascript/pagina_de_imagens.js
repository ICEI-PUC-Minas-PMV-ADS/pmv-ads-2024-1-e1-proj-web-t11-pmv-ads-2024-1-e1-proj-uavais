document.addEventListener('DOMContentLoaded', () => {
    const adcImgBoaBtn = document.getElementById('adcImgBoa');
    const adcImgRuimBtn = document.getElementById('adcImgRuim');
    const fileInput = document.getElementById('fileInput');
    const galeiraBoa = document.getElementById('galeiraBoa');
    const galeriaRuim = document.getElementById('galeriaRuim');
    const popup = document.getElementById('popup');
    const naoExcluir = document.getElementById('naoExcluir');
    const excluir = document.getElementById('excluir');

    let selectedImageElement = null;

    function loadImages() {
        const imagemBoa = JSON.parse(localStorage.getItem('imagemBoa')) || [];
        const imagemRuim = JSON.parse(localStorage.getItem('imagemRuim')) || [];

        galeiraBoa.innerHTML = '';
        galeriaRuim.innerHTML = '';

        imagemBoa.forEach(src => addImageToGallery(src, galeiraBoa));
        imagemRuim.forEach(src => addImageToGallery(src, galeriaRuim));
    }

    function addImageToGallery(src, gallery) {
        const img = document.createElement('img');
        img.src = src;
        img.addEventListener('click', () => selectImage(img));
        gallery.appendChild(img);
    }

    function handleFileSelect(event, galleryType) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            const src = e.target.result;
            const images = JSON.parse(localStorage.getItem(galleryType)) || [];
            images.push(src);
            localStorage.setItem(galleryType, JSON.stringify(images));
            loadImages();
        };
        reader.readAsDataURL(file);
    }

    function selectImage(img) {
        if (selectedImageElement) {
            selectedImageElement.classList.remove('selected');
        }
        selectedImageElement = img;
        img.classList.add('selected');
        popup.classList.remove('hidden');
    }

    adcImgBoaBtn.addEventListener('click', () => {
        fileInput.onchange = (e) => handleFileSelect(e, 'imagemBoa');
        fileInput.click();
    });

    adcImgRuimBtn.addEventListener('click', () => {
        fileInput.onchange = (e) => handleFileSelect(e, 'imagemRuim');
        fileInput.click();
    });

    naoExcluir.addEventListener('click', () => {
        popup.classList.add('hidden');
    });

    excluir.addEventListener('click', () => {
        const galleryType = selectedImageElement.parentElement.id === 'galeiraBoa' ? 'imagemBoa' : 'imagemRuim';
        const images = JSON.parse(localStorage.getItem(galleryType));
        const src = selectedImageElement.src;
        const newImages = images.filter(image => image !== src);
        localStorage.setItem(galleryType, JSON.stringify(newImages));
        loadImages();
        popup.classList.add('hidden');
    });

    loadImages();
});
