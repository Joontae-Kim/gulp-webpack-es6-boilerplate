'use strict';

var _client = require('./client');

console.log('name ==> ', _client.name);

var pizza = 10;
var beer = 5;

var sum = function sum(a, b) {
  return '$' + Number(a + b);
};
console.log(_client.name + ', you have to pay ' + sum(pizza, beer));