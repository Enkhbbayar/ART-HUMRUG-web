// //url iig zadlana
// const usp = new URLSearchParams(document.location.search);
// const filterCategory =  usp.get("cat");
// //fetch eer data olj avna


// fetch("https://dummyjson.com/products")
//     .then(result => result.json())
//     .then(products => { 
//         const rawData = products.products;

//         const productsHTML = rawData
//             .filter(data => data.category == filterCategory)
//             .map(prodObj => {
//                 const prod = new Product(prodObj);
//                 return prod.Render();
//             })
//             .reduce((prev, current) => prev + current);

//         const productSection = document.getElementById("prodSection");

//         productSection.innerHTML = productsHTML;
//     })

// //array deer filter ajiluulna
// // const rawData = [
// //     {
// //         name: "Computer 1",
// //         img: "https://i5.walmartimages.com/asr/fcbf064d-fd1e-41c4-ab02-77bcf396b861.a4d924574644125329d22c687c2fc5e6.jpeg",
// //         desc: "computer ni hasfa;lsf ;lasdjf",
// //         category:"it"
// //     },
// //     {
// //         name: "Cloth 1",
// //         img: "https://i5.walmartimages.com/asr/fcbf064d-fd1e-41c4-ab02-77bcf396b861.a4d924574644125329d22c687c2fc5e6.jpeg",
// //         desc: "computer ni hasfa;lsf ;lasdjf",
// //         category:"cloth"
// //     },
// //     {
// //         name: "Computer 2",
// //         img: "https://i5.walmartimages.com/asr/fcbf064d-fd1e-41c4-ab02-77bcf396b861.a4d924574644125329d22c687c2fc5e6.jpeg",
// //         desc: "computer ni hasfa;lsf ;lasdjf",
// //         category:"it"
// //     },
// //     {
// //         name: "Computer 3",
// //         img: "https://i5.walmartimages.com/asr/fcbf064d-fd1e-41c4-ab02-77bcf396b861.a4d924574644125329d22c687c2fc5e6.jpeg",
// //         desc: "computer ni hasfa;lsf ;lasdjf",
// //         category:"it"
// //     },
// //     {
// //         name: "Cloth 2",
// //         img: "https://i5.walmartimages.com/asr/fcbf064d-fd1e-41c4-ab02-77bcf396b861.a4d924574644125329d22c687c2fc5e6.jpeg",
// //         desc: "computer ni hasfa;lsf ;lasdjf",
// //         category:"cloth"
// //     },
// //     {
// //         name: "Cloth 3",
// //         img: "https://i5.walmartimages.com/asr/fcbf064d-fd1e-41c4-ab02-77bcf396b861.a4d924574644125329d22c687c2fc5e6.jpeg",
// //         desc: "computer ni hasfa;lsf ;lasdjf",
// //         category:"cloth"
// //     }

// // ];

// // const productsHTML = rawData
// //     .filter(data => data.category == filterCategory)    
// //     .map(prodObj => `
// //     <article>
// //         <h2>${prodObj.title}</h2>
// //         <img style="width:100px; height:auto;" src="${prodObj.images[0]}" alt="">
// //         <p>${prodObj.description}</p>
// //     </article>`)
// //     .reduce((prev, current) => prev + current);
// //filterlesen datanaasaa html ee zurna

// // const products = [
// //     {
// //         name: "Computer 1",
// //         img: "https://i5.walmartimages.com/asr/fcbf064d-fd1e-41c4-ab02-77bcf396b861.a4d924574644125329d22c687c2fc5e6.jpeg",
// //         desc: "computer ni hasfa;lsf ;lasdjf"
// //     }
// //     ,
// //     {
// //         name: "Computer 2",
// //         img: "https://i5.walmartimages.com/asr/fcbf064d-fd1e-41c4-ab02-77bcf396b861.a4d924574644125329d22c687c2fc5e6.jpeg",
// //         desc: "computer ni hasfa;lsf ;lasdjf"
// //     }
// //     ,
// //     {
// //         name: "Computer 3",
// //         img: "https://i5.walmartimages.com/asr/fcbf064d-fd1e-41c4-ab02-77bcf396b861.a4d924574644125329d22c687c2fc5e6.jpeg",
// //         desc: "computer ni hasfa;lsf ;lasdjf"
// //     }
// //     ,
// //     {
// //         name: "Computer",
// //         img: "https://i5.walmartimages.com/asr/fcbf064d-fd1e-41c4-ab02-77bcf396b861.a4d924574644125329d22c687c2fc5e6.jpeg",
// //         desc: "computer ni hasfa;lsf ;lasdjf"
// //     }
// // ];

// // const productSection = document.getElementById("prodSection");

// // let productsHTML = "<h2>Бараанууд</h2>";
// // for (const product of products) {
// //      productsHTML = `
// //     <article>
// //         <h2>${product.name}</h2>
// //         <img style="width:100px; height:auto;" src="${product.img}" alt="">
// //         <p>${product.desc}</p>
// //     </article>`;

//     // productSection.insertAdjacentHTML("afterbegin", productsHTML);

// // }

// // productSection.innerHTML = productsHTML;