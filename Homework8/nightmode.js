



const section1 = document.createElement('section');
section1.setAttribute('class', 'section1');

container.appendChild(section1);

const sectionDiv = document.createElement('div');
sectionDiv.setAttribute('class', 'nightModeDiv')
section1.appendChild(sectionDiv);

const text = document.createElement('h1');
text.innerText = 'Night Mode';
text.setAttribute('class', 'nightModeText');

const icon = document.createElement('i');
icon.classList.add('fa-solid', 'fa-lightbulb')

sectionDiv.appendChild(text);

sectionDiv.appendChild(icon);

icon.addEventListener('click', (nightmodee) => {
    header.classList.toggle('nightMode');
    section1.classList.toggle('nightMode');
    text.classList.toggle('nightMode');
    icon.classList.toggle('nightMode');
    ul.classList.toggle('nightMode');
    logo.classList.toggle('nightMode');
});

// დაჭერისას მხოლოდ ელემენტის კონტენტს ენიჭებათ nightmode კლასის სტილები ბექგრაუნდად, ვერ გავიგე რატო.

// console.log(container);
