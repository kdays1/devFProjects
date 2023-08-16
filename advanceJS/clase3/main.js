const promesa = new Promise ((resolve,reject) => {
    setTimeout(() => {
        const success = true;

        if (success) {
            resolve('Operation succesfully completed');
        } else {
            reject('Error 404 NOT FOUND');
        }
    }, 2000)
})

promesa
    .then(resultado => {
        console.log(resultado);
    })
    .catch(error => {
        console.log(error)
    })