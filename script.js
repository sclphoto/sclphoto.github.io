const lightbox = document.querySelector(".lightbox");
const galleryImages = document.querySelectorAll(".gallery img");
const popupImage = document.querySelector(".lightbox img");
const thumbnailContainer = document.querySelector(".thumbnails");
const caption = document.querySelector(".caption");

const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const closeButton = document.querySelector(".close");

const captions = [
    // Put one caption per gallery image.
    // Example:
    // "Great Blue Heron — Burnham Harbor",
    // "Red-tailed Hawk — Montrose Harbor",
];

let currentIndex = 0;

function buildThumbnails() {

    thumbnailContainer.innerHTML = "";

    const visible = Math.min(7, galleryImages.length);
    const middle = Math.floor(visible / 2);

    for (let i = -middle; i <= middle; i++) {

        const index =
            (currentIndex + i + galleryImages.length) %
            galleryImages.length;

        const thumb = document.createElement("img");
        thumb.src = galleryImages[index].src;

        if (index === currentIndex) {
            thumb.classList.add("active");
        }

        thumb.addEventListener("click", function () {
            currentIndex = index;
            showImage();
        });

        thumbnailContainer.appendChild(thumb);
    }
}

function showImage() {

    popupImage.style.opacity = 0;

    setTimeout(function () {

        popupImage.src = galleryImages[currentIndex].src;

        if (captions[currentIndex]) {
            caption.textContent = captions[currentIndex];
        } else {
            caption.textContent = "";
        }

        popupImage.style.opacity = 1;

    }, 200);

    buildThumbnails();
}

galleryImages.forEach(function (image, index) {

    image.addEventListener("click", function () {

        currentIndex = index;

        lightbox.style.display = "flex";

        showImage();

    });

});

nextButton.addEventListener("click", function () {

    currentIndex = (currentIndex + 1) % galleryImages.length;

    showImage();

});

prevButton.addEventListener("click", function () {

    currentIndex =
        (currentIndex - 1 + galleryImages.length) %
        galleryImages.length;

    showImage();

});

closeButton.addEventListener("click", function () {

    lightbox.style.display = "none";

});

document.addEventListener("keydown", function (event) {

    if (lightbox.style.display !== "flex") return;

    if (event.key === "ArrowRight") {

        currentIndex =
            (currentIndex + 1) % galleryImages.length;

        showImage();

    }

    if (event.key === "ArrowLeft") {

        currentIndex =
            (currentIndex - 1 + galleryImages.length) %
            galleryImages.length;

        showImage();

    }

    if (event.key === "Escape") {

        lightbox.style.display = "none";

    }

});