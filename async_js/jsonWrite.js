'use strict';

const fs = require('fs');

let student = {
    name: "Divine Enow",
    school: 'UBa',
    matricule: "UBa18E0041",
    number: "681798900",
    age: "21",
    current_level


};
 
let data = JSON.stringify(student);
fs.writeFileSync('student-2.json', data);