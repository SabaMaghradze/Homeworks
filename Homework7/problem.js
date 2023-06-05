// დაწერეთ Responsive Navbar ჰამბუგერ მენიუს გამოყენებით.
// დომის ელემენტების შექმნა, ყველაფერი დაწერეთ ჯავასკრპტში !!!
const container = document.createElement('div');
container.setAttribute('class', 'container');
container.style.maxWidth = '1920px';
container.style.width = '100%';
container.style.margin = '0 auto';

document.body.appendChild(container);

const header = document.createElement('header');
header.style.width = '100%';
header.style.backgroundColor = '#002244';
header.style.padding = '10px 0 10px 10px';

container.appendChild(header);

const bars = document.createElement('button');

bars.setAttribute('class', 'bars');


const bar = document.createElement('div');
bar.setAttribute('class', 'bar');


bars.appendChild(bar);



const navList = ['Home', 'About Us', 'Contact'];

let ul = document.createElement('ul');

let li;
let a;

for (let i = 0; i < navList.length; i++) {
  li = document.createElement('li');
  a = document.createElement('a');
  a.href = '#';
  li.appendChild(a);
  a.innerText = navList[i];
  a.style.color = 'white';
  a.style.textDecoration = 'none';
  ul.appendChild(li);
}

const secondDiv = document.createElement('secondDiv');
secondDiv.setAttribute('class', 'secondDiv');

header.appendChild(secondDiv);
secondDiv.appendChild(bars);
secondDiv.appendChild(ul);

bars.addEventListener('click', (clickEvent) => {
  bars.classList.toggle('activated');
  ul.classList.toggle('activated');
  secondDiv.classList.toggle('activated');
})

console.log(container);

