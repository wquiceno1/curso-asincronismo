function* gen () {
    yield 1;
    yield 2;
    yield 3;
}

const g = gen();

console.log(g.next());
console.log(g.next());

// se usa el asterisco despues de la palabra function para marcarla como una generator

// esta funcion recibe cualquier array y lo MediaRecorder, a cada elemento le da el valor yield para porder iterarlo 
function* itarate(arr){
    for(let value of arr){
        yield value
    }
}
const myArray = ['William', 'Dario', 'Yudy', 'Celeste'];
const it = itarate(myArray);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);