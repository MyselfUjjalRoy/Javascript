//Reduce
//Mdn docs study
const myNums=[1,2,3]

// const myTotal=myNums.reduce(function(acc,curval){
//     return acc+curval
// },0)//here 0 is the initial value which is stored in the accumulator

// const myTotal=myNums.reduce((acc,curr)=>acc+curr,0)//using arrow function

// console.log(myTotal);

const shoppingCart=[
    {
        itemName:"javascript",
        price:1000
    },
    {
        itemName:"python",
        price:2000
    },
    {
        itemName:"java",
        price:4000
    },
    {
        itemName:"C",
        price:5000
    }
]

const pricetoPay=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(pricetoPay);
