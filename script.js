const lightbox = document.querySelector(".lightbox");
const galleryImages = document.querySelectorAll(".gallery img");
const popupImage = document.querySelector(".lightbox img");
const closeButton = document.querySelector(".close");

galleryImages.forEach(function(image) {

    image.addEventListener("click", function() {
        lightbox.style.display = "flex";
        popupImage.src = this.src;

    });
    closeButton.addEventListener("click", function() {
        lightbox.style.display = "none";
    });

});