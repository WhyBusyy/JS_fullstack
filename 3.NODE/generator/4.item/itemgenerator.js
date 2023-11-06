import { v4 as uuidv4 } from "uuid";
import * as fs from "node:fs";

//=================================
const category = {
    Coffee:[
        "Espresso",
        "Americano",
        "Cappuccino",
        "Latte",
        "Mocha",
        "Macchiato",
        "Flat White",
        "Frappuccino",
        "Iced Coffee",
        "Cold Brew",
        "Affogato",
        "Irish Coffee"
        ],
    Beverage:[
        "Chai Latte",
        "Green Tea Latte",
        "Hot Chocolate"
        ],
    Dessert:[
        "Muffin",
        "Croissant",
        "Bagel",
        "Sandwich"
        ],
};

//===============================
const coffeePrice = [3500, 5000, 4500, 4000];
const beveragePrice = [5000, 5500, 6000, 6500];
const dessertPrice = [8000, 7500, 8500, 9000];

function priceSet(arr) {
    const priceRandom = (Math.floor(Math.random()*arr.length));

    return arr[priceRandom];
}

//===============================

const data = [];
for (let key in category) {
    for (let i = 0; i < category[key].length; i++) {
        const itemId = uuidv4();
        const itemName = category[key][i];
        const categoryOfItem = key;
        let itemPrice = "price";

        if(categoryOfItem == 'Coffee'){
            itemPrice = priceSet(coffeePrice);
        } else if(categoryOfItem == 'Beverage') {
            itemPrice = priceSet(beveragePrice);
        } else {
            itemPrice = priceSet(dessertPrice);
        };

        data.push(`${itemId},${itemName},${categoryOfItem},${itemPrice}`);
    }
}

//===============================

const csvData = data.join('\n');

fs.writeFile('item.csv', csvData, (err) => {
    if (err) throw err;
    console.log('CSV 파일이 성공적으로 생성되었습니다.');
});
