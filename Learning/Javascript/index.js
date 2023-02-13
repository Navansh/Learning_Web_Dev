
// let a ='Dance';
// a = 'bee';
// console.log(a);
// console.log(a);
// console.log(a);
// console.log(a);
// console.log(a);
// console.log(a);
// console.log(a);
// console.log(a);

// a = 5;
// console.log(a);
// console.log(a);
// console.log(a);


 
// let names = [1,'dance', true];
// console.log(5>3);
// let age = 15;

// let statuss = (age>=18)?'can vote':'cannot vote';
// console.log(statuss)

// let gamer = (true&&6&&9&&10);
// console.log(gamer);
// let num = 4;
// switch (num) {
//     default:
//         console.log('dance');
//     case 1:
//         console.log(num);
//         break;
//     case 2:
//             console.log(num);
//             break;
//     case 3:
//     console.log(num);
//     break;
        
// }

//object creations
    let rectangle = {
        length: 1,
        breadth: 2,

        draw: function() {
            console.log('drawing');
        }
    };

    //factory function
function createRectangle(length,breadth) {
    return rectangle = {
        length,
        breadth,

        draw: function() {
            console.log('drawing');
        }
    };
}
console.log(1);
// now object creation using factory method 
let rectangleObj1 = createRectangle(3,4); 

//creating a Constructor for rectangle 
function Rectangle(len,bre){
    this.length = len;
    this.breadth = bre;
    this.draw = function() { 
        console.log('drawing');
    }
}

//creating object using constructor 
let rectangleObject = new Rectangle(4,5);

//Dynamic added color to RectangleObject
rectangleObject.color = 'yellow';

console.log(rectangleObject);

// Dynamic Deletion 
delete rectangleObject.color;
console.log(rectangleObject);


