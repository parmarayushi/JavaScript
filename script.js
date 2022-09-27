'use strict'

console.log("Aayushi");
console.log(23);

let firstName = "Aayushi";
console.log(firstName);

// ## Coding Challeng 1.
let marksWeight = 78;
let marksHeight = 1.69;

let johnWeight = 92;
let JohnHeight = 1.95;

let BMIMark = marksWeight / marksHeight ** 2;
console.log(BMIMark);

let BMIJohn = johnWeight / JohnHeight ** 2;
console.log(BMIJohn);

let higherBMI = (BMIMark > BMIJohn);
console.log(higherBMI);

// ## Coding Challenge 2.
if (BMIMark > BMIJohn) {
    console.log(`Marks BMI (${BMIMark}) is higher than Johns BMI (${BMIJohn})`);
}
else {
    console.log(`Johns BMI (${BMIJohn}) is higher than Marks BMI (${BMIMark})`);
}

// ## Coding Challenge 3.
// let dolphinesScore = (96 + 108 + 89) / 3;
// let koalasScore = (88 + 91 + 110) / 3;

// if (dolphinesScore > koalasScore) {
//     console.log('Dolphines win trophy');
// } else if (koalasScore > dolphinesScore) {
//     console.log('Koalas win trophy');
// } else if (dolphinesScore === koalasScore) {
//     console.log("It's a tie between two teams");
// }

//Bonus 1
let dolphinesScore = (97 + 112 + 101) / 3;
let koalasScore = (109 + 95 + 106) / 3;

if (dolphinesScore > koalasScore && dolphinesScore >= 100) {
    console.log('Dolphines win trophy');
} else if (koalasScore > dolphinesScore && koalasScore >= 100) {
    console.log('Koalas win trophy');
} else if (dolphinesScore === koalasScore && dolphinesScore >= 100 && koalasScore >= 100) {
    console.log("It's a tie between two teams");
} else {
    console.log('No one wins the trophy');
}

// ## Coding Challenge 4.
let bill = 275;
let tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`the bill was ${bill} and tip was ${tip} and total value is ${bill + tip}`);

//-------------------------------------
function logger() {
    console.log('hello')
}
logger();

//-----------------------------------
function fruits(apple, mango) {
    console.log(apple, mango)
    let juice = `juice with ${apple} apples and ${mango} mangoes`;
    return juice;
}
let result = fruits(5, 2);
console.log(result);

let result2 = fruits(0, 3);
console.log(result2);

//---------------function declaration----------------
function calulateAge(birthYear) {
    return 2022 - birthYear
}

let age = calulateAge(2000);
console.log(age);

//--------------------------function expression--------------------
let calulateAge2 = function (birthYear) {
    return 2022 - birthYear;
}
let age2 = calulateAge2(2000);
console.log(age2);

//--------------arrow function--------------------
let calculateAge3 = birthYear => 2022 - birthYear;
let age3 = calculateAge3(2000)
console.log(age3);

//---------------------------
let yearsUntilretirement = (birthYear, firstName) => {
    let age = 2022 - birthYear;
    let retirementAge = 65 - age;
    // return retirementAge;
    return `${firstName} retires in ${retirementAge} years`
}
let years = yearsUntilretirement(2000, 'Aayushi');
console.log(years);

//----------------functions calling other functions-----------
function cutFruitPieces(fruit) {
    return fruit * 4;
}
function fruits(apple, mango) {
    let applePieces = cutFruitPieces(apple);
    let mangoPieces = cutFruitPieces(mango);

    let juice = `juice with ${applePieces} pieces of apples and ${mangoPieces} pieces of mangoes`;
    return juice;
}
console.log(fruits(2, 3));

//------------------reviewing function------------
let calcAge = function (year) {
    return 2022 - year;
}

let yearsUntilretirement2 = function (birthYear, firstName) {
    let age = calcAge(birthYear);
    let retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log('Already Retired');
        return -1;
    }
}
console.log(yearsUntilretirement2(2000, 'firstName'));
console.log(yearsUntilretirement2(1880, 'firstName'));

