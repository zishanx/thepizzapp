

const menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 },
]

let cashInRegister = 100
let nextOrderid = 1
const orderQueue = []



function addNewPizza(pizzaObj) {
    menu.push(pizzaObj)
}

function placeOrder(pizzaname) {
    const pizza = menu.find((item) => item.name === pizzaname);
    if(!pizza){
        console.log("The pizza doesn't exist in your menu.")
        return
    }
    cashInRegister +=  pizza.price;
    let newOrder = { pizza: pizza, status: "ordered", id: nextOrderid++ };

    orderQueue.push(newOrder)

    return newOrder
}

function completeOrder(id) {
    let findOrder = orderQueue.find(item => item.id === id);
    findOrder.status = "completed"

    return findOrder
}

addNewPizza({name: "Chicken Bacon Ranch", price: 12})
addNewPizza({name: "BBQ Chicken", price: 10})
addNewPizza({name: "Spicy Sausage", price: 11})

placeOrder("Chicken Bacon Ranch")
completeOrder(1)

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue", orderQueue)