// Json files
const topSeelingProducts = [
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

const showTopSellProducts = () => {
    for (let i = 0; i < topSeelingProducts.length; i++) {
        topSellInner.innerHTML += `<div class="top-sell-card" id="top-sell-card">
        <a href="`+ topSeelingProducts[i].url + `"><img src="` + topSeelingProducts[i].imageurl + `" alt="">
            <span class="top-sell-discount">-45%</span>
        </a>
        <a href="`+ topSeelingProducts[i].url + `">
            <p>`+ topSeelingProducts[i].title + `</p>
        </a>
        <h4>$`+ topSeelingProducts[i].price + `</h4>
        <p><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
                class="fa-regular fa-star"></i> <span>(`+ topSeelingProducts[i].reviewNumber + `)</span></p>
        <button class="main-eng-font top-sell-button" onclick="addToCart(`+ i + `)">Add to cart</button>
        <p class="added-to-cart" id="added-to-cart">Added to cart</p>
    </div>`;
    };
};

showTopSellProducts();

const addToCart = (j) => {
    let addedToCart = document.querySelectorAll("#added-to-cart");
    let topSellCard = document.querySelectorAll("#top-sell-card");
    let newCartItem = {
        "id": topSeelingProducts[j].id,
        "imageurl": topSeelingProducts[j].imageurl,
        "price": topSeelingProducts[j].price,
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





    topSellCard[j].innerHTML = `
        <a href="`+ topSeelingProducts[j].url + `"><img src="` + topSeelingProducts[j].imageurl + `" alt="">
            <span class="top-sell-discount">-45%</span>
        </a>
        <a href="`+ topSeelingProducts[j].url + `">
            <p>`+ topSeelingProducts[j].title + `</p>
        </a>
        <h4>$`+ topSeelingProducts[j].price + `</h4>
        <p><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
                class="fa-regular fa-star"></i> <span>(`+ topSeelingProducts[j].reviewNumber + `)</span></p>
        <button class="main-eng-font top-sell-button" onclick="addToCart(`+ j + `)">Add to cart</button>
        <p class="added-to-cart display-block" id="added-to-cart">Added to cart</p>`;

    const showTopSellProductsAfterAddedtoCartMessageEnd = () => {
        topSellCard[j].innerHTML = `
            <a href="`+ topSeelingProducts[j].url + `"><img src="` + topSeelingProducts[j].imageurl + `" alt="">
                <span class="top-sell-discount">-45%</span>
            </a>
            <a href="`+ topSeelingProducts[j].url + `">
                <p>`+ topSeelingProducts[j].title + `</p>
            </a>
            <h4>$`+ topSeelingProducts[j].price + `</h4>
            <p><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
                    class="fa-regular fa-star"></i> <span>(`+ topSeelingProducts[j].reviewNumber + `)</span></p>
            <button class="main-eng-font top-sell-button" onclick="addToCart(`+ j + `)">Add to cart</button>
            <p class="added-to-cart" id="added-to-cart">Added to cart</p>`;
    };

    setTimeout(showTopSellProductsAfterAddedtoCartMessageEnd, 300);

};

// 