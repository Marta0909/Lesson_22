"use strict"

console.log('привіт!');

// це коментар

/* і це коментар */

let userName1 = 'Marta';
console.log(userName1);

let userAge = 32;
console.log(userAge);
userAge = 33;
console.log(userAge);

let userNationality;
// ...код....
userNationality = 'ukrainian';
console.log(userNationality);

let userNumber = 9;
console.log(userNumber);
let userNumber2;
console.log(userNumber2);
userNumber2 = userNumber;
console.log(userNumber2);

// область видимості

let userAge2 = 10;

if (10 > 5) {
	let userAge2 = 15;
	console.log(userAge2);
	if (20 > 10) {
	}
}

console.log(userAge2);

// const

const userAge3 = 100;

console.log(userAge3);

// типи даних

let userAge4 = 45;
console.log(typeof userAge4);
console.log(userAge4);

let userAge5;
console.log(typeof userAge5);
console.log(userAge5);

let userAge6 = null;
console.log(typeof userAge6);
console.log(userAge6);

let userAge7 = 0;
console.log(typeof userAge7);
console.log(userAge7);

let result = 10 / 0;
console.log(typeof result);
console.log(result);

let result2 = 'Марта' * 2;
console.log(typeof result2);
console.log(result2);

let myName = 'Марта';
console.log(typeof myName);
console.log(myName);

const myName1 = 'Марта';
const myAge = 32;
const myInfo = `ім'я: ${myName1}, вік: ${myAge}`;

console.log(myInfo);

const statement = 10 > 5;
console.log(typeof statement);
console.log(statement);

/*
console.log('Учим JS')

console.log('JS')
console.log('Учим')


console.log('Учим);
console.log('JS');

console.log('Учим') console.log('JS') 

*/

// константи

// 1.

let eyesColor;

// 2.

let user;
let userName = 'Вася';

user = userName;
console.log(user);

// 3.

let user1 = 'Вася';
let age = 36;

let myage = 36;

if (true) {
	var size = 15;
}
console.log(size);

// типи даних

let userAge11 = 36;
let userInfo11 = "Фрилансер ${userAge11}";
console.log(userAge11);
console.log(userInfo11);

let userHeight = 145 / 0;
console.log(userHeight);



