function summer(a,b){
    return (a+b);
}

// console.log(summer(1,2));

//Q2
function strlen(str){
    return str.length;
}
// console.log(strlen("hello"));

//Q3

function strRevOrder(str){
    return str.split("").reverse().join("");
} 
// console.log(strRevOrder("hello"));

//Q4
function multiTable(num){
    for(let i=1; i<=10; i++){
        console.log(`${num} x ${i} = ${num*i}`);
    }
}
// multiTable(5);

//Q5
function sumTillNum(num){
    let sum=0;
    for(let i=1; i<=num; i++){
        sum+=i;
    }
    return sum;
}

// console.log(sumTillNum(5));
function printVowel(str){
    let vowels = ['a','e','i','o','u'];
    let strArr = str.split("");
    let vowelArr = strArr.filter((letter)=>{
        return vowels.includes(letter);
        //this line checks if the letter is in the vowels array
        //if yes, it returns true, else false
        //and then stores that value in the vowelArr
    });
    console.log(vowelArr);
}

printVowel("hello");
//creating an array in JS
let arr = [1,2,3,4,5];
//creating an associative array in JS
let arr2 = {
    "name":"John",
    "age":20
}
//is .filter a method of array?
//yes
//what does it do?
//it takes a function as an argument
//and then it applies that function to each element of the array
//and then it returns a new array with the elements that satisfy the condition
//in the function
//what is the function?
//it is a function that takes an element as an argument
//and then returns true or false
//if true, the element is added to the new array
//if false, the element is not added to the new array

function arre(arr1,arr2){
    let common = [];
    for(let i=0; i<arr1.length; i++){
        for(let j=0; j<arr2.length; j++){
            if(arr1[i]===arr2[j]){
                common.push(arr1[i]);
            }
        }
    }
    return common;
}


