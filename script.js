// Json files
const allProducts = [
    {
        "id": 1,
        "title": "Lorem ipsum dolor sit amet.",
        "imageurl": 'images/category-one.png',
        "price": 21,
        "offer": "-45%",
        "url": "#",
        "review": 5,
        "reviewNumber": 87
    },
    {
        "id": 2,
        "title": "Lorem ipsum dolor sit amet.",
        "imageurl": 'images/category-two.png',
        "price": 19,
        "offer": "-45%",
        "url": "#",
        "review": 5,
        "reviewNumber": 87
    },
    {
        "id": 3,
        "title": "Lorem ipsum dolor sit amet.",
        "imageurl": 'images/category-three.png',
        "price": 28,
        "offer": "-45%",
        "url": "#",
        "review": 5,
        "reviewNumber": 87
    },
    {
        "id": 4,
        "title": "Lorem ipsum dolor sit amet.",
        "imageurl": 'images/category-four.png',
        "price": 30,
        "offer": "-45%",
        "url": "#",
        "review": 5,
        "reviewNumber": 87
    },
    {
        "id": 5,
        "title": "Lorem ipsum dolor sit amet.",
        "imageurl": 'images/category-five.png',
        "price": 9,
        "offer": "-45%",
        "url": "#",
        "review": 5,
        "reviewNumber": 87
    },
    {
        "id": 6,
        "title": "Lorem ipsum dolor sit amet.",
        "imageurl": 'images/category-six.png',
        "price": 5,
        "offer": "-45%",
        "url": "#",
        "review": 5,
        "reviewNumber": 87
    },
    {
        "id": 7,
        "title": "Lorem ipsum dolor sit amet.",
        "imageurl": 'images/category-seven.png',
        "price": 8,
        "offer": "-45%",
        "url": "#",
        "review": 5,
        "reviewNumber": 87
    },
    {
        "id": 8,
        "title": "Lorem ipsum dolor sit amet.",
        "imageurl": 'images/category-eight.png',
        "price": 21,
        "offer": "-45%",
        "url": "#",
        "review": 5,
        "reviewNumber": 87
    },
    {
        "id": 1,
        "title": "Lorem ipsum dolor sit amet.",
        "imageurl": 'images/category-one.png',
        "price": 21,
        "offer": "-45%",
        "url": "#",
        "review": 5,
        "reviewNumber": 87
    },
    {
        "id": 2,
        "title": "Lorem ipsum dolor sit amet.",
        "imageurl": 'images/category-two.png',
        "price": 19,
        "offer": "-45%",
        "url": "#",
        "review": 5,
        "reviewNumber": 87
    }
];

let cartValues = [];

// Cart Code
const headerCartItemsInner1 = document.getElementById('header-cart-items-inner-1');
let cartTotalPrice = document.getElementById('cart-total-price');
let cartTotalQtt = document.getElementById('cart-total-qtt');

for (let i = 0; i < cartValues.length; i++) {
    headerCartItemsInner1.innerHTML += `<div class="header-cart-item-single-1"><div class="header-cart-item-image"><a href="#"><img src="` + cartValues[i].imageurl + `"
                        alt=""></a></div><div class="header-cart-item-price main-eng-font">$<span
                    id="cart-item-price">`+ cartValues[i].price + `</span></div><div class="header-cart-item-qtt"><button onclick="removeItemfromCart(` + i + `)">-</button><input
                    class="main-eng-font" id="item-quantity-cart" type="text" readonly value="`+ cartValues[i].value + `"><button onclick="addItemtoCart(` + i + `)" >+</button></div></div>`;
};

let cartItemPrice = document.querySelectorAll('#cart-item-price');
let cartItemQtt = document.querySelectorAll('#item-quantity-cart');

const removeItemfromCart = (i) => {
    cartItemPrice = document.querySelectorAll('#cart-item-price');
    cartItemQtt = document.querySelectorAll('#item-quantity-cart');
    if (cartItemQtt[i].value >= 1) {
        cartItemQtt[i].value = Number(cartItemQtt[i].value) - 1;
        cartValues[i].value -= 1;
    };
    cartItemPrice[i].innerText = cartValues[i].price * Number(cartItemQtt[i].value);
    calculateTotalCartPrice();
    calculateTotalProductQuantity();
};

const addItemtoCart = (i) => {
    cartItemPrice = document.querySelectorAll('#cart-item-price');
    cartItemQtt = document.querySelectorAll('#item-quantity-cart');
    cartItemQtt[i].value = Number(cartItemQtt[i].value) + 1;
    cartValues[i].value += 1;

    cartItemPrice[i].innerText = cartValues[i].price * Number(cartItemQtt[i].value);
    calculateTotalCartPrice();
    calculateTotalProductQuantity();
};

const calculateTotalCartPrice = () => {
    let totalCartPrice = 0;
    for (let i = 0; i < cartValues.length; i++) {
        totalCartPrice += cartValues[i].price * cartValues[i].value;
    };
    cartTotalPrice.innerText = totalCartPrice;
};

