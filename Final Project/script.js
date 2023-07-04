const container = document.getElementsByClassName('container');
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

        for (let i = 0; i < data.products.length; i++) {
            productDiv.textContent = `${data.products[i].title}, ${data.products[i].price}, ${data.products[i].brand}`;
        }
        
    })
    .catch(error => {
        console.log('ERROR');
    });

function renderData(data) {

}

console.log(container);

// card.innerText = `username: ${users[i].login.username},\n gender: ${users[i].gender},\n email: ${users[i].email},\n city: ${users[i].location.city},\n street: ${users[i].location.street.name},\n job date: ${users[i].dob.date},\n cellPhone: ${users[i].cell},\n picture: ${users[i].picture.medium}`;
