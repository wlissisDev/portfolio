const openNav = document.querySelector('.open-nav');
const navItem = document.querySelector('.items-mobile');

const iconOpen = document.querySelectorAll('.icon')
console.log(iconOpen)

let clicked=false;
openNav.addEventListener('click', () => {
    if(clicked){
        navItem.style.transform = 'translateX(-100%)'
        iconOpen[0].classList.remove('one');
        iconOpen[1].classList.remove('two');
        iconOpen[2].classList.remove('three');
        clicked=!clicked;
        console.log(clicked)
    }
    else{
        navItem.style.transform = 'translateX(0)'
        iconOpen[0].classList.add('one');
        iconOpen[1].classList.add('two');
        iconOpen[2].classList.add('three');
        clicked=!clicked;;
        console.log(clicked)
    }
   
});