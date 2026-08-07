const lightbox = document.querySelector(".lightbox");

const galleryImages = document.querySelectorAll(".gallery img");

const popupImage = document.querySelector(".lightbox img");

const thumbnailContainer =
    document.querySelector(".thumbnails");

const caption =
    document.querySelector(".caption");

const prevButton =
    document.querySelector(".prev");

const nextButton =
    document.querySelector(".next");

const closeButton =
    document.querySelector(".close");

let currentIndex = 0;


/* =========================
   SHOW IMAGE
   ========================= */

function showImage() {

    popupImage.style.opacity = "0";

    setTimeout(function () {

        popupImage.src =
            galleryImages[currentIndex].src;

        const imageCaption =
            galleryImages[currentIndex].dataset.caption;

        caption.textContent =
            imageCaption || "";

        popupImage.style.opacity = "1";

    }, 200);

    buildThumbnails();
}


/* =========================
   BUILD THUMBNAILS
   ========================= */

function buildThumbnails() {

    thumbnailContainer.innerHTML = "";

    const visible = Math.min(
        7,
        galleryImages.length
    );

    const middle =
        Math.floor(visible / 2);

    for (
        let i = -middle;
        i <= middle;
        i++
    ) {

        const index =
            (
                currentIndex +
                i +
                galleryImages.length
            ) %
            galleryImages.length;

        const thumb =
            document.createElement("img");

        thumb.src =
            galleryImages[index].src;

        if (index === currentIndex) {
            thumb.classList.add("active");
        }

        thumb.addEventListener(
            "click",
            function () {

                currentIndex = index;

                showImage();

            }
        );

        thumbnailContainer.appendChild(thumb);
    }
}


/* =========================
   OPEN LIGHTBOX
   ========================= */

galleryImages.forEach(
    function (image, index) {

        image.addEventListener(
            "click",
            function () {

                currentIndex = index;

                lightbox.style.display =
                    "flex";

                showImage();

            }
        );

    }
);


/* =========================
   NEXT
   ========================= */

if (nextButton) {

    nextButton.addEventListener(
        "click",
        function () {

            currentIndex =
                (
                    currentIndex + 1
                ) %
                galleryImages.length;

            showImage();

        }
    );

}


/* =========================
   PREVIOUS
   ========================= */

if (prevButton) {

    prevButton.addEventListener(
        "click",
        function () {

            currentIndex =
                (
                    currentIndex -
                    1 +
                    galleryImages.length
                ) %
                galleryImages.length;

            showImage();

        }
    );

}


/* =========================
   CLOSE
   ========================= */

if (closeButton) {

    closeButton.addEventListener(
        "click",
        function () {

            lightbox.style.display =
                "none";

        }
    );

}


/* =========================
   KEYBOARD CONTROLS
   ========================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            lightbox.style.display !==
            "flex"
        ) {
            return;
        }

        if (
            event.key ===
            "ArrowRight"
        ) {

            currentIndex =
                (
                    currentIndex + 1
                ) %
                galleryImages.length;

            showImage();

        }

        if (
            event.key ===
            "ArrowLeft"
        ) {

            currentIndex =
                (
                    currentIndex -
                    1 +
                    galleryImages.length
                ) %
                galleryImages.length;

            showImage();

        }

        if (
            event.key ===
            "Escape"
        ) {

            lightbox.style.display =
                "none";

        }

    }
);


/* =========================
   CLICK BACKGROUND TO CLOSE
   ========================= */

lightbox.addEventListener(
    "click",
    function (event) {

        if (
            event.target ===
            lightbox
        ) {

            lightbox.style.display =
                "none";

        }

    }
);