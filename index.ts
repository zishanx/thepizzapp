type Dish = {
    id: number
    name: string
    price: number
}

const menu: Dish[] = [
    { id: 1, name: "Margherita", price: 8 },
    { id: 2, name: "Pepperoni", price: 10 },
    { id: 3, name: "Hawaiian", price: 10 },
    { id: 4, name: "Veggie", price: 9 },
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

function getPizzaDeatil(identifier: string | number): Dish | string {
    let pizza
    if (typeof (identifier) === "string") {
        pizza = menu.find(item => item.name === identifier)

    } else {
        pizza = menu.find(item => item.id === identifier)
    }

    if (pizza) {
        return pizza
    } else {
        return `No pizza found`
    }
}

addNewPizza({ id: 5, name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({ id: 6, name: "BBQ Chicken", price: 10 })
addNewPizza({ id: 7, name: "Spicy Sausage", price: 11 })

placeOrder("Chicken Bacon Ranch")
completeOrder(1)

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue", orderQueue)