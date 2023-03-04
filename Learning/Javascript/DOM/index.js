let MyDiv = document.createElement('div');

for (let i = 0; i <= 100; i++) {
     let newElement = document.createElement('p');
     newElement.textContent = 'This is para'+ i;

     newElement.addEventListener('click',function(event){
        console.log('I Have clicked on it');
     })
     MyDiv.appendChild(newElement);
}
document.appendChild(myDiv);