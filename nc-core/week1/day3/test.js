//let person ='val'
//person.age =28;
//console.log (person)
//code 
/*
const arr = [1, 2, 3];
let n=3;
function totalMultiples(arrOfNumbers, num)
{
const result= arrOfNumbers.reduce(function(acc,n){
return  acc+=n*num;
},0);
//return result;
console.log (result);
}
totalMultiples (arr,n);*/
/*
function getOldCats(obj) {
    //return obj;
    const result = obj.reduce((acc,arr) => {
        if(acc[age] >10){
            return acc;
        }
    },{});

  }*/
 // console.log(result);
 /*
  const arr = [{ name: 'tipsy', age: 12 },{name : 'max' , age :7}];
 
 const result = arr.reduce((n,obj)=>{
    if((obj['age'])>10){
        console.log (obj)
    }
     
 },[]);
 console.log (result);*/
 let arr = [4, 6, 7, 9, 99];
 let n = 3;
 function totalMultiples(numbers, multiple) {
    const sumOfArray = numbers.reduce((sum, number) => {
      if(number % multiple === 0) {
        sum =+ number;
        console.log(sum);
     }  
    return sum;
    },0);
     console.log (sumOfArray);

     totalMultiplies (arr,n);
    
  }
