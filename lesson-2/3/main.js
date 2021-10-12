alert('Привет');

class burger {
    constructor() {
        this.name = name;
        this.size = size;
        this.price = price;
        this.calories = calories;
        this.ingredients();
    }
    ingredients() {

    }
};
let masBurger = [
    { name: "Большой бургер", price: 100, calories: 40 },
    { name: "Маленький бургер", price: 50, calories: 20 }
];
let masIngredients = [
    { name: "Сыр", price: 10, calories: 20 },
    { name: "Салат", price: 20, calories: 10 },
    { name: "Картошка", price: 15, calories: 10 },
    { name: "Приправа", price: 15, calories: 0 },
    { name: "Майонез", price: 20, calories: 5 }
];
let size = +prompt(`Какого размера вы хотите бургер\n ${masBurger[0].name} ${masBurger[0].price} руб.- введите - 1 \n ${masBurger[1].name} ${masBurger[1].price} руб.- введите - 2`);
// examination(size);
// function examination(parameter) {
//     if (parameter > 2 || parameter < 0) {
//         alert("Введено некорректное число, попробуйте еще раз!!")
//         size = +prompt('Какого размера вы хотите бургер' + "\n Большой - введите - 1 \n Маленький - введите - 2");
//         examination(size);
//         return size;
//     }
// };


let ingredients = +prompt(`Какие ингредиенты вы хатите добавить\n ${masIngredients[0].name} ${masIngredients[0].price} руб.- введите - 1\n ${masIngredients[1].name} ${masIngredients[1].price} руб.- введите - 2\n ${masIngredients[2].name} ${masIngredients[2].price} руб.- введите - 3\n ${masIngredients[3].name} ${masIngredients[3].price} руб.- введите - 4\n ${masIngredients[4].name} ${masIngredients[4].price} руб.- введите - 5\n Если ни чего не хотите добавлять - введите - 0`);
let sumPrice = masIngredients[ingredients - 1].price + masBurger[size - 1].price;
let sumCalories = masIngredients[ingredients - 1].calories + masBurger[size - 1].calories;
let nameBurger = masBurger[size - 1].name;
alert(`Вы заказали ${nameBurger} \nЦена: ${sumPrice} руб.\nВсего калорий: ${sumCalories}`);
