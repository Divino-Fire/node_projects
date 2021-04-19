
function div(A, B){

    let quotient = new Promise(
        (res, rej)=>{ 
            
    if(B) res(A/B);
    else rej("zero division error");
    
    });
    
    
    let divide = quotient;
    divide.then(
        
        result => console.log(result),
         error => console.log(error)
        
         );
  

}


     
//a.then(res => console.log("hi I come after the first message"),null);

console.log(div(4,0));