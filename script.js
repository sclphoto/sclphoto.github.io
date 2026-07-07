const lightbox = document.querySelector(".lightbox");
const galleryImages = document.querySelectorAll(".gallery img");
const popupImage = document.querySelector(".lightbox img");
const thumbnailContainer = document.querySelector(".thumbnails");

const closeButton = document.querySelector(".close");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let currentIndex = 0;
let thumbnailImages = [];

function showImage() {

    popupImage.src = galleryImages[currentIndex].src;

    const selectedThumb = thumbnailImages[currentIndex];

    thumbnailContainer.scrollTo({
        left: selectedThumb.offsetLeft - thumbnailContainer.clientWidth / 2 + selectedThumb.clientWidth / 2,
        behavior: "smooth"
    });
    thumbnailImages.forEach(function(thumb) {
        thumb.classList.remove("active");
    });
    thumbnailImages[currentIndex].classList.add("active");
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