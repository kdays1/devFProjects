// const promesa = new Promise ((resolve,reject) => {
//     setTimeout(() => {
//         const success = true;

//         if (success) {
//             resolve('Operation succesfully completed');
//         } else {
//             reject('Error 404 NOT FOUND');
//         }
//     }, 5000)
// })

function square(_num) {
    return new Promise(function (resolve,reject) {
        setTimeout(() => {
            if(_num<0) {
                reject('The number is negative, cant be squared')
            } else {
                const numSquared = Math.pow(_num, 2);
                resolve(numSquared)
            }
        }, 5000);
    })
}

let input;
input = 2;
square(input)
    .then(result => {
        console.log('The square is', result);
    })
    .catch(error => {
        console.log(error);
    })