//## Coding Challenge 5.
let calculateAverage = (a, b, c) => (a + b + c) / 3;
let dolphines = calculateAverage(44, 23, 71);
let koalas = calculateAverage(65, 54, 49);

console.log(dolphines, koalas);

let winner = function (avgDolphines, avgKoalas) {
    if (avgDolphines >= 2 * avgKoalas) {
        console.log(`Dolphines are the winners (${avgDolphines} and ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphines) {
        console.log(`Koalas are winners (${avgKoalas} and ${avgDolphines})`);
    } else {
        console.log('No team Wins');
    }
}
winner(dolphines, koalas);

//------------arrays---------
let friends = ['Micheal', 'Peter', 'Steven']
// let year = new Array(1991, 2000, 2010, 20015, 2022);

console.log(friends);
console.log(friends[0]);

console.log(friends.length);
console.log(friends[friends.length - 1]);//friends at last position.

friends[2] = 'John';
console.log(friends);

//--------------------------------------
let firstname = 'Jonas';
let jonas = [firstname, 'Schemdtmen', 2022 - 2000, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

//------------------------------------
let calAge = function (birthYear) {
    return 2022 - birthYear;
}
let year = [1991, 2000, 2010, 2015, 2018];
console.log(calAge(year));//gives NaN because we cannot do operation on whole array but we can doit on individual array element.
console.log(calAge(year[0]));
console.log(calAge(year[year.length - 1]));

let age1 = [calAge(year), calAge(year[0]), calAge(year[year.length - 1])];
console.log(age1);

//----------------------
console.log(friends.push('Jonas'));//add elements at last position.
console.log(friends);

console.log(friends.unshift('Stephen'));//add element at first position.
console.log(friends);

console.log(friends.pop())//removes element from last position.
console.log(friends);

console.log(friends.shift());//removes element from first position.
console.log(friends);

console.log(friends.indexOf('Peter'));//gives index of Peter and returns 1.
console.log(friends.indexOf('Steven'));//gives indes of Steven and returns -1 as it is not present i the array.

//returns boolean, if elemnet is present in array or not.
console.log(friends.includes('Steven'));
console.log(friends.includes('Peter'));

// ## Coding Challenge 6.
let calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

let bills = [125, 555, 44];
let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log((tips));

let total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);

//Arrays is for structured data(Order Matters) and object is for unstructured data(Order doesn't matter). 
//--------------Objects---------------
let data = {
    firstName: 'Aayushi',
    lastName: 'Parmar',
    age: 2022 - 2000,
    city: 'valsad',
    hobbies: ['cooking', 'painting', 'badminton']
}

//-------Dot vs.Bracket Notation(retriving the object properties)------
console.log(data.lastName);//Dot notation.
console.log(data['lastName']);//Bracket Notation.

let nameKey = 'Name';
console.log(data['first' + nameKey]);//this can't be done in dot notation.

// let interstedIn = prompt('What do you want to know?')
// if (data[interstedIn]) {
//     console.log(data[interstedIn]);
// } else {
//     console.log('No data Found..');
// }

data.location = 'Gujarat';
data['email'] = 'abc12@gmail.com';
console.log(data);

// ## Coding Challenge 7.
// 'Aayushi has 3 hobbies, and his best hobby is painting.'
console.log(`${data.firstName} has ${data.hobbies.length} hobbies, and his best hobby is ${data.hobbies[1]}.`);

//-----------------Object methods-----------------------
let details = {
    firstName: 'Aayushi',
    lastName: 'Parmar',
    birthYear: 2000,
    city: 'valsad',
    hobbies: ['cooking', 'painting', 'badminton'],
    hasDriverLicense: true,

    //function attached to any object is called method.(only function express will work).
    // calculateAge: function (birthYear) {
    //     return 2022 - birthYear;
    // }

    // calculateAge: function () {
    //     return 2022 - this.birthYear;
    // }

    calculateAge: function () {
        this.age = 2022 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${details.firstName} is a ${details.age} years old and has a good hobby of ${details.hobbies[1]},and he has ${details.hasDriverLicense ? 'a' : 'no'} driver's license`;
    }

    //(function declaration will not work in object).
    // function calculateAge(birthYear) {
    //     return 2022 - birthYear;
    // }
};
console.log(details.calculateAge());
console.log(details);
// console.log(details['calculateAge'](2000));
console.log(details.getSummary());

// ## Coding Challenge 8.
let John = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
}

