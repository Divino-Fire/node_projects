'use strict';

const fs = require('fs');
let json_file_path = "student.json";
let rawdata = fs.readFileSync(json_file_path);
let student = JSON.parse(rawdata);
console.log(student);