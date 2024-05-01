export default class Uzesgelen {
    constructor(uzesObj) {
        this.id = uzesObj.id;
        this.category = uzesObj.category; 
        this.title = uzesObj.title; 
        this.artist_name = uzesObj.artist_name; 
        this.genre = uzesObj.genre; 
        this.description = uzesObj.description; 
        this.date = uzesObj.date; 
        this.venue = uzesObj.venue; 
        this.price = uzesObj.price; 
        this.exhibitiontype = uzesObj.exhibitiontype;
        this.activities = uzesObj.activities; 
        this.rating = uzesObj.rating;
        this.img = Array.isArray(uzesObj.images) ? uzesObj.images[0] : uzesObj.images;
    }
  
    Render() {
        return `
        <div class="medeelel">
          <article>
            <img src="${this.img}" alt="Image for ${this.title}">
            <p><strong>Date:</strong> ${this.date}</p>
            <h2>${this.title}</h2>
            <p><strong>Artist:</strong> ${this.artist_name}</p>
            <p><strong>Genre:</strong> ${this.genre}</p>
          </article>
          </div>`;
      }
  }
  // <p><strong>Description:</strong> ${this.description}</p>
  //           <p><strong>Venue:</strong> ${this.venue}</p>
  //           <p><strong>Price:</strong> ${this.price}</p>
            
  //           <p><strong>Exhibition Type:</strong> ${this.exhibitiontype}</p>
  //           <p><strong>Activities:</strong> ${this.activities}</p>
  //           <p><strong>Rating:</strong> ${this.rating}</p>