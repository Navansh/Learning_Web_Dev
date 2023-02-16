 //end -> push 
 //middle -> splice
 //start ->unshift method

//  to check if an element is present in the array or not 
//best practice is to use includes function

// let numbers = [1,4,5,7,9];

// console.log(numbers.includes(7));

//objects are array 
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

    console.log(fourse);
    //as dukata is not there so it returns undefined 
    


    //emptying an array 
    let nos = [1,2,3,4,5,6];
    let num1 = nos;

    // nos = [];
    //but still num1 will contain the number of 'nos' as arrays are objects hence
    //address of the array was copied and hence still stay in num1
    
    //hence doing this does not remove the numbers

    nos.length = 0;
    