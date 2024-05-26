import Uzesgelen from "./uzes-module.js";

const productListContainer = document.querySelector('#uzesSection .medeelel');
const cartListContainer = document.querySelector('.listCart');
const cartIconSpan = document.querySelector('.icon-cart span');
const body = document.querySelector('body');
const closeCartButton = document.querySelector('.close');
let items = [];
let cart = [];

function toggleCart() {
    body.classList.toggle('showCart');
}

function updateCartCount() {
    let totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
    cartIconSpan.innerText = totalQuantity;
}

// niit une tootsooloh
function calculateTotalPrice() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// niit uniig update hiih
function updateTotalPriceDisplay() {
    const totalPrice = calculateTotalPrice();
    const totalPriceDisplay = document.getElementById('totalPriceDisplay');
    if (totalPriceDisplay) {
        totalPriceDisplay.textContent = `Total Price: ₮${totalPrice}`;
    }
}

// cart hseg ruu item nemeh
function addToCart(item) {
    const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id);
    if (existingItemIndex !== -1) {
        cart[existingItemIndex].quantity++;
    } else {
        cart.push({ id: item.id, quantity: 1, ...item });
    }
    updateCartCount();
    renderCart();
    updateTotalPriceDisplay();
}
// uzeglen button darah
const buyTicketsButton = document.querySelector('.buyTicketsBtn');
if (buyTicketsButton) {
    buyTicketsButton.addEventListener('click', () => {
    });
}

//display deerh uniig shinechleh
updateTotalPriceDisplay();

function renderItem(item) {
    const itemHTML = document.createElement('uzes-item');
    const prod = new Uzesgelen(item);
    itemHTML.innerHTML = prod.Render();
    productListContainer.appendChild(itemHTML);
    itemHTML.querySelector('.addToCartBtn').addEventListener('click', () => addToCart(item));
}

function renderItems(data) {
    productListContainer.innerHTML = '';
    data.forEach(renderItem);
}

function renderCart() {
    cartListContainer.innerHTML = '';
    cart.forEach(cartItem => {
        const cartItemHTML = document.createElement('div');
        cartItemHTML.classList.add('item');
        
        // free bwl free gj hewleh
        const totalPrice = cartItem.price === "free" ? "Free" : `₮${cartItem.price * cartItem.quantity}`;
        
        cartItemHTML.innerHTML = `
            <div class="image">
                <img src="${cartItem.images}">
            </div>
            <div class="name">
                ${cartItem.title}
            </div>
            <div class="totalPrice">${totalPrice}</div> <!-- Display the total price -->
            <div class="quantity">
                <span class="minus">-</span>
                <span>${cartItem.quantity}</span>
                <span class="plus">+</span>
            </div>`;
        cartListContainer.appendChild(cartItemHTML);

        //nemeh hasah esehiig sonsoh
        const minusButton = cartItemHTML.querySelector('.minus');
        const plusButton = cartItemHTML.querySelector('.plus');
        
        minusButton.addEventListener('click', () => handleQuantityChange(cartItem.id, 'decrement'));
        plusButton.addEventListener('click', () => handleQuantityChange(cartItem.id, 'increment'));
    });
}

function handleQuantityChange(itemId, action) {
    const itemIndex = cart.findIndex(item => item.id === itemId);
    if (itemIndex !== -1) {
        if (action === 'increment') {
            cart[itemIndex].quantity++;
        } else if (action === 'decrement') {
            if (cart[itemIndex].quantity > 1) {
                cart[itemIndex].quantity--;
            } else {
                // item cartnd 0 bolwol ustah
                cart.splice(itemIndex, 1);
            }
        }
        updateCartCount();
        renderCart();
        updateTotalPriceDisplay();
    }
}




document.querySelector('.icon-cart').addEventListener('click', toggleCart);
closeCartButton.addEventListener('click', toggleCart);

fetch("./humrugjson.json")
    .then(response => response.json())
    .then(data => {
        items = data.uzesgelen;
        renderItems(items); // item aa neg negeern renderleh
    })
    .catch(error => console.error('Error fetching data:', error));

// Function to categorize prices
const getPriceCategory = (price) => {
    if (typeof price === "string" && price.toLowerCase() === "free") {
        return "free";
    } else if (typeof price === "number" && !isNaN(price)) {
        if (price >= 1 && price <= 39999) {
            return "lower price";
        } else if (price >= 40000 && price <= 79999) {
            return "middle price";
        } else if (price >= 80000) {
            return "over price";
        }
    }
    return "unknown";
};

// Function to categorize dates
const getDateCategory = (eventDate) => {
    const currentDate = new Date();
    const eventDateObj = new Date(eventDate);
    const sevenDaysFromNow = new Date(currentDate);
    sevenDaysFromNow.setDate(currentDate.getDate() + 7);

    if (eventDateObj < currentDate) {
        return "recent";
    } else if (eventDateObj <= sevenDaysFromNow) {
        return "thisweek";
    } else {
        return "upcoming";
    }
};

const usp = new URLSearchParams(decodeURIComponent(document.location.search));
const searchKeyword = usp.get("keyword");
const searchResultDiv = document.querySelector(".search-result");

if (searchResultDiv) {
    if (searchKeyword) {
        searchResultDiv.style.display = "block";
        searchResultDiv.innerHTML = `Searching results for <b>"${searchKeyword}"</b>`;
    } else {
        searchResultDiv.style.display = "none";
    }
}

// Function to get filter values
const getFilterValues = (paramName) => {
    const values = usp.getAll(paramName);
    return values.length > 0 ? values : null;
};

// Function to check if the item contains the keyword
const containsKeyword = (item, keyword) => {
    if (!keyword) {
        return true;
    }

    const lowerKeyword = keyword.toLowerCase();

    const artist_name = item.artist_name ? item.artist_name.toLowerCase() : "";
    const description = item.description ? item.description.toLowerCase() : "";

    return (
        artist_name.includes(lowerKeyword) ||
        description.includes(lowerKeyword)
    );
};

// Fetch data filtert tohiruulad
fetch("./humrugjson.json")
    .then(result => result.json())
    .then(data => {
        const rawData = data.uzesgelen;

        if (!rawData) {
            console.error("Error: No data found.");
            return;
        }

        const filterConditions = {
            date: getFilterValues("date"),
            genre: getFilterValues("genre"),
            venue: getFilterValues("venue"),
            price: getFilterValues("price"),
            exhibitiontype: getFilterValues("exhibitiontype"),
            activities: getFilterValues("activities"),
            keyword: usp.get("keyword"),
            id: usp.get("id") // id ajillahgui bga
        };

        const filteredData = rawData.filter(item => {
            const itemPriceCategory = getPriceCategory(item.price);
            const itemDateCategory = getDateCategory(item.date);

            const keywordMatches = filterConditions.keyword
                ? containsKeyword(item, filterConditions.keyword)
                : true;
            const idMatches = filterConditions.id
                ? item.id === filterConditions.id
                : true;

            return Object.entries(filterConditions).every(([key, value]) => {
                if (key === "price") {
                    return !value || value.includes(itemPriceCategory);
                } else if (key === "date") {
                    return !value || value.includes(itemDateCategory);
                } else if (key === "keyword") {
                    return keywordMatches;
                } else if (key === "id") {
                    return idMatches;
                } else {
                    return !value || value.includes(item[key]);
                }
            });
        });

        renderItems(filteredData); // dahin render duudah
    })
    .catch(error => console.error("Error fetching JSON data:", error));
// id ilgeej bga hseg