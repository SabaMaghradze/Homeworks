// საჭიროა შევქმნათ აპლიკაცია რომელიც `Fetch User` ღილაკზე დაჭერით
// მოგცემს სასუალებას რომ წამოვიღოთ მომხმარებლის ინფორმაცია
// **https://randomuser.me/api** მოცემული მისამართიდან და მიღებული მონაცემები
//  დავხატოთ ინტერფეისში.
// ღილაკის დაჭერის შემდეგ უნდა იცვლებოდეს ასევე ინფორმაცია.

// დამატებითი დავალება
// აპლიკაციაში უნდა მქონდეს საშუალება ავირჩიო რამდენი მომხმარებლის ინფორმაცია წამოვიღო.

// უნდა შემეძლოს წამოვიღო მხოლოდ male ან female ან ორივე ერთად.

// წინასწარ მოვნიშნო რა მონაცემების წამოღება მინდა და შემდეგ წამოვიღო ყველა საჭირო მონაცემი
// მაგალითად წამოვიღო მხოლოდ მომხმარებლის სახელი, საცხოვრებელი ადგილი, იმეილი,ტელეფონის ნომერი და სურათი

// ინტერფეისში გვჭირდება რომ გამოვიტანოთ

// - ფოტო: `picture.medium` *როგორც სურათი*
// - ელ ფოსტა: `email` *როგორც ტექსტი*
// - ქალაქი: `location.city` *როგორც ტექსტი*
// - სრული სახელი: `name` *როგორც ტექსტი*
//  🔔 სახელი შეიცვას სამ მნიშნველობას საჭიროა მოცემული სამი სტრიგნი გადვაბათ ერთმანეთზე

// მაგ:

// ```json
// {
//   "name": {
//     "title": "Monsieur",
//     "first": "Josef",
//     "last": "Garnier"
//   }
// }
// ```
// უნდა გამოიტანოთ ინტერფეისში როგორც

// `Monsieur Josef Garnier`

// 🎨 ინტერფეისის სტილი შეგიძლიათ შექმნათ თქვენი გემოვნებით

const container = document.createElement('div');
container.setAttribute('class', 'container');
document.body.appendChild(container);

const content = document.createElement('div');
content.setAttribute('class', 'content');
container.appendChild(content);

const fetchButton = document.createElement('button');
fetchButton.setAttribute('class', 'fetchButton');
content.appendChild(fetchButton);

fetchButton.innerText = 'Fetch Users';

let url = 'https://randomuser.me/api'

let obj;

function loadUsers(source) {
    fetch(source)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new error('An error occurred');
        })
        .then((data) => {
            displayUsers(data.results);
        })
}

fetchButton.addEventListener('click', () => {
    loadUsers(url);
});


function displayUsers(info) {
    const usersWrapper = document.createElement('div');
    content.appendChild(usersWrapper);
    info.forEach(user => {
        const userDiv = displayUser(user);
        usersWrapper.appendChild(userDiv);
    })
};

function displayUser(user) {
    const userWrapper = document.createElement('div');
    const name = document.createElement('h1');
    name.textContent = user.name.first;
    userWrapper.appendChild(name);

    return userWrapper;
};
