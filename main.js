const nav=document.querySelector(".navbar nav");

let bool = false;
function toggleClass(){
    bool = !bool;
    console.log(bool)
    nav.classList.toggle('visible', bool);
}

const btnShow= document.querySelector(".show")
.addEventListener('click',toggleClass)
