
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
function createRectangle() {
    return rectangle = {
        length: 1,
        breadth: 2,

        draw: function() {
            console.log('drawing');
        }
    };
}