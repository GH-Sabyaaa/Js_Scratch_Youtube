const myNums = [1,2,3]

// const myTotal = myNums.reduce(function(acc,currval){
    //  console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc,curr)   => acc+curr,0 )


// console.log(myTotal)


const shoppingCart = [
    {
        itemName:"js",
        price: 199
    },
    {
        itemName:"java",
        price: 299
    },
    {
        itemName:"c++",
        price: 99
    },
    {
        itemName:"python",
        price: 149
    },
]

 const TotalPrice = shoppingCart.reduce((acc,item)  => acc + item.price , 0)
 console.log(TotalPrice);
 