//adding 100paras
const t1 = performance.now();

for (let i = 0; i <= 100; i++) {
    let newElement = document.createElement('p');
    newElement.textContent = 'THis is para ' + i;

    document.body.appendChild(newElement);
}
const t2 = performance.now();

console.log('This took '+(t2-t1)+' time');
//in this we did 100 reflow and 100 repaint which is not so good


//optimizing this code a bit 
const t3 = performance.now();


let myDiv = document.createElement('p');

for (let i = 0; i <= 100; i++){
    let element = document.createElement('p');
    element.textContent = 'THis is paraaaa ' + i;

    myDiv.appendChild(element);
} 

document.body.appendChild(myDiv);

const t4 = performance.now();
console.log('This took '+(t4-t3)+' time');


//now writing this code using fragment
let fragment = document.createDocumentFragment();
for (let i = 0; i <= 100; i++) {
    let newElement = document.createElement('p');
    newElement.textContent = 'THis is para ' + i;

    fragment.appendChild(newElement);
}

document.body.appendChild(fragment);
//hence here 1 reflow and 1 repaint 
