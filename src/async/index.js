// crear funcion asincrona con una arrow function
const fnAsync = () => {
    return new Promise((resolve, reject) => {
        // validacion de si la promesa es resuelta o rechazada
        // con un if tradicional
        // if(true){
        //     setTimeout(() => resolve('Async!!!'), 2000);
        // } else {
        //     reject(new Error('Error!!!'));
        // }

        // con operador ternario ? = if, : = else
        (true)
            ? setTimeout(() => resolve('Async!!!'), 2000) : reject(new Error('Error!!!'));
    });
}

// las palabras reservaas async para el cuerpo de la funcion
// await se usa dentro de la logica que se implementa
const anotherFn = async () =>{
    const something = await fnAsync();
    console.log(something);
    // esta linea debe esperar que la promesa se resuelva o se rechaze para poderse ejecutar
    console.log('Hellow!!!')
}

console.log('Antes del llamado')
anotherFn();
console.log('despues del llamado')