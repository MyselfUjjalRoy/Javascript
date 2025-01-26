//if
// const isUserLoggedIn=true
// if(2==="2"){
// console.log("executed");

// }

//switch
// month=3
// switch(month){
//     case 1:
//         console.log("january");
//         break;
//     case 2:
//         console.log("february");
//         break;
//     default:
//         console.log("No match");
//         break;
        
        
// }


//falsy values
//false,0,-0,BigInt On,"",null,undefined,NaN

//truthy values
//"0",'false'," ",[],{},function(){}

// const emptyobj={}
// if(Object.keys(emptyobj).length===0){
//     console.log("Object is empty");
    
// }

//Nulllish Coalescing Operator(??):null undefined

let val1;
//val1=5 ?? 10
//val1=null ?? 10
//val1=undefined ?? 15

val1=null ?? 10 ?? 20

console.log(val1);

//ternary operator
