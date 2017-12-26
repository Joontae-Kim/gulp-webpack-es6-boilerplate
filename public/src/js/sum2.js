import { name } from './client'

console.log('name ==> ', name);

const pizza = 10
const beer = 5

const sum = (a,b) => '$'+ Number(a+b);
console.log(`${name}, you have to pay ${sum(pizza, beer)}`);
