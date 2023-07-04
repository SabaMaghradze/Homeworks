const container = document.querySelector('.container');
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
        const productsArray = data.products;

        const productsDiv = document.createElement('div');
        productsDiv.setAttribute('class', 'productsDiv');
        section1.appendChild(productsDiv);

        const objProperties = ['id', 'title', 'description', 'price', 'discountPercentage', 'rating', 'stock', 'brand', 'category', 'thumbnail'];

        for (let i = 0; i < productsArray.length; i++) {
            const productDiv = document.createElement('div');
            productDiv.setAttribute('class', 'productDiv');
            productsDiv.appendChild(productDiv);

            const ul = document.createElement('ul');
            ul.setAttribute('class', 'section1Ul');
            productDiv.appendChild(ul);

            for (let j = 0; j < objProperties.length; j++) {
                const li = document.createElement('li');
                li.setAttribute('class', 'property');
                li.innerText = `${objProperties[j]}: ${productsArray[i][objProperties[j]]}`;
                ul.appendChild(li);
            }
        };
    })
    .catch(error => {
        console.log('ERROR');
    });

console.log(container);

