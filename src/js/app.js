// TODO: write your code here
import sum from './basic';

import Validator from './Validator';

console.log('worked');

console.log(sum([1, 2]));

const validator = new Validator();

console.log(validator.validateUsername('qq-__wyyyyy'));
console.log(validator.validateUsername('!!!'));

console.log(validator.validateUsername('__qq-__wyyyyy'));
console.log(validator.validateUsername('111qq-__wyyyyy'));
console.log(validator.validateUsername('-qq-__wyyyyy'));

console.log(validator.validateUsername('qq-__wyyyyy__'));
console.log(validator.validateUsername('qq-__wyyyyy111'));
console.log(validator.validateUsername('qq-__wyyyyy---'));

console.log(validator.validateUsername('qq-uil0906__wyyyyy'));

console.log(validator.validateUsername('qq-__567yyy__'));
console.log(validator.validateUsername('qq-__6yyyy'));
console.log(validator.validateUsername('qq-__65656567yy---'));
