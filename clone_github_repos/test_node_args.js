let arguments = process.argv.slice(2);
if (arguments.length == 0) console.log(" no arguments");
else arguments.map((a)=>console.log(typeof a));