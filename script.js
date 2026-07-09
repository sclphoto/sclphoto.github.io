const lightbox = document.querySelector(".lightbox");
const galleryImages = document.querySelectorAll(".gallery img");
const popupImage = document.querySelector(".lightbox img");
const thumbnailContainer = document.querySelector(".thumbnails");
const caption = document.querySelector(".caption");
const captions = [   
];

const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const closeButton = document.querySelector(".close");

let currentIndex = 0;
let thumbnailImages = [];



// function showImage() {

//     popupImage.style.opacity = "0";

//     setTimeout(() => {
//         popupImage.src = galleryImages[currentIndex].src;
//         popupImage.style.opacity = "1";
//     }, 200);

//     thumbnailContainer.innerHTML = "";
//     thumbnailImages = [];

//     const visible = 7;
//     const middle = Math.floor(visible / 2);

//     for (let i = -middle; i <= middle; i++) {

//         let index = (currentIndex + i + galleryImages.length) % galleryImages.length;

//         const thumb = document.createElement("img");
//         thumb.src = galleryImages[index].src;

//         if (index === currentIndex) {
//             thumb.classList.add("active");
//         }

//         thumb.addEventListener("click", function () {
//             currentIndex = index;
//             showImage();
//         });

//         thumbnailContainer.appendChild(thumb);
//         thumbnailImages.push(thumb);
//     }
// }
function showImage() {

    popupImage.style.opacity = 0;

    setTimeout(function() {
        popupImage.src = galleryImages[currentIndex].src;
        caption.textContent = captions[currentIndex];
        popupImage.style.opacity = 1;
    }, 250);

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
