function suma(a, b) {
    return a + b;
}

function calc(a, b, callback) {
    return callback(a, b);
}

//Crear el llamado

console.log(calc(6, 2, suma));


function date(callback) {
    console.log(new Date);
    setTimeout(function () {
        let date = new Date;
        callback(date);
    },3000)
}

function printDate(dateNow) {
    console.log(dateNow);
}

date(printDate);

// Sirven para establecer de una manera más clara el código que e requiera hacer