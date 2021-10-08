const products = [
    { id: 1, title: 'Notebook', price: 2000, img: '2.jpg' },
    { id: 2, title: 'Mouse', price: 20, img: '1.jpg' },
    { id: 3, title: 'Keyboard', price: 200, img: '2.jpg' },
    { id: 4, title: 'Gamepad', price: 50, img: '1.jpg' },
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (title, price, img) => {

    return `<div class="product-item">
    <img src=${img} alt="1">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item.title, item.price, item.img));
    let [a, b, c, d] = productsList;
    document.querySelector('.products').innerHTML = a + b + c + d;
};

renderPage(products);