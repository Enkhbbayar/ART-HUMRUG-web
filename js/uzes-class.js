// class Uzesgelen{
//     constructor(productObj) { 
//     this.id = uzesObj.id;
//     this.category = uzesObj.category;
//     this.title = uzesObj.title;
//     this.artist_name = uzesObj.artist_name;
//     this.genre = uzesObj.genre;
//     this.description = uzesObj.description;
//     this.date = uzesObj.date;
//     this.venue = uzesObj.venue;
//     this.price = uzesObj.price;
//     this.exhibitiontype = uzesObj.exhibitiontype;
//     this.activities = uzesObj.activities;
//     this.rating = uzesObj.rating;
//     this.img = Array.isArray(uzesObj.images) ? uzesObj.images[0] : uzesObj.images;
//     }

//     Render() { 
//         return `
//                  <div class="medeelel">
//                      <article>
//                      <button class="addToCartBtn">Add To Cart</button>
//                          <img src="${item.images}" alt="Image for ${item.title}">
//                          <p><strong>Date:</strong> ${item.date}</p>
//                          <h2>${item.title}</h2>
//                          <p><strong>Artist:</strong> ${item.artist_name}</p>
//                          <p><strong>Genre:</strong> ${item.genre}</p>
//                      </article>
//                  </div>`;
//     }
// };
//     // function renderItems() {
//     //     productListContainer.innerHTML = '';
//     //     items.forEach(item => {
//     //         const itemHTML = document.createElement('div');
//     //         itemHTML.innerHTML = `
//     //         <div class="medeelel">
//     //             <article>
//     //             <button class="addToCartBtn">Add To Cart</button>
//     //                 <img src="${item.images}" alt="Image for ${item.title}">
//     //                 <p><strong>Date:</strong> ${item.date}</p>
//     //                 <h2>${item.title}</h2>
//     //                 <p><strong>Artist:</strong> ${item.artist_name}</p>
//     //                 <p><strong>Genre:</strong> ${item.genre}</p>
//     //             </article>
//     //         </div>`;
//     //         productListContainer.appendChild(itemHTML);
//     //         itemHTML.querySelector('.addToCartBtn').addEventListener('click', () => addToCart(item));
//     //     });
//     // }