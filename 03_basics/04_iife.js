//Immediately Invoked Function Expression

(function chai(){
    //it is called named iife because the function has a neme
    console.log(`DB connected`);
})();//iife is not inly that ki jo function immediately execute ho jaye,ye toh correct hai
//iife ko pata nahi ki context kaha stop karna hai toh isiliye last me semi colon use karna hai

/*
Note:-()() the first parenthesis us used to write the definition of the function 
and the scond function is used for execution


Global scope ke pollution se boht time problem hoti hai toh isiliye toh us polution 
ya variable declaration ke se bachne ke liye "iife" ka use hoti hai

*/
(()=>{
    console.log(`DB connected two`);  
})();

((name)=>{
    console.log(`DB connected two ${name}`);
    
})('ujjal')
