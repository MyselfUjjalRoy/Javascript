//Date
let myDate=new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());

// console.log(typeof myDate);

let myCreatedDate=new Date(2023,0,23)
console.log(myCreatedDate.toDateString());//in js indexing of month start from 0(o/p:-Mon Jan 23 2023)

let myTimeStamp=Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());//here in both the cases the o/p is in miliseconds
// console.log(Math.floor(Date.now()/1000));//now the o/p is in seconds

let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth());//month start from 0
console.log(newDate.getDay());//day starts from monday



