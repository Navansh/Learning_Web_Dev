const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

//Open Modal Function
const openModal = () =>{
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
}

//Close Modal Function
const closeModal = () =>{
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
}