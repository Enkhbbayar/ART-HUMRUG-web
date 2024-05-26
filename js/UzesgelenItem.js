// // UzesgelenItem.js
// import Uzesgelen from "./uzes-module.js";

// class UzesgelenItem extends HTMLElement {
//     constructor() {
//         super();
//         const shadow = this.attachShadow({ mode: 'open' });
//         this.uzesgelen = new Uzesgelen(this.getAttributeData());
//         shadow.innerHTML = this.uzesgelen.Render();
//     }

//     getAttributeData() {
//         return {
//             id: this.getAttribute('id'),
//             category: this.getAttribute('category'),
//             title: this.getAttribute('title'),
//             artist_name: this.getAttribute('artist_name'),
//             genre: this.getAttribute('genre'),
//             description: this.getAttribute('description'),
//             date: this.getAttribute('date'),
//             venue: this.getAttribute('venue'),
//             price: this.getAttribute('price'),
//             exhibitiontype: this.getAttribute('exhibitiontype'),
//             activities: this.getAttribute('activities'),
//             rating: this.getAttribute('rating'),
//             images: this.getAttribute('images'),
//         };
//     }
// }

// customElements.define('uzesgelen-item', UzesgelenItem);
