//4.Find the smallest element in marks array
let marks=[45,67,89,90,56];
let small=marks[0];
for(let i=0;i<marks.length;i++){
    if(marks[i]<small){
        small=marks[i];
    }
}
console.log("Smallest Element is:",small);