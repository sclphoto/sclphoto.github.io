const lightbox = document.querySelector(".lightbox");
const galleryImages = document.querySelectorAll(".gallery img");
const popupImage = document.querySelector(".lightbox img");

galleryImages.forEach(function(image) {

    image.addEventListener("click", function() {
        lightbox.style.display = "flex";
        popupImage.src = this.src;

    });

});