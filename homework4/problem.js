// problem 1
// შექმენით ფუნქცია რომელიც დააბრუნებს რიცხვი კენტია თუ ლუწი

function checkNum(x) {
    if (typeof x !== "number") {
        console.log("That is not a number.")
    }
    else if (x % 2 === 0) {
        console.log("The number is even.");
    } else {
        console.log("The number is odd.");
    }
};

// problem2
// შექმენით ფუნქცია რომელიც მომხმარებელს შეეკითხება საკუთარ სახელს და შემდეგ დააბრუნებს მას.
//კონსოლში გამოიტანეთ რა შეიყვანა მომხმარებელმა
// (მომხმარებლისგან ინფორმაციის მისაღებად გამოიყენეთ prompt() ფუნქცია,)
// (კონსოლში დასაბეჭდათ გამოიყენეთ console.log() ფუნქცია )

function yourName() {
    let name = prompt("Enter your name: ");
    return name;
};

let userName = yourName();
console.log(userName);

// problem 3
// მომხმარებელს მოთხოვეთ რომ შეიყვანოს რიცხვი, თუ კენტ რიცხვს შეიყვანს კონსოლში დაბეჭდეთ
// რომ მომხმარებელმა შეიყვანა კენტი რიცხვი თუ ლუწს შეიყვანს მაშინ შესაბამისად კონსოლში დაბეჭდეთ
// რომ მომხარებელმა შეიყვანა ლუწი რიცხვი.
// (მომხმარებლისგან ინფორმაციის მისაღებად გამოიყენეთ prompt() ფუნქცია,)
// (კონსოლში დასაბეჭდათ გამოიყენეთ console.log() ფუნქცია )

function oddOrEven() {
    let num = prompt("Enter a number: ");
    while (isNaN(num)) {
        num = prompt("Invalid value, please enter a number: ");
    }

    if (num % 2 === 0) {
        console.log("The number is even.");
    } else {
        console.log("The number is odd.");
    }
}


// problem 4
// კონსოლში დაბეჭდეთ 1-100 მდე ყველა ლუწი რიცხვი

for (let i = 1; i < 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// let x = 0;
// while (x < 100) {
//     if (x % 2 === 0) {
//         console.log(x);
//     }
//     x++;
// }

// problem 5
// მომხმარებელს მოთხოვეთ რომ შეიყვანოს რიცხვები მანამ სანამ არ შეიყვანს უარყოფით რიცხვს

while (true) {
    let num = prompt("Enter a negative number: ");
    let int = parseInt(num);
    if (isNaN(int)) {
        console.log("That is not a number at all.");
    }
    else if (int < 0) {
        break;
    } else {
        console.log("That is not a negative number");
        continue;
    }
}

// problems 6
let numbers = [10, 12, 42, 55, 100, 90, 32, 55];
let result = [];
// numbers მასივში იპოვეთ რიცხვები რომელიც იყოფა 5-ზე ლუპის საშუალებით,
// შეინახეთ result მასივში.

for (let number of numbers) {
    if (number % 5 == 0) {
        result.push(number);
    }
};

// problem 7
let names = ["Gio", "Luka", "Nika", "Ani", "Eka", "Nini", "Sopo"];
// კონსოლში დაბეჭდეთ names მასივში არსებული ყველა ელემენტი, გამოტოვეთ მხოლოდ ნიკა.
// ლუპის საშუალებით.

for (let name of names) {
    if (name !== "Nika") {
        console.log(name);
    }
};

//problem 8

//შექმენით ფუნქცია რომელიც პარამეტრად მიიღებს მასივს რომელშიც იქნება მინიმუმ 5 user-ის ობიექტი
// user ობიექტი უნდა ქონდეს შემდეგი properties სახელი,გვარი,სქესი,ასაკი.
// თუ ფუნქციაში გადაცემულ პარამეტრში არ იქნებ მინიმუმ 5 მომხმარებელი დააბრუნეთ წინადადება: "მასივში აუცილებლად უნდა იყოს მინიმუმ 5 მომხმარებელი"
// თუ მინიმუმ 5 მომხმარებელი იქნება დააბრუნეთ თითოეული მათგანის სრული სახელი, გვარი და ასაკი.
// (array.length გამოიყენეთ იმისთვის რომ გაიგოთ არის თუ არა მასივში შესაბამისი რაოდენობის ელემენტი)

//problem 9
// დაწერეთ ფუნქცია რომელიც დააბრუნებს გადაცემული მომხმარებლის ობიექტი ადმინი არის თუ არა
// const user = {
//   isAdmin: true,
// };
// const user1 = {
//   isAdmin: false,
// };

// problem 10

// დაწერეთ ფუნქცია რომელიც იპოვის და დააბრუნებს მასივში ყველაზე დიდ რიცხვს.

// const numbers = [
//   1, 4, 2, 14, 90, 13, 2, 0, 78, 199, 12, 313, 315, 789, 31, 12, 1, 1, 3467, 90,
//   70, 34, 43, 189,
// ];

// problem 11

// დაწერეთ ფუნქცია რომელიც იპოვის და დააბრუნებს მასივში ყველაზე პატარა რიცხვს.

// const numbers = [
//     1, 4, 2, 14, 90, 13, 2, 0, 78, 199, 12, 313, 315, 789, 31, 12, 1, 1, 3467, 90,
//     70, 34, 43, 189,
//   ];

// Have fun :) :)
