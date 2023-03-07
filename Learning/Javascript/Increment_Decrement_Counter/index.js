const countValue = document.querySelector('#counter');

const increment = ()=> {
    let value = parseInt(countValue.innerText);
    //get the value from UI
    value = value+1;
    //update the value
    countValue.innerText = value;
    //set the value on the UI
};

const decrement = ()=> {
    let value = parseInt(countValue.innerText);
    //get the value from UI
    value = value-1;
    //update the value
    countValue.innerText = value;
    //set the value on the UI
};
