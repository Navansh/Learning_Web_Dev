 //end -> push 
 //middle -> splice
 //start ->unshift method

//  to check if an element is present in the array or not 
//best practice is to use includes function

// let numbers = [1,4,5,7,9];

// console.log(numbers.includes(7));

//array of objects 
let courses = [
     {no : 1, naam: 'babbar'},
     {no : 2, naam: 'Daku'}

    ];

    

    //running this will give -1, though this is in the array is because ye ek different object hai than the array one and 
    //hence address alag hai so it won't be able to find the it in the array
    // console.log(courses.indexOf({no : 1, naam: 'babbar'}));


    // let course = courses.find(function(course) {
    //     return course.naam === 'babbar';
    // })

    // this can be shortened to, (applying some conditions) : 
    let fourse = courses.find(fourse => fourse.naam === 'babbar');

//     console.log(fourse);
    //as dukata is not there so it returns undefined 
    


    //emptying an array 
    let nos = [1,2,3,4,5,6];
    let num1 = nos;

    // nos = [];
    //but still num1 will contain the number of 'nos' as arrays are objects hence
    //address of the array was copied and hence still stay in num1
    
    //hence doing this does not remove the numbers

    nos.length = 0;
    //but doing this removes the numbers 
    

    let first = [1,2,3];
    let second = [4,5,6];

    let combined = [...first,'a',...second,'b'];
    //apne khud ke primtives bhi beech mein manualy insert kar sakte ho 
//     console.log(combined);

    //creating copy of array using spread operator
    let another = [...first];
   
    let arr1 = [
     {no:1, naam:'loko'},
     {no:2, naam:'loki'}
    ]

     //combining array of objects
//     Array.prototype.push.apply(arr1,courses);
//     console.log(arr1); 

    //through this contents of courses are merged into arr1

    //slicing array of objects
    //end of the index is not included 
//     console.log(Array.prototype.slice.call(arr1,1,3));

//iterating the arrays
// for (const value of first) {
     // console.log(value);
// }

// or we can use for each loop 
// second.forEach(element => {
     // console.log(element);
// });


//joining array
// let nums=[10,20,30,40,50];
// const joined = nums.join('      ,djlalala');
// console.log(joined);

// splitting a string 
// let message = 'this is the first message to split';
// let parts = message.split(' ');

// console.log(parts)

//filtering an array

// let nums1 = [1,-1,3,-3];

// let croch = nums1.filter(value=> value>=0)
//we did this using the predicate function 

// console.log(croch);

//mapping an array
// let numbersss = [1,2,3,4];

// let items = numbersss.map(value=>'student-no'+ value);

// console.log(items)

// let nose = [1,-2,-3,4];

// let items = nose
//                .filter(value =>value>=0)
//                .map(num => {value: num});
//this process is called chaining 
// console.log(items)


