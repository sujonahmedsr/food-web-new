window.addEventListener("scroll", ()=>{
    document.querySelector(".header").classList.toggle("headerScroll" , window.scrollY > 0);
})

var navbar = document.querySelector('.navbar');
var icon = document.querySelector('.toggle i');

icon.addEventListener('click', ()=>{
    navbar.classList.toggle('active');
    icon.classList.toggle('fa-times');
})

window.addEventListener('scroll', ()=>{
    navbar.classList.remove('active');
    icon.classList.remove('fa-times');
    
    if(window.scrollY > 60){
        document.querySelector('#scroll-top').classList.add('activescroll');
    }else{
        document.querySelector('#scroll-top').classList.remove('activescroll');
    }
})

// the end 