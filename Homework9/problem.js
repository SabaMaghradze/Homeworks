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
    console.log(users);
  })
  .catch(error => {
    console.log('Error:', 'An error occurred');
  });

//   დასრულება ვერ მოვასწარი
