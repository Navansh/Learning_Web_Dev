//Promise

// let meraPromise = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log("I am inside it 1 ")
//     }, 3000);
    // resolve(22);
    // pass this integer(randomly chosen here) to signify resolution or completion 

    //for rejection
    // reject(new Error('Bhaisaab error aaye hai'));
    //reject ke saath error bhi throw kiya ki kyun reject kiya

// });

// meraPromise.then((value) => {console.log(value)}, );

// meraPromise.catch((error) => { console.log("Haan haan bhai error aaya hai")});

// and inn dono ko combine bhi kar sakte hain 
// meraPromise.then((value) => {console.log(value)}, (error) => { console.log("Haan haan bhai error aaya hai")});


// let meraPromise2 = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log("I am inside it 2 ")
//     }, 2000);
    // resolve(22);
    // pass this integer(randomly chosen here) to signify resolution or completion 

    //for rejection
    // reject(new Error('Bhaisaab error aaye hai'));
    //reject ke saath error bhi throw kiya ki kyun reject kiya

// });

// console.log("Pehla");

// let waadaa1 = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log("SetTimeout 1 ho gya execute");
//     }, 2000);
//     resolve(true);
    //resolve true hote hi then wale statement start ho gya
// })

// let output = waadaa1.then(()=>{
    // let waada2 = new Promise(function(resolve,reject){
    //     setTimeout(()=>{
    //         console.log("Set time out 2 ho gya execute");
    //     },3300);
    //     resolve("Waada 2 resolved");
    // })
    // return waada2;
    //ye return kar rha hai waada2 which is a promise hence it will return resolve ki value which is 'waada 2 resolved'
// })

// output.then((value) => console.log(value));


// ASYNC Functions 
//  async function abcd(){
//     return "le betaa";
//  }

//  console.log(abcd())

// async function utility(){

//     let RajasthanMausam = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Rajasthan mein bhi garmi hai");
//         },1000);
//     });
    
//     let HydMausam = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Hyd is cool aF");
//         },5000);
//     });

//     let RajM = await RajasthanMausam;
    //iske neeche wali line execute nhi hogi jabtak LineNo:82 execute naa ho, bcz await lga rakha
//     let HM = await HydMausam;

//     return[RajM,HM];
// }

//APIs
//GET Call
// async function utility(){
//     let content = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     let output = await content.json();
//     console.log(output);
// }

// utility();

// POST Call 

// async function helper(){
//     let options = {
//         method: 'POST',
//         body: JSON.stringify({
//           title: 'Gabbar',
//           body: 'Goli',
//           userId: 101,
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//     };

//     let content = await fetch('https://jsonplaceholder.typicode.com/posts',options);
//     let response = content.json();
//     return response;
// } 

// async function utility(){
//     let ans = await helper();
//     console.log(ans);
// }

// utility();






