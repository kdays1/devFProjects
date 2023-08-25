function preparePizza(flavour, time) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Pizza ready:${flavour}`)
        }, time)
    })
}

const pizzas = [
    preparePizza('Hawaiana', 2000),
    preparePizza('3 cheeses', 3000),
    preparePizza('Mexican', 1000)
]

// Promise.all(pizzas)
//     .then(pizzas => {
//         pizzas.map(pizza => console.log(pizza))
//     })
//     .catch(error => console.log(error))

async function sendPizzaOrder() {
    try {
        const pizzasReady = await Promise.all(pizzas);
        pizzasReady.map(pizza => console.log(pizza))
    } catch(error) {
        console.error(error);
    }
}

sendPizzaOrder();