let Mark = {
    fullName: 'Mark Miller',
    mass: 978,
    height: 1.69,

    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    },
}

console.log(John.calcBMI());
console.log(Mark.calcBMI());

if (John.BMI > Mark.BMI) {
    console.log(`${John.fullName}'s BMI ${John.BMI} is higher than ${Mark.fullName}'s BMI ${Mark.BMI}.`);
} else if (Mark.BMI > John.BMI) {
    console.log(`${Mark.fullName}'s BMI ${Mark.BMI} is higher than ${John.fullName}'s BMI ${John.BMI}.`);
}

//----------------Loops-------------------
for (let i = 1; i <= 10; i++) {
    console.log(`${i}. Hello`);
}

let data1 = [
    'Aayushi',
    'Parmar',
    2022 - 2000,
    'valsad',
    ['cooking', 'painting', 'badminton'],
    true
];
let type = [];

for (let i = 0; i < data1.length; i++) {
    console.log(data1[i]);

    //filling types array
    // type[i]=typeof data1[i]
    type.push(typeof data1[i]);
}
console.log(type);

//-----------------------------
let years1 = [1991, 2007, 2015, 2022];
let ages = [];

for (let i = 0; i < years1.length; i++) {
    ages.push(2022 - years1[i]);
}
console.log(ages);

//--------continue and break--------------
console.log('---- ONLY STRINGS` ----');
for (let i = 0; i < data1.length; i++) {
    if (typeof data1[i] !== 'string') continue;
    console.log(data1[i], typeof data1[i]);
}

console.log('---- BREAK WHEN NUMBERS ----');
for (let i = 0; i < data1.length; i++) {
    if (typeof data1[i] === 'number') break;
    console.log(data1[i], typeof data1[i]);
}

//----------looping backward and loops in loops----------
for (let i = data1.length - 1; i >= 0; i--) {
    console.log(i, data1[i]);
}

//--------------------------
for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`----- Exercise ${exercise} -----`);
    for (let rep = 1; rep <= 5; rep++) {
        console.log(`Repetition ${rep}`);
    }
}

//------------while loop----------------
let rep = 1;
while (rep <= 10) {
    console.log(`While Loop------Repetition ${rep}`);
    rep++;
}

//-----------------------------
let dice = Math.trunc(Math.random() * 6) + 1;
while (dice != 6) {
    console.log(`You rolled ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
}

// ## Coding Challenge 9.
let calculateTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.25 : bill * 0.2;
}
let bill1 = [22, 295, 440, 37, 105, 10, 1100, 86, 52];
let tip1 = [];
let totals = [];

for (let i = 0; i < bill1.length; i++) {
    let tip = calculateTip(bill1[i]);
    tip1.push(tip);
    totals.push(tip + bill1[i]);
}
console.log(bill1, tip1, totals);

//Bonus
let calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
    return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));

// ## Coding Challenge 10.
let arr1 = [17, 21, 23];
let arr2 = [12, 5, -5, 0, 4];

// console.log(`...${arr1[0]}C ...${arr1[1]}C ...${arr1[2]}C...`);
const printForcast = function (arr) {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        str = str + `...${arr[i]}C in ${i + 1} days `
    }
    console.log(str + '...');
}
printForcast(arr1);

//----------------Destructuring arrays-------------------
const weekday = ['mon', 'tue', 'wed', 'thurs', 'fri', 'sat', 'sun'];
const openingHours = {
    [weekday[3]]: {
        open: 12,
        close: 22,
    },
    [weekday[4]]: {
        open: 11,
        close: 23,
    },
    [weekday[5]]: {
        open: 0,
        close: 24
    },
};
const restaurant = {
    restroName: 'Classico Italino',
    location: 'Via Angelo ,Frenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Garlic Bread', 'Soups', 'Caprese Salad'],
    mainMenu: ['Paneer', 'Pasta', 'Pizza'],
    openingHours,

    order(starterindex, mainindex) {
        return [this.starterMenu[starterindex], this.mainMenu[mainindex]]
    },

    orderDelivery({ starterindex = 1, mainindex = 0, time = '20:00', address }) {
        console.log(`Order Delivered ${this.starterMenu[starterindex]} and ${this.mainMenu[mainindex]} to ${address} at ${time}`);
    },

    orderPasta(ing1, ing2, ing3) {
        console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}`);
    },

    orderPizza(mainIngredient, ...otherIngredient) {
        console.log(mainIngredient);
        console.log(otherIngredient);
    }
};

