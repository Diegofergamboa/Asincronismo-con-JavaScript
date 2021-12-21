// ! Vamos a usar ECMAScript 6

const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('Correcto');
        } else {
            reject('No se cumplió la promesa');
        }
    });
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));


const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if(false) {
            setTimeout(() => {
                resolve('True');
            }, 2000)
        } else {
            const error = new Error('Somethings wrong');
            reject(error);
        }
    })
}

somethingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err))