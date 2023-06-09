

// გააკეთეთ პატარა აპლიკაცია სადაც გამოიყენებთ წინა დავალებაში გაკეთებულ ნავიგაციის ბარს,
// გექნებათ ღილაკი რომელზე დაჭერის შემთხვევაშიც თქვენი აპლიკაცია გადავა ღამის რეჟიმში (night mode).
const container = document.createElement('div');
container.style.maxWidth = '1920px';
container.style.width = '100%';
container.style.margin = '0 auto';
document.body.appendChild(container);

const header = document.createElement('header');
container.appendChild(header);


const logo = document.createElement('h1');
logo.innerText = 'LOGO';

header.appendChild(logo);

const navBar = document.createElement('nav');
const ul = document.createElement('ul');

header.appendChild(navBar);
navBar.appendChild(ul);

const hamburger = document.createElement('button');
header.appendChild(hamburger);

const navList = ['Home', 'About Us', 'Contact'];

let li;
let a;
const array = [];
const pages = ['index.html', 'Nightmode.html', 'Cards.html'];

for (let i = 0; i < navList.length; i++) {
  li = document.createElement('li');
  a = document.createElement('a');
  ul.appendChild(li);
  li.appendChild(a);
  a.innerText = navList[i];
  a.href = pages[i]
  array.push(a.innerText);
}


const bar = document.createElement('div');
hamburger.appendChild(bar);
bar.setAttribute('class', 'bar');



const mobileNav = ['Home', 'About Us', 'Contact'];


hamburger.addEventListener('click', (clickEventt) => {
  hamburger.classList.toggle('isActive');
  ul.classList.toggle('isActive');
  li.classList.toggle('isActive');
})

console.log(container);



// გააკეთეთ მომხმარებლის ქარდი სადაც გამოიტანთ პირველი 5 მომხმარებლების სახელს, username, იმეილს, საცხოვრებელი ქალაქს და ქუჩას,
// კომპანიის სახელს სადაც მუშაობს და ტელეფონის ნომერს და სურათს.

// have fun :)
