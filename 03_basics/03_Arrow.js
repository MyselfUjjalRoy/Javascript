// const user={
//     username:"Ujjal",
//     price:999,

//     welcomeMessage:function(){
//         console.log(`${this.username},wlcome to website`);   
//         console.log(this)
//     }
// }
// user.welcomeMessage()
// user.username="Sam"
// user.welcomeMessage()
// console.log(this)//here the context is empty so 'this'  o/p is {}


// function chai(){
//     let username="ujjal"
//     console.log(this.username);//o/p will be undefined because 'this' can't be used only in objects not in a function this way ,but if we use then the output will be undefined
    
    
// }
// chai()


// const chai = function(){//another way of declaring function
//     let usernamme="ujjal"
//     console.log(this.usernamme);
// }


// const chai=()=>{
//     let username="ujjal"
//     console.log(this.username);
//     console.log(this);
    
// }
// chai()

// const addTwo=(num1,num2)=>{
//     return num1+num2;//it is called explicitly return 
// }
//if curly braces is used then we have to write the return statement

//const addTwo=(num1,num2)=> (num1+num2)//if we use parenthesis then no need to write the return statement
//console.log(addTwo(3,5));

const addTwo=(num1,num2)=>({username:"ujjal"})//if we need to return a object then we need wrap this using parenthesis
console.log(addTwo(3,4));