restaurant.orderDelivery({
    time: '22:30',
    address: 'Tithal Road',
    mainindex: 2,
    starterindex: 2
});

restaurant.orderDelivery({
    address: 'Tithal Road'
})

//---------------------------------------------
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

//-------------------------------
let [first, , second] = restaurant.categories;//skip theelement which we dont wwant  bby keeping it blank.
console.log(first, second);

// const temp=first;
// first=second;
// second=temp;
// console.log(first,second) ;

[first, second] = [second, first]
console.log(first, second);

//------------------------------
const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

//----------------------------------
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;//returns [5,6]
// console.log(i, j);

const [i, , [j, k]] = nested;//returns 2 5 6
console.log(i, j, k);

//----------------------------------
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

//--------------------------------------------
// const { restroName, openingHours, categories } = restaurant;
// console.log(restroName, openingHours, categories);

// const { restroName: restaurantName, openingHours: hours, categories: tags } = restaurant;
// console.log(restaurantName, hours, tags);

// //--------Default Values----------------
// const { menu = [], starterMenu: starters = [] } = restaurant
// console.log(menu, starters);

// //----------Mutating Variables----------------
// let s = 111;
// let t = 999;
// const abc = { s: 23, t: 7, u: 14 };
// ({ s, t } = abc);
// console.log(s, t);

// //---------------Nested Objects--------------
// const { friday: { open, close } } = openingHours;
// console.log(open, close);
// // const { friday: { open: o, close: c } } = openingHours;
// // console.log(o, c);

// //--------Spread Operators-------------------
// //Spread Operators take all the elements from the array and doesn't create new variables and we can only use it where we have values seperated by commas(,).

// const arr3 = [7, 8, 9];
// // const badNewArr = [1, 2, arr3[0], arr3[1], arr3[2]];
// // console.log(badNewArr);

// const newArr = [1, 2, ...arr3];
// console.log(newArr);
// console.log(...newArr);
// console.log(1, 2, 7, 8, 9);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// //---------Copy array--------
// const mainMenuCopy = [...restaurant.mainMenu];

// //----------Join 2 arrays or more -------
// const wholeMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(wholeMenu);

// //Iterables are all arrays, strings, maps, sets but not objects. 
// const str1 = 'Jonas';
// const letters = [...str1, '', 'S.'];
// console.log(letters);
// console.log(...str1);

// //-------Real World Example---------
// // const ingrediants=[prompt("Let's make pasta! Ingrediant 1?"),prompt("Ingrediant 2?") ,prompt("Ingrediant 3?")];
// // console.log(ingrediants);
// // // restaurant.orderPasta(ingrediants[0],ingrediants[1],ingrediants[2]);
// // restaurant.orderPasta(...ingrediants);

// //Objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guisepe' }
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.restroName = 'Ristronte Rona';
// console.log(restaurantCopy.restroName);
// console.log(restaurant.restroName);

// //---------Rest Patterns and rest Parameters------------- 
// //Spread operator is to unpack the array while rest is to pack elemt in array.
// const arr4 = [1, 2, ...[3, 4]];//spread, beacause on right side of =.

// const [d, e, ...others] = [1, 2, 3, 4, 5]//rest, because on left side of =.
// console.log(d, e, others);

// //-----------------
// const [paneer, , pizza, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(paneer, pizza, otherFood);

// //Objects
// const { saturday, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

//Functions
const add = function (...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++)
        sum += numbers[i];
    console.log(sum);
};
add(2, 3);
add(3, 5, 6, 2);
add(1, 5, 3, 9, 5, 2, 7);

