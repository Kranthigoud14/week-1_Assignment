//6.Write a function that receives an array as arg and return their sum
function arrSum(arr){
    let total=0;
    for(let num of arr){
        total+=num;
    }
    return total;
}
let total= arrSum([10,30,50,20]);
console.log("sum of the array is:",total);