// Funktion um das Video erst zu laden, wenn der Benutzer am Video angekommen ist.
// + Das Video pausiert, wenn Benutzer nicht mehr im Video Abschnitt ist. 
function checkScroll() {
    const videos = document.querySelector(".story__video");

    for (const video of Object.keys(videos)) {
        const boundingRect = video.getBoundingClientRect();
        const visible = (boundingRect.top + boundingRect.height > 0 &&
            boundingRect.top < window.innerHeight);

        if (visible) {
            video.play();
        } else {
            video.pause();
        }
    }
}

checkScroll();
window.addEventListener('load', checkScroll, false);
window.addEventListener('scroll', checkScroll, false);
window.addEventListener('resize', checkScroll, false);


// Funktion um einen 3D Effekt der Karten mit X & Y Koordinaten zu geben. 
function addMousePositionToCss() {
    const elements = document.querySelectorAll(".offers__card-container");
    for (const element of elements) {
        element.addEventListener("mousemove", function (e) {
            var rect = element.getBoundingClientRect();
            var x = e.clientX - rect.left;
            var y = e.clientY - rect.top;
            element.style = "--mouse-x:" + (x / element.offsetWidth) + ";--mouse-y:" + (y / element.offsetHeight) + ";";
        });
        element.addEventListener("mouseleave", function (e) {
            element.style = "";
        });
    }
}

if (document.readyState === "complete" || document.readyState === "interactive") {
    setTimeout(addMousePositionToCss, 1);
} else {
    document.addEventListener("DOMContentLoaded", addMousePositionToCss, false);
}

// funtion um beim  schließen des Modal Fensters auf der selben Position zu bleiben,
// statt wieder am Anfang der Seite zu landen 
function bookingModalFixClose() {
    const elements = document.querySelectorAll(".booking-modal__close")
    for (const element of elements) {
        element.addEventListener("click", function () {
            const scrollY = window.scrollY;
            const scrollX = window.scrollX;
            window.setTimeout(function () {
                window.scrollTo({ top: scrollY, left: scrollX })
            }, 1)
        })
    }
}
if (document.readyState === "complete" || document.readyState === "interactive") {
    setTimeout(bookingModalFixClose, 1)
} else {
    document.addEventListener("DOMContentLoaded", bookingModalFixClose, false)
}