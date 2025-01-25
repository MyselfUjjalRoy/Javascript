//Arrays
// const arr=[1,2,3]
// console.log(arr);

//const arr=new Array(10,20,30,40)

// arr2.push(5);//add elelemt at last
// console.log(arr2);
// arr2.unshift(0);//add element at first
// console.log(arr2);


// console.log(arr.includes(90));//present in the array or not
// console.log(arr.indexOf(20));

//  



const arr=new Array(10,20,30,40)
console.log("A ",arr);

const arr1=arr.slice(1,3);
console.log("B ",arr1);

const arr2=arr.splice(1,3)
console.log(arr2);
console.log(arr);
//output :-
// A  [ 10, 20, 30, 40 ]
// B  [ 20, 30 ]//third index not included
// [ 20, 30, 40 ]//third index included,but it is not only the difference
// [ 10 ]//the main difference is that when we pperform splice operation on an array
//then the original array gets affected



