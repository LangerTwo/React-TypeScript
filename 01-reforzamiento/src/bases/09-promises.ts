

const myPromise = new Promise( (resolve, reject) => {

    setTimeout(() => {
        //! Yo quiero mi dinero
        // resolve('100');
        reject('No hay dinero');
    }, 2000); // 2 segundos

});

myPromise.then((myMoney) => {
    console.log(`Tengo mi dinero: ${myMoney}`);
})
.catch((reason) => {
    console.warn(reason);
})
.finally(() => {
    console.log('Continuar con mi vida');
});