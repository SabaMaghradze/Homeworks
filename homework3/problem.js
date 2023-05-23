// problem 1
// დაწერეთ კოდი რომელიც გაარჩევს რიცხვი კენტია თუ ლუწი

let x;
if (x % 2) {
    console.log("The number is even");
} else {
    console.log("The number is odd");
};

// problem2
// დაწერეთ კოდი რომელიც მომხარებელს შეეკითხება საკუთარ სახელს შეყვანილი ინფორმაცია შეინახეთ ცვლადში.
//კონსოლში გამოიტანეთ რა შეიყვანა მომხმარებელმა
// (მომხმარებლისგან ინფორმაციის მისაღებად გამოიყენეთ prompt() ფუნქცია,)
// (კონსოლში დასაბეჭდათ გამოიყენეთ console.log() ფუნქცია )

let name = prompt("Enter your name: ");

console.log(name);


// problem 3
// მომხმარებელს მოთხოვეთ რომ შეიყვანოს რიცხვი, თუ კენტ რიცხვს შეიყვანს კონსოლში დაბეჭდეთ
// რომ მომხმარებელმა შეიყვანა კენტი რიცხვი თუ ლუწს შეიყვანს მაშინ შესაბამისად კონსოლში დაბეჭდეთ
// რომ მომხარებელმა შეიყვანა ლუწი რიცხვი.
// (მომხმარებლისგან ინფორმაციის მისაღებად გამოიყენეთ prompt() ფუნქცია,)
// (კონსოლში დასაბეჭდათ გამოიყენეთ console.log() ფუნქცია )

let number = prompt("Enter a number: ");
if (number % 2) {
    console.log("The user entered an odd number");
} else {
    console.log("The user entered an even number");
};


// problem 4
// მომხმარებელს მოთხოვეთ რომ შეიყვანოს მისთვის საყვარელი ხილი
// ვაშლის შემთხვევაში კონსოლში დაბეჭდეთ რომ 'ვაშლი კარგი არჩევანია ! '
// მსხლის შემთხვევაში კონსოლში დაბეჭდეთ რომ 'მსხალი სჯობს! '
// ყურძნის შემთხვევაში კონსოლში დაბეჭდეთ რომ 'ყურძენი საუკეთესოა! '
// სურვილის შემთხვევაში დაამატეთ რამდენი ვარიანტიც გინდათ
// სხვა შემთხვევებში (თუ ისეთ ხილს შეიყვანს მომხმარებელი რომელიც ჩვენ არ გვიწერია ან ზოგადად ხილს არ შეიყვანს)
// კონსოლში დაბეჭდეთ "მოცემული მნიშვნელობა არ არის ჩვენს სიაში."
// დავალება შეასრულეთ Switch გამოყენებით

let fruit = prompt("Enter your favourite fruit: ");
switch (fruit) {
    case "apple":
        console.log("Apple is a fine choice");
        break;
    case "pear":
        console.log("Pear is better!");
        break;
    case "grapes":
        console.log("Grapes are the best!");
        break;
    case "banana":
        console.log("Banana's also fine");
        break;
    default:
        console.log("Given value is not in our list.");
};

// problem 5
// კონსოლში დაბეჭდეთ 1-100 მდე ყველა ლუწი რიცხვი

for (let i = 1; i < 100; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
};
