function greet(name){
    return `Hello ${name}`;
}
// console.log(greet("John"));

// Q2
function countLetters(str){
    //a function that takes a string as an argument and returns an object that contains a count of each letter in the string
    let strArr = str.split("");
    let obj = {};
    strArr.forEach((letter)=>{
        if(obj[letter]){
            console.log(letter);
            console.log(obj[letter]);
            obj[letter]++;
        }else{
            obj[letter] = 1;
        }
    }
    );
    return obj;
    //this function traverses the array and checks if the letter is already present in the object
    //if yes, it increments the value of that key
    //if no, it creates a new key with value 1
    //how does it checks if the letter is already present in the object?
    //it checks if the key is present in the object
    //how does it check if the key is present in the object?
    //it checks if the value of the key is truthy
    //how does it check if the value of the key is truthy?
    //it checks if the value is not undefined   
    //what is key here and what is value here?
    //key is the letter and value is the count of that letter
    //so why do we pass letter as the key?
    //because we want to check if the letter is already present in the object
    //what is the data type of letter here?
    //string
    //so how do we pass string as a key?
    //we pass it as a key in the object

}
// console.log(countLetters("hello"));

// Write a function called 'createCounter' that returns a function. The returned function should increment a counter variable each time it is called and return the current count.
function createCounter(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}
let counter = createCounter();
// console.log(counter());
// console.log(counter());

function sumit(arr){
    let sum = 0;
    arr.forEach((num)=>{
        if(num%2==0){
            sum+=num;
        }
    });
    return sum;
    
};

const a = sumit([1,2,3,4,5,6,7,8,9,10]);
// console.log(a);

function stringy(str){
    let modArr = [];
    str.forEach((word)=>{
        if(word.length>5){
            modArr.push(word);
        }
    });
    return modArr;
}
// console.log(stringy(["hellod","worldd","this","is","a","test"]));

function solve(arr, rotations)
{
    if(rotations == 0) 
    return arr; 

   for(let i = 0; i < rotations; i++)
   {   
     let element = arr.pop();   
     arr.unshift(element); 
   } 
        
   return arr;
}
// console.log(solve([44, 1, 22, 111], 5));

function arror(obj){
    //this function takes an object as an argument and returns an array of the keys of the object
    let arr = [];
    for(let key in obj){
        arr.push(key);
    }
    return arr;
};
// console.log(arror({name:"John",age:20}));

function getPropValues(arr,propName){
    //this function takes an array of objects as an argument and returns an array of the values of the property propName
    let arr2 = [];
    arr.forEach((obj)=>{
        arr2.push(obj[propName]);
    });
    return arr2;
}
// console.log(getPropValues([
//     {name: "John", age: 20},
//     {name: "Jane", age: 30},
//     {name: "Jack", age: 40}
// ], "age"));

function getPropValuesHighest(arr,propName){
    //this function takes an array of objects as an argument and returns the highest value of the property propName
    //additional condition if the arr is empty, return 0
    if(arr.length==0){
        return 0;
    }

    let arr2 = [];
    //add some error handling if some of the objects in the array do not have the property propName
    //return 0 in that case
    try{
        arr.forEach((obj)=>{
            arr2.push(obj[propName]);
        });
    }catch(err){
        return 0;
    }
    return Math.max(...arr2);
    //the above line means that we are returning the maximum value of the array arr2
    //the spread operator is used to pass the array as arguments to the Math.max function
    //the Math.max function takes the arguments and returns the maximum value
    //what does spread operator do?
    //it spreads the array into individual elements
}
console.log(getPropValuesHighest([
    {name: "John", age: 20},
    {name: "Jane", age: 30},
    {name: "Jack"}
], "age"));