//----------------
restaurant.orderPizza('mashrooms', 'onion', 'olives', 'paneer');
restaurant.orderPizza('mashrooms');

//--------------&& and ||------------------
//use any datatype,return any datatype,short-circuiting.
console.log('------Or----');
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || 'Hello' || 23 || null);

//---------------------
const guests = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests);

const guests1 = restaurant.numGuests || 10;
console.log(guests1);

console.log('--------and------');
console.log(0 && 'Jonas');
console.log(3 && 'Jonas');
console.log('Hello' && 23 && null && 'Jonas');

// if(restaurant.orderPizza){
//     restaurant.orderPizza('mashrooms','spinach');
// }
//can also be written as
restaurant.orderPizza && restaurant.orderPizza('mashrooms', 'spinach');

//--------the nullish coalescing operator-------------
// restaurant.numGuests = 0;
const guests2 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests2);

//nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

//------Logical assignment operators----------
const restro1 = {
    restroName: 'Capiri',
    // numGuests: 20,
    numGuests: 0,
};

const restro2 = {
    restroName: 'La Pinoz',
    owner: 'Giovenni Rossi'
}
// restro1.numGuests = restro1.numGuests || 10;
// restro2.numGuests = restro2.numGuests || 10;
restro1.numGuests ??= 10;
restro2.numGuests ??= 10;

// restro1.owner = restro1.owner && '<Anonymous>';
// restro2.owner = restro2.owner && '<Anonymous>';
restro1.owner &&= '<Annonymous>'
restro2.owner &&= '<Annonymous>';

console.log(restro1);
console.log(restro2);

// ## Coding Challenge 11.
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Never', 'Pavard', 'Martin', 'Alaba', 'Daviers', 'Kimich', 'Goretzia', 'Coman', 'Muller', 'Gnarby', 'Lewandowski',
        ],
        [
            'Burki', 'Schule', 'Hummels', 'Akanji', 'Hakini', 'Weigl', 'Witsol', 'Hazard', 'Brandt', 'Sancho', 'Gotze'
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th,2022',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    }
};

const [players1, players2] = game.players;
console.log(players1, players2);

const [goalKeeper, ...fieldPlayers] = players1;
console.log(goalKeeper, fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Cutonio', 'Perisick']
const { odds: { team1, x: draw, team2 } } = game;
console.log(team1, draw, team2);

const printGoals = function (...players) {
    console.log(`${players.length} goals were scored`);
}
// printGoals('Daviers','Muller','Lewandowski','Kimich');
// printGoals('Daviers','Muller');
printGoals(...game.scored);

team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

//----------Looping arrays:The For-of loop----------
const menu1 = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu1) console.log(item);
for (const [i, el] of menu1.entries()) {
    console.log(`${i + 1}:${el}`);
}
// console.log(...menu1.entries());

//---------Optional chaining(?.)----------
if (restaurant.openingHours && restaurant.openingHours.mon) {
    console.log(restaurant.openingHours.mon.open);
}
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

for (const day of weekday) {
    const open = restaurant.openingHours[day]?.open ?? 'closed';
    console.log(`On ${day},we open at ${open}`);
}

//Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderResoto?.(0, 1) ?? 'Method does not exist');

//Arrays
const users = [
    {
        name: 'Jonas', email: 'joans@gmail.com'
    }
];
console.log(users[0]?.name ?? 'Users array empty');
if (users.length > 0) console.log(users[0].name);
else console.log('Users array empty');

//------Looping Objects(object keys,values and entries)------------
const properties = Object.keys(openingHours)
console.log(properties);

let openStr = `We are open on ${properties.length} days`;
for (const day of Object.keys(openingHours)) {
    openStr += `${day}`;
}
console.log(openStr);

//Property Values
const values = Object.values(openingHours);
console.log(values);

//Entries  Object
const entries = Object.entries(openingHours);
console.log(entries);

//[key.value]
for (const [key, { open, close }] of entries) {
    console.log(`On ${key} we open at ${open} and close at ${close}`);
}

// ## Coding Challenge 12.
