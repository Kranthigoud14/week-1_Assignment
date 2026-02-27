function searchIndex(a,b){
    for(let i=0; i<a.length; i++){
        if(a[i]===b){
            return i;
        } 
    }
    return 'not found';
}
let a=[1,2,3,4,5];
let b=3;
let result=searchIndex(a,b);
console.log("The element searched is in Index:",result);