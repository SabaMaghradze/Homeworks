// https://jsonplaceholder.typicode.com/users წამოიღეთ user-ებზე ინცორმაცია მოცემული API დან
// და შექმენით ინტერფეისი.
// კარგი იქნება თუ ერორსაც გაითვალისწინებთ და ააწყობთ flow ერორ ჰენდლინგისთვის.

let url = 'https://jsonplaceholder.typicode.com/users';

fetch(url)
  .then(response => {
    if (response.ok == false) {
      throw new Error('Network response was not OK');
    }
    return response.json();
  })
  .then(users => {
    display(users[0]);
  })
  .catch(error => {
    console.log('Error:', 'An error occurred');
  });

const usersDiv = document.createElement('div');
usersDiv.setAttribute('class', 'usersDiv');
document.body.appendChild(usersDiv);

let userDiv;



function display(info) {
  for (let i = 0; i < info.length; i++) {
    userDiv = document.createElement('div');
    userDiv.setAttribute('class', 'userDiv');
    userDiv.innerText = info[i];
    usersDiv.appendChild(userDiv);
  }
}

console.log(usersDiv);

//   დასრულება ვერ მოვასწარი
