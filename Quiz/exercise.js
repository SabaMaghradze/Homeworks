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

const fetchButton = document.getElementById('fetchButton');
const genderSelection = document.getElementById('genderSelection');
const userDiv = document.getElementById('userDiv');

fetchButton.addEventListener('click', fetchUser);


function fetchUser() {

    let gender = genderSelection.value;

    let url = 'https://randomuser.me/api';
    if (gender !== 'all') {
        url += `?gender=${gender}`;
    }


    fetch(url)
        .then(response => response.json())
        .then(data => {

            // in order to clear the existing userDiv value
            userDiv.innerHTML = '';

            const user = data.results[0];

            const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`;
            const email = user.email;
            const picture = user.picture.medium;

            const nameElement = document.createElement('p');
            nameElement.textContent = `Name: ${fullName}`;

            const emailElement = document.createElement('p');
            emailElement.textContent = `Email: ${email}`;

            const pictureElement = document.createElement('img');
            pictureElement.src = picture;
            pictureElement.style.height = '100px';
            pictureElement.style.width = '100px';

            userDiv.appendChild(nameElement);
            userDiv.appendChild(emailElement);
            userDiv.appendChild(pictureElement);
        })
        .catch(error => console.log('an error occurred'));
}
