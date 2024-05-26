export default class Uzesgelen {
  constructor(uzesObj) {
      this.id = uzesObj.id;
      this.title = uzesObj.title;
      this.artist_name = uzesObj.artist_name;
      this.genre = uzesObj.genre;
      this.description = uzesObj.description;
      this.img = Array.isArray(uzesObj.images) ? uzesObj.images[0] : uzesObj.images;
  }

  Render() {
    return `
      <div class="image-box">
          <img src="${this.img}" alt="Image for ${this.title}">
          <div class="overlay">
              <div class="details">
                  <h3 class="title">${this.title}</h3>
                  <h5 class="artist-name">${this.artist_name}</h5>
                  <h5 class="genre">${this.genre}</h5>
                  <h5 class="gallery-description">${this.description}</h5>
              </div>
          </div>
      </div>`;
  }
}
