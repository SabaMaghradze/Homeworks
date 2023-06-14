// https://jsonplaceholder.typicode.com/users წამოიღეთ user-ებზე ინცორმაცია მოცემული API დან
// და შექმენით ინტერფეისი.
// კარგი იქნება თუ ერორსაც გაითვალისწინებთ და ააწყობთ flow ერორ ჰენდლინგისთვის.

let url = 'https://jsonplaceholder.typicode.com/users';

let forDOM;

fetch(url)
  .then(response => {
    if (response.ok == false) {
      throw new Error('Network response was not OK');
    }
    return response.json();
  })
  .then(users => {
    forDOM = users;
  })
  .catch(error => {
    console.log('Error:', 'An error occurred');
  });

setTimeout(() => {
    console.log(forDOM);
}, 3000);

//   დასრულება ვერ მოვასწარი
