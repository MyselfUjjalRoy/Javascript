// function add(number1,number2){
//     console.log(number1+number2);
// }
// function add(number1,number2){
//     return (number1+number2);
// }
// const result=add(3,5);
// // console.log("Result: ",result);

// function login(username="ujjal"){//it is the way to pass default value when no argument is present
//     if(username===undefined){//or if(!username)
//         console.log("Please ente a username");
//         return;
//     }
//     return `${username} just logged in`
// }
// //console.log(login("ujjjal"));
// console.log(login());//if no argument is passed then it return undefined not null


//   function calculateCartPrice(...num1){//here ... is called rest operator
//     return num1;
//   }
//   console.log(calculateCartPrice(100,200,400,500,600));

const user={
    username:"ujjal",
    price:200
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
//(handleObject(user));
handleObject({
    username:"roy",
    price:200
})


