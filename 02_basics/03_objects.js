//singleton

 /*there are two techniques to declare objects
 one is like "literals" and the other one is like "singleton"
"singleton" means when the object is created using constructor
*/

//object literals
const mySim=Symbol("key1")

const JsUser={
    name:"Ujjal",
    "full name":"Ujjal Roy",
    [mySim]:"myKey1",//this is the syntax to add symbol in a object
    age:"21",
    location:"India",
    email:"ujjal@gmail.com",
    isLoggedIn:false,
    lastLoginsDays:["Monday","Saturday"]
}
// console.log(JsUser.email)//one way of accessing objevt elements
// console.log(JsUser["full name"]);//other way when there is a gap present in the variable name
// console.log(JsUser[mySim])

JsUser.email="abc@gmail.com"
//Object.freeze(JsUser)//here the the object is freezed ,so after this if any changes happen it will not affect the object
JsUser.email="123@gmailcom"
//console.log(JsUser);

JsUser.greetings=function(){
    console.log("Hello,Ujjal");
}
JsUser.greetingsTwo=function(){
    console.log(`Hello Javscript,${this.name}`);
}
console.log(JsUser.greetings());
console.log(JsUser.greetingsTwo());



