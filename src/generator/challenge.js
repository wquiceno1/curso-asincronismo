const API = 'https://api.escuelajs.co/api/v1'; //API en mayúscula porque es una referencia que no va a cambiar

async function fetchData(urlApi) {
    const response = await fetch(urlApi);
    const data = await response.json() // el await le indica que se debe esperar la solucion de la peticion
    return data;
}


const anotherFn = async (urlApi) => {
    try {
        // se recuperan todos los productos en la variable products
        const products = await fetchData(`${urlApi}/products`);

        // se hace una nueva peticion para obtener un producto determinado en products[0], del cual se quiere obtener el id
        const product = await fetchData(`${urlApi}/products/${products[0].id}`);


        // se hace otra peticion para obtener la categoria del producto especificado anteriormente
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`);

        // ahora a mostrar los resultados de las peticiones
        console.log(products);
        console.log(product.title);

    } catch (error) {
        console.log(error);
    }
}

anotherFn(API);

console.log('*****************************************');
