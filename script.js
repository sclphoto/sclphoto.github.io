const lightbox = document.querySelector(".lightbox");
const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach(function(image) {

    image.addEventListener("click", function() {
        lightbox.style.display = "block";

    });

});