//Coding challange #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

let massMark = 78;
let heightMark = 1.69;

let massJohn = 92;
let heightJohn = 1.95;

let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark);
console.log(BMIJohn);

let markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);

massMark = 95;
heightMark = 1.88;

massJohn = 85;
heightJohn = 1.76;

BMIMark = massMark / (heightMark * heightMark);
BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark);
console.log(BMIJohn);

markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);


//or that

function BMI(mass, height) {
    return mass / (height**2);
}

let firstMarks = {
    mass: 78,
    height: 1.69
};
let bmiFirstMarks= BMI(firstMarks.mass, firstMarks.height)

let secondMarks = {
    mass: 95,
    height: 1.88
};
let bmiSecondMarks= BMI(secondMarks.mass, secondMarks.height)

console.log(bmiFirstMarks);
console.log(bmiSecondMarks);

if(bmiFirstMarks>bmiSecondMarks) console.log("BMI of the first Marks is highter than the second one");