// let MyDiv = document.createElement('div');
// function paraStatus(event){
//    console.log('Para:' + event.target.textContent);
   //hence through this we targetted the individual p tags through 'target' method
// }
// MyDiv.addEventListener('click',paraStatus)

// for (let i = 0; i <= 100; i++) {
//      let newElement = document.createElement('p');
//      newElement.textContent = 'This is para'+ i;
     
//      MyDiv.appendChild(newElement);
// }
// document.body.appendChild(MyDiv); 

let element = document.querySelector('#wrapper');

element.addEventListener('click',function(event){
   if(event.target.nodeName==='SPAN'){
      //thorugh nodename we specified this action to only occur when we click on span and not to occur otherwise
      console.log('span par click kar rha bhai ' + event.target.textContent)
   }
});
