'use strict';

const {CODES,TYPE,MESSAGES} = require('./storage/statusCodes');

console.log(MESSAGES.NOT_FOUND('id',2));
console.log(MESSAGES.NOT_FOUND('id',2).message);

const result = MESSAGES.NOT_FOUND('id',2);
if(result.code===CODES.NOT_FOUND){
    console.log('not');
}

console.log(MESSAGES.NOT_DELETED('Number',234));

