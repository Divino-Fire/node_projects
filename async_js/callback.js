
function squareOf(n,callback){

return callback((n*n));

}

let x = squareOf(3,(n)=>{return n*Math.sqrt(n);});

console.log(x);


let a = [2,3,4,5,6];

a.forEach((e)=>console.log(e*e));
console.log(a);

