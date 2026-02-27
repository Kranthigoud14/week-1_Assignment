//5.Write a function that receives 3 number args and  return the big number
function bigNum(a,b,c){
    if(a>=b && a>=c){
        return a;
    }else if(b>=a && b>=c){
        return b;
    }else{
        return c;
    }
}
let biggest_number= bigNum(45,18,7);
console.log("Biggest Number is:",biggest_number);