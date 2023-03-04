let MyDiv = document.createElement('div');
function paraStatus(event){
   console.log('Para:' + event.target.textContent);
   //hence through this we targetted the individual p tags through 'target' method
}
MyDiv.addEventListener('click',paraStatus)

for (let i = 0; i <= 100; i++) {
     let newElement = document.createElement('p');
     newElement.textContent = 'This is para'+ i;
     
     MyDiv.appendChild(newElement);
}
document.body.appendChild(MyDiv); 