calculateTotalCartPrice();

const calculateTotalProductQuantity = () => {
    let cartTotalQuantity = 0;
    for (let i = 0; i < cartValues.length; i++) {
        cartTotalQuantity += cartValues[i].value;
    };
    cartTotalQtt.innerText = cartTotalQuantity;
};

calculateTotalProductQuantity();

// Top sell area

const topSellInner = document.getElementById('top-sell-inner');


for (let i = 0; i < allProducts.length; i++) {
    topSellInner.innerHTML += `<div class="top-sell-card" id="top-sell-card">
        <a href="`+ allProducts[i].url + `"><img src="` + allProducts[i].imageurl + `" alt="">
            <span class="top-sell-discount">-45%</span>
        </a>
        <a href="`+ allProducts[i].url + `">
            <p>`+ allProducts[i].title + `</p>
        </a>
        <h4>$`+ allProducts[i].price + `</h4>
        <p><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
                class="fa-regular fa-star"></i> <span>(`+ allProducts[i].reviewNumber + `)</span></p>
        <button class="main-eng-font top-sell-button" onclick="addToCart(`+ i + `)">Add to cart</button>
        <p class="added-to-cart" id="added-to-cart">Added to cart</p>
    </div>`;
};

const addToCart = (j) => {
    let addedToCart = document.querySelectorAll("#added-to-cart");
    let topSellCard = document.querySelectorAll("#top-sell-card");
    let newCartItem = {
        "id": allProducts[j].id,
        "imageurl": allProducts[j].imageurl,
        "price": allProducts[j].price,
        "value": 1,
    };

    const isItemAddedtoCart = cartValues.filter(item => item.id == newCartItem.id).length >= 1 ? true : false;

    if (isItemAddedtoCart) {
        let addedItem = cartValues.filter(item => item.id == newCartItem.id);
        addedItem[0].value++;
    } else {
        cartValues.push(newCartItem);
    }

    headerCartItemsInner1.innerHTML = "";
    for (let i = 0; i < cartValues.length; i++) {
        headerCartItemsInner1.innerHTML += `<div class="header-cart-item-single-1"><div class="header-cart-item-image"><a href="#"><img src="` + cartValues[i].imageurl + `"
        alt=""></a></div><div class="header-cart-item-price main-eng-font">$<span
    id="cart-item-price">`+ cartValues[i].price + `</span></div><div class="header-cart-item-qtt"><button onclick="removeItemfromCart(` + i + `)">-</button><input
    class="main-eng-font" id="item-quantity-cart" type="text" readonly value="`+ cartValues[i].value + `"><button onclick="addItemtoCart(` + i + `)" >+</button></div></div>`;
    };
    calculateTotalCartPrice();
    calculateTotalProductQuantity();

    Toastify({
        text: "Added to cart",
        duration: 2000,
        close: true,
        avatar: "images/check-mark.png",
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "rgb(26, 185, 2)",
        },
        onClick: function () { } // Callback after click
    }).showToast();

};

// For you area
const forYou = document.getElementById("just-for-you-inner");
const loadMore = document.getElementById("load-more");

if (allProducts.length > 5) {
    for (let i = allProducts.length - 1; i >= allProducts.length - 5; i--) {
        forYou.innerHTML += `<div class="just-for-you-card">
        <a href="`+ allProducts[i].url + `"><img src="` + allProducts[i].imageurl + `" alt="">
            <span class="just-for-you-discount">`+ allProducts[i].offer + `</span>
        </a>
        <a href="`+ allProducts[i].url + `">
            <p>`+ allProducts[i].title + `</p>
        </a>
        <h4>$`+ allProducts[i].price + `</h4>
        <p><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
                class="fa-regular fa-star"></i> <span>(`+ allProducts[i].reviewNumber + `)</span></p>
        <button class="main-eng-font just-for-you-button" onclick="addToCart(`+ i + `)">Add to cart</button>
        <p class="added-to-cart" id="added-to-cart">Added to cart</p>
    </div>`;
    };
} else {
    for (let i = allProducts.length - 1; i > 0; i--) {
        forYou.innerHTML += `<div class="just-for-you-card">
        <a href="`+ allProducts[i].url + `"><img src="` + allProducts[i].imageurl + `" alt="">
            <span class="just-for-you-discount">`+ allProducts[i].offer + `</span>
        </a>
        <a href="`+ allProducts[i].url + `">
            <p>`+ allProducts[i].title + `</p>
        </a>
        <h4>$`+ allProducts[i].price + `</h4>
        <p><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
                class="fa-regular fa-star"></i> <span>(`+ allProducts[i].reviewNumber + `)</span></p>
        <button class="main-eng-font just-for-you-button" onclick="addToCart(`+ i + `)">Add to cart</button>
        <p class="added-to-cart" id="added-to-cart">Added to cart</p>
    </div>`;
    };
};

