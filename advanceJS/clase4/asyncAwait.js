function getIngredients() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Ingredients gathered')
        }, 2000);
    })
}

function prepareMix() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Mix is ready')
        }, 2000);
    })
}

function addToppings() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Toppings added')
        }, 2000);
    })
}

function bakePizza() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if (false) {
                resolve('Pizza backed')
            } else {
                reject(new Error ('Burned pizza'))
            }
        }, 2500);
    })
}

async function preparePizza() {
    try{
    const ingredients = await getIngredients()
    console.log("Make a pizza with Async/Await");
    console.log(ingredients);

    const mix = await prepareMix();
    console.log(mix);

    const toppings = await addToppings();
    console.log(toppings);

    const bake = await bakePizza() ;
    console.log(bake);
    } 
    catch(error) {
        console.log('An error ocurred ', error);
    }
}

preparePizza();