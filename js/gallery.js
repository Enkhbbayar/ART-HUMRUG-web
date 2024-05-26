import Uzesgelen from "./gallery-module.js";

// Fetch data json
fetch("./gallery.json")
    .then((response) => response.json())
    .then((data) => {
        const rawData = data.gallery || [];
        
        // Generate HTML neg neg item aar
        const galleryHTML = rawData.map((item) => {
            const galleryItem = new Uzesgelen(item);
            return galleryItem.Render();
        }).join(""); // Join all HTML strings together

        // "prodGallery" to insert hiih
        const prodGallery = document.getElementById("prodGallery");
        prodGallery.innerHTML = galleryHTML;
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });
