type Dish = {
    name: string
    price: number
}

const menu: Dish[] = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 },
]

let cashInRegister: number = 100
let nextOrderid: number = 1

type Queue = {
    pizza: Dish
    status: "ordered" | "completed"
    id: number
}
const orderQueue: Queue[] = []



function addNewPizza(pizzaObj: Dish): void {
    menu.push(pizzaObj)
}

function placeOrder(pizzaname: string): Queue | void {
    const pizza = menu.find((item) => item.name === pizzaname);
    if (!pizza) {
        console.log("The pizza doesn't exist in your menu.")
        return
    }
    cashInRegister += pizza.price;
    let newOrder: Queue = { pizza: pizza, status: "ordered", id: nextOrderid++ };

    orderQueue.push(newOrder)

    return newOrder
}

function completeOrder(id: number) {
    let findOrder = orderQueue.find(item => item.id === id);
    if (!findOrder) {
        console.log("Order not found")
        return
    }
    findOrder.status = "completed"

    return findOrder
}

addNewPizza({ name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({ name: "BBQ Chicken", price: 10 })
addNewPizza({ name: "Spicy Sausage", price: 11 })

placeOrder("Chicken Bacon Ranch")
completeOrder(1)

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue", orderQueue)