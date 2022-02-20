// Import stylesheets
import './style.css';


import { Car } from './Car';
let obj =new Car(10,13,15,'ford','white');
console.log(obj);
obj.petrolFill()

let objford =new Car(10,13,15,'hyundai','green');
console.log(objford);
objford.petrolFill()



// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;