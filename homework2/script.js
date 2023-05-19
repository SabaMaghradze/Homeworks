const car = {
    color: "grey",
    manufacturer: "Lexus",
    model: "IS250",
    engineDisplacement: "2500cc"
};

console.log(car.model + ", " + car.color);

// problem2

car.owner = car.manufacturer;
delete car.manufacturer;

car.owner = "saba";

console.log(car);

// problem 3

const names = ["Kevin", "Lucas", "Matheo", "Billy", "Lisbeth", "Erik"];

console.log(names[2]);

names.push("Mark");
names.shift();

console.log(names);
