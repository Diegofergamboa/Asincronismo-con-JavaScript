// ! Vamos a usar ECMAScript 6

const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Correcto');
        } else {
            reject('No se cumplió la promesa');
        }
    });
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));