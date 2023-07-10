const container = document.querySelector('.container');
const section1 = document.getElementById('section1');

let url = 'https://dummyjson.com/products?limit=12&skip=0';

let currentPage;

function fetchData(source, limit, skip) {
    fetch(source)
        .then(response => {
            if (!response.ok) {
                throw Error('An error occurred.');
            }
            return response.json();
        })
        .then(data => {
            const productsArray = data.products;
            renderProducts(productsArray);
        })
        .catch(error => {
            console.log('ERROR');
        });
}

const objProperties = ['id', 'title', 'description', 'price', 'discountPercentage', 'rating', 'stock', 'brand', 'category', 'thumbnail'];

function renderProducts(data) {
    // Clear existing products
    section1.innerHTML = '';

    const productsDiv = document.createElement('div');
    productsDiv.setAttribute('class', 'productsDiv');
    section1.appendChild(productsDiv);

    for (let i = 0; i < data.length; i++) {
        const productDiv = document.createElement('div');
        productDiv.setAttribute('class', 'productDiv');
        productsDiv.appendChild(productDiv);

        const ul = document.createElement('ul');
        ul.setAttribute('id', 'section1Ul');
        productDiv.appendChild(ul);

        for (let j = 0; j < objProperties.length; j++) {
            const li = document.createElement('li');
            li.setAttribute('class', 'property');
            li.innerText = `${objProperties[j]}: ${data[i][objProperties[j]]}`;
            ul.appendChild(li);

            if (li.scrollWidth > productDiv.offsetWidth) {
                li.style.cursor = 'pointer';
                li.addEventListener('click', () => {
                    productDiv.classList.toggle('prExpanded');
                    li.classList.add('liExpanded');
                });
            }
        }
    }
}

function updatePagination(page) {
    const paginationLis = document.querySelectorAll('#paginationUl li');
    for (let i = 0; i < paginationLis.length; i++) {
        paginationLis[i].classList.remove('active');
    }
    paginationLis[page - 1].classList.add('active');
}

function handlePaginationClick(page) {
    currentPage = page;
    const skip = (currentPage - 1) * 12;
    const updatedUrl = `https://dummyjson.com/products?limit=12&skip=${skip}`;
    fetchData(updatedUrl);
    updatePagination(currentPage);
}

fetchData(url);

const paginationUl = document.getElementById('paginationUl');
const paginationLis = paginationUl.getElementsByTagName('li');

paginationLis[0].classList.add('active');

for (let i = 0; i < paginationLis.length; i++) {
    paginationLis[i].addEventListener('click', () => {
        handlePaginationClick(i + 1);
    });
}
