let message = 'This is \n the message \n to dance with ';
// let words = message.split(' ');

 let lastName = 'Khandelwal';
// console.log(words)

let dessage = `this message of $(lastName),
will 
 be shown as 
it 
is`

console.log(dessage); 

///#Date Object

let date = new Date();

let date2 = new Date('Jun 20 1998 7:15')
console.log(date2);

let date3 = new Date(1998,5,20,7);
console.log(date3);

//we can also use get and set methods for the date object
date2.setFullYear(1947);
console.log(date2);



