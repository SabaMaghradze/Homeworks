
const section1 = document.getElementById('section1');

fetch('https://dummyjson.com/products?limit=10&skip=0')
    .then(response => {
        if (!response.ok) {
            throw Error('An error occurred.');
        }
        return response.json();
    })
    .then(data => {
        // renderData(data.products);
        console.log(data.products);
        console.log(Array.isArray(data.products));
        console.log(data.products.length);

        const productsDiv = document.createElement('div');
        productsDiv.setAttribute('class', 'productsDiv');
        section1.appendChild(productsDiv);

        const productDiv = document.createElement('div');
        productDiv.setAttribute('class', 'productDiv');
        productsDiv.appendChild(productDiv);
        
    })
    .catch(error => {
        console.log('ERROR');
    });

function renderData(data) {

}
