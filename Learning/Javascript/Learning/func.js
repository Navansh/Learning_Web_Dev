
//function declaration
function dance(params) {
    console.log('run');
}

dance();

//Named function assignment 
let stand = function walk(params) {
    console.log('dance');
};

//Anonymous function assignment 
let stand2 = function(params) {
    console.log('dance');
};

stand();
//aur agar isko function assignment ke upar likhoge toh ye work nhi karega 
// as hoisting only works for function declaration

let jump = stand;
jump();
stand2();

//dynamic functions 
function sum(a,b) {
    return a+b;
}

// console.log(sum(1));
// as it did 1 + undefine = Not a Number 

// console.log(sum(1,2,3,4));
//will take start wale 2 nos and return o/p accordingly

// console.log(sum());
//answer will be undefined + undefined = Not a Number, as kuch diya hu nhi


// function sum2(a,b) {
//     console.log(arguments);
//     return a+b;
// }

// let ans = sum2(1,2,[12,2,3,,3,,3],33);

//hence we create a dynamic function which can make dynamic inputs

function sum3() {
    let total = 0;
    for (const value of arguments) {
        total = total + value;
    }
    return total;
}

// let answerr = sum3(1);
//jitne marzi bhi input parameters de do it will still print the answer 
// console.log(answerr);

//using rest operator 
function sum5(num,...args) {
    console.log(args);
    total = 0;
    total = total + num;
    for (const value of args) {
        total = total + value;
    }
    return total;
}

// console.log(sum5(1,2,3,4));
//hence num ke andar 1 chala gya and baaki saare as array rest operator ke paas chale gye

//default parameters
// if no value is passed by the function call a default value is used to process the output of the function 

function interest(p,r=5,y=10){
    return p*r*y/100;
}

// console.log(interest(1000,8));

//can also declare undefined
// console.log(interest(1000,8,undefined));


//getter and setter methods
// getter-> access properties
// setter ->manipulate/change/update properties 

let person = {
    fName : "Sunidhi",
    lName : 'Chauhan',

    get fullName(){
        return `${person.fName} ${person.lName}`;
    },
    set fullName(value){
        if (typeof value!== 'string') {
            throw new Error("Beta thappad khayega ya joote");
            //creates an object of error type 
        }
        let parts = value.split(' ');
        //splits and creates an an array
        this.fName = parts[0];
        this.lName = parts[1];
    }
};

// console.log(person.fullName);

try {
    person.fullName = undefined;
} catch (e) {
    alert(e);
}


person.fullName = 'Rahul Kumar';
//used setter method 

// console.log(person.fullName);
//don't need to call it as person.fullName() as it is not a function its a property






