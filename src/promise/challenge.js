// import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi) {
    return fetch(urlApi);
}

// fetchData(`${API}/categories`)
//     .then(response => response.json())
//     .then(categories => {
//         for (let categorie in categories) {
//             console.log(categorie, categories[categorie].name)
//         }
//     }).catch(error => console.log(error));

fetchData(`${API}/products`)
.then(response => response.json())
.then(products => {
    for (let product in products){
        console.log(product, products[product])
    }
})