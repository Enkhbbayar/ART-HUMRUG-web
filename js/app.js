// DOM elements
const nextDom = document.getElementById("next");
const prevDom = document.getElementById("prev");

const carouselDom = document.querySelector(".carousel");
const sliderDom = carouselDom.querySelector(".carousel .list");
const thumbnailBorderDom = document.querySelector(".carousel .thumbnail");
const thumbnailItemsDom = Array.from(thumbnailBorderDom.querySelectorAll(".item"));

let timeRunning = 1000;
let timeAutoNext = 20000;

// Auto-scroll 
let autoScrollTimeout = setTimeout(() => {
    nextDom.click();
}, timeAutoNext);

// Event Handlers for Nav
nextDom.onclick = function () {
    clearTimeout(autoScrollTimeout); // auto scroll
    showSlider("next");
};

prevDom.onclick = function () {
    clearTimeout(autoScrollTimeout);
    showSlider("prev");
};

// Step 4: Function udirdah carousel
function showSlider(direction) {
    const sliderItemsDom = Array.from(sliderDom.querySelectorAll(".carousel .list .item"));
    const thumbnailItemsDom = Array.from(thumbnailBorderDom.querySelectorAll(".carousel .thumbnail .item"));

    if (direction === "next") {
        sliderDom.appendChild(sliderItemsDom[0]); // Move the first big image to the end
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]); // Move the first thumbnail to the end
        carouselDom.classList.add("next"); // Add transition class
    } else {
        sliderDom.prepend(sliderItemsDom[sliderItemsDom.length - 1]); // Move the last big image to the beginning
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]); // Move the last thumbnail to the beginning
        carouselDom.classList.add("prev"); // Add transition class
    }

    // Reset the animation class
    const transitionTimeout = setTimeout(() => {
        carouselDom.classList.remove("next");
        carouselDom.classList.remove("prev");
    }, timeRunning); // Remove animation class after transition

    // Restart the auto-scroll timeout after each manual interaction
    autoScrollTimeout = setTimeout(() => {
        nextDom.click(); // Continue auto-scroll
    }, timeAutoNext); // Time to the next automatic transition
}
