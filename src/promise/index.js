// las promesas tienen 3 estados
// pendiente, cumplida, rechazada

const cows = 15;

const countCows = new Promise(function (resolve, reject) {
    if (cows > 10) {
        resolve(`We have ${cows} cows in the farm`);
    } else {
        reject(`There is no cows in the farm`);
    }
});

countCows.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log('Finally')
})

export function delay(time, message) {
    return new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve(message);
        }, time);

    });
}