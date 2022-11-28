window.onload = scrolled;
window.addEventListener('scroll',scrolled);

function scrolled(){
    var bT = document.body.getBoundingClientRect().top;

    if(bT >= 0){
        document.querySelector('.first-nav').classList.add('scrolled-nav');
        document.querySelector('.logo').classList.add('scrolled-logo');
        document.querySelector('header').classList.add('scrolled-header');
    }else{
        document.querySelector('.first-nav').classList.remove('scrolled-nav');
        document.querySelector('.logo').classList.remove('scrolled-logo');
        document.querySelector('header').classList.remove('scrolled-header');
    }
}