const lightbox = document.querySelector(".lightbox");
const galleryImages = document.querySelectorAll(".gallery img");
const popupImage = document.querySelector(".lightbox img");
const thumbnailContainer = document.querySelector(".thumbnails");


const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const closeButton = document.querySelector(".close");

let currentIndex = 0;
let thumbnailImages = [];

function centerThumbnail() {

    const selectedThumb = thumbnailImages[currentIndex];

    const containerCenter = thumbnailContainer.clientWidth / 2;
    const thumbCenter = selectedThumb.offsetLeft + selectedThumb.clientWidth / 2;

    thumbnailContainer.scrollLeft = thumbCenter - containerCenter;
}

function showImage() {

    popupImage.src = galleryImages[currentIndex].src;

    thumbnailImages.forEach(function(thumb) {
        thumb.classList.remove("active");
    });

    thumbnailImages[currentIndex].classList.add("active");
    centerThumbnail();
}

galleryImages.forEach(function(image, index) {

    image.addEventListener("click", function() {
        lightbox.style.display = "flex";
        currentIndex = index;
        showImage();
    });
    
    const thumb = document.createElement("img");
    thumb.src = image.src;
    thumbnailContainer.appendChild(thumb);
    thumbnailImages.push(thumb);

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
document.addEventListener("keydown", function(event) {

    if (event.key === "ArrowRight") {
        currentIndex = (currentIndex + 1) % galleryImages.length;
        showImage();
    }

    if (event.key === "ArrowLeft") {
        currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        showImage();
    }

});