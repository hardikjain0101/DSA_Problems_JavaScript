// # JavaScript Fundamentals

/* Variables 

let age = 18;
console.log(age); // age=18
age =30;
console.log(age); // age = 30 let modify 

const age = 18;
console.log(age); // age=18
age =30;
console.log(age); // error because const not modify */

/* Primative Data Type {String, Numbers, Boolean, null, Undefined, Symbol}

const name = 'Ganesh';
const num = 12;
const isRight = true;
const value = 1.22; // Also consider As a Number in JS
const x = null; // Null is consider in object bogus value
const y = undefined; 

console.log(typeof value); // Print the typeof Data Type */


/* String Functions

const product = 'Laptop';
const price = 20;

// Concatenation Symbol
console.log(`Hey Product is ` + product + `& my price is` + price);

// Template Literals
console.log(`Hey Product is ${product} my price is ${price}`);

// Output -> Hey Product is Laptop my price is 20 */

/* 2. Length 

const user = 'Ganesh';
console.log(user.length);
console.log(user.toUpperCase());
console.log(user.toLocaleLowerCase());
console.log(user.substring(1,4)); // subtract the string -1
console.log(user.split(''));

refer Javascript.info for more */

/* Arrays -> Holds Multiple Values
const num =new Array(1,2,3,4,5);
console.log(num);

const apple = ['red','size','weight',10,true];
apple[5]='value';
apple.push('fruit'); // Push add value to end 
apple.unshift('taste'); // Add to the beginning 

apple.pop(); // remove last element
apple.shift();

console.log(apple.indexOf('size')); // -> value[1] */

/* Object 

const person = {
    user:'Ganesh',
    id:1,
    hobbies:['writing', 'speaking'],
    address:{
        city:'Pune',
        state:'Maharashtra'
    }

}

console.log(person.address.city, person.hobbies[1]);


// Destructuring

const {user, id,address:{city}} = person;
person.email = 'ganesh@gmail.com'
console.log(person);

array use [Bracket]
object use {}


//Arrays of Objects

const data = [
    {
        id:1,
        user:'Ganesh',
        college:'CS'
    },
    {
        id:2,
        user:'Hardik',
        clg:'tier3'
    },
    {
        id:3,
        user:'Harshal',
        clg:'tier3'
    }
];

// data.forEach(function(dt){
//     console.log(dt.id);
// });


const x=10;

const color = x>10 ? red : blue ;
*/


// const djsn = JSON.stringify(data);

// console.log(djsn); 

// Loops in JS


// for(i=0;i<=11;i++){
//     console.log(i);  // first execute two condition then increment value
// }

// for(i=1; i<=5; i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

// Functions

// function addNum (a,b){
//     return a,b;
// }

// console.log(10,14);

// Arrow func

// const addNum = (a,b) => { return a + b };
// console.log(addNum(16,10));

// const color = ['red','blue'];
// color.forEach((data) => console.log(data[0]));

// function Person(firstName, lastName, cost) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.cost = new Date(cost);
//     this.getBirthYear = function() {
//         return this.dob.getFullYear();
//     }
// }

// const person1 = new Person('Ganesh', 'Patil','1998');
// console.log(person1.lastName);

// class Product {
//     constructor(priceName, costValue)
//     {
//         this.priceName = priceName;
//         this.costValue = costValue;
//     }
// }

// const product1 = new Product('Shoes',15);
// console.log(product1.costValue);

// ## JavaScript DOM 

// Single element

// const fm = document.getElementsByClassName('my-form');
// const hr = document.querySelector('h1');
// console.log(hr);

// // Multiple element
// const all = document.querySelectorAll('.item');
// console.log(all);

// const it = document.querySelectorAll('.item');
// it.forEach((itm) => console.log(itm));

// const ext = document.querySelector('#users');

// ext.remove();
// ext.lastElementChild.remove();
// ext.firstElementChild.textContent = 'Change';
// ext.children[1].innerText = 'Ganesh';
// ext.lastElementChild.innerHTML = `<h5>Hello World</h4>`;

// const btn = document.querySelector('.btn');

// btn.style.background = 'red';

// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     ext.innerHTML = '<li> Item 4<li>';
//     ext.style.background = '#fcfc98'

// });


/*  DSA + Algorithm JavaScript 


 Algorithm = Well defined set of instructions.
 - Well defined i/o & O/p.
 - One problem can solve diff algorithm.
 - Time Complexity - Time taken to execute by algo.
 - Space - Amount of memory take by algo.

 Asymptotic Notations
 - Big O - Worst case complexity 
 - Omega - Best case complexity 
 - Theta - Avg case Complexity.
  
*/

/* Problems 

-> Sum of Natural Numbers

function sum(n){
    let sum = 0;
    for(let i = 1; i<=n; i++){
        sum += i;
    }
    return sum;
}

console.log(sum(4));

-> Math Table Printing Program

function printMultiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
      console.log(number + "X" + i + "=" + (number * i));
    }
  }
  
  console.log(printMultiplicationTable(1));
  

-> Addition of Even Numbers between 1 to 10

function sum(n){
    let sum = 0;
    for(let i = 1; i<=n; i++){
        if(i%2==0){
            sum += i;
        }
        
    }
    return sum;
}

console.log(sum(10));

*/

