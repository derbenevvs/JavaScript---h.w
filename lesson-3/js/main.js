const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

// let getRequest = (url, cb) => {
//     let xhr = new XMLHttpRequest();
//     // window.ActiveXObject -> xhr = new ActiveXObject()
//     xhr.open("GET", url, true);
//     xhr.onreadystatechange = () => {
//         if(xhr.readyState === 4){
//             if(xhr.status !== 200){
//                 console.log('Error');
//             } else {
//                 cb(xhr.responseText);
//             }
//         }
//     };
//     xhr.send();
// };

class ProductsList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];//массив товаров из JSON документа
        this._getProducts()
            .then(data => { //data - объект js
                this.goods = [...data];
                this.render()
            });
    }
    // _fetchProducts(cb){
    //     getRequest(`${API}/catalogData.json`, (data) => {
    //         this.goods = JSON.parse(data);
    //         console.log(this.goods);
    //         cb();
    //     })
    // }
    _getProducts() {

        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }
    calcSum() {
        return this.allProducts.reduce((accum, item) => accum += item.price, 0);
    }
    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ProductItem(product);
            //            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }

    }
}


class ProductItem {
    constructor(product, img = 'https://via.placeholder.com/200x150') {
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
    }
    render() {
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} $</p>
                    <button class="buy-btn" onclick="buy()">Купить</button>
                </div>
            </div>`
    }
}

let list = new ProductsList();
console.log(list.allProducts);


class basket {
    constructor(productBuyNew = ".buy-contener") {
        this.productBuyNew = productBuyNew;
        this.goodsBuy = [];
    }
}

let buyContener = document.createElement("div");
buyContener.classList.add("buy-contener");
document.body.insertBefore(buyContener, null);



function buy() {
    fetch("https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/getBasket.json")
        .then(text => text.json())
        .then(contents => {
            console.log(contents.contents[0].product_name);
        });
    let productBuyNew = document.createElement("div");
    let buttonDel = document.createElement("button");
    let contentBloc = document.createElement("div");
    contentBloc.classList.add("content-bloc")
    buttonDel.classList.add("buy-button");

    productBuyNew.insertBefore(buttonDel, null);
    productBuyNew.insertBefore(contentBloc, buttonDel);
    buttonDel.insertAdjacentHTML('afterbegin', `<h3>Удалить</h3>`);
    buttonDel.onclick = function () {
        buyContener.removeChild(productBuyNew);
    };

    productBuyNew.classList.add("buy-product");
    buyContener.insertBefore(productBuyNew, null);
    // contentBloc.insertAdjacentHTML('afterbegin', `<h3>${contents.contents[0].product_name}</h3>`);
    // console.log(buyContener);

};

