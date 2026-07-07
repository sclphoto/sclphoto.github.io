const lightbox = document.querySelector(".lightbox");
const galleryImages = document.querySelectorAll(".gallery img");
const popupImage = document.querySelector(".lightbox img");
const thumbnails = document.querySelector(".thumbnails");

const closeButton = document.querySelector(".close");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let currentIndex = 0;

function showImage() {
        popupImage.src = galleryImages[currentIndex].src;}

galleryImages.forEach(function(image, index) {

    image.addEventListener("click", function() {
        lightbox.style.display = "flex";
        currentIndex = index;
        showImage();
    });
    
    const thumb = document.createElement("img");
    thumb.src = image.src;
    thumbnails.appendChild(thumb);

    thumb.addEventListener("click", function() {
        currentIndex = index;
        showImage();
    });
});
closeButton.addEventListener("click", function() {
        lightbox.style.display = "none";
    });
    nextButton.addEventListener("click", function() {
        currentIndex = (currentIndex + 1) % galleryImages.length;
        showImage();
    });
    prevButton.addEventListener("click", function() {
        currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        showImage();
    });