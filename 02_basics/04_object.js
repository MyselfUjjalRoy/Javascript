//objet as singleton

//const tinderUser=new Object();

const tinderUser={}
tinderUser.id="12"
tinderUser.name="Ujjal"
tinderUser.isLogged=true

// console.log(tinderUser);

// const regularUser={
//     email:"abc@gmail.com",
//     fullname:{
//         userfullname:{
//             firstname:"ujjal",
//             lastname:"roy"
//         }
//     }
// }
// console.log(regularUser.fullname.userfullname.lastname);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

//const obj3={obj1,obj2}
// const obj3=Object.assign(obj1,obj2)
// const obj4=Object.assign({},obj1,obj2)//good practice
// console.log(obj3);
// console.log(obj4);

// const obj3={...obj1,...obj2};
// console.log(obj3);

const users=[
    {
        id:1,
        email:"abc@gmail.com"
    },
    {
        id:1,
        email:"abc@gmail.com"
    },
    {
        id:1,
        email:"abc@gmail.com"
    }
]

// console.log(users[1].email);
console.log(tinderUser);
console.log(Object.keys(tinderUser));//output:the result is stored in an array:-[ 'id', 'name', 'isLogged' ]
console.log(Object.values(tinderUser));
console.log(Object.hasOwnProperty('isLogged'));

