let slideIndex=10000;
let myTimer;
let slides = document.querySelectorAll('.slide-content')
const plusSlides=n=>{
    clearInterval(myTimer);
    if(n<0){
        showSlide(slideIndex-=1);
    }
    else{
        showSlide(slideIndex+=1);
    }
    if(n ===-1){
        myTimer=setInterval(()=>{
            plusSlides(n+2);
        },3000)
    }
    else{
        myTimer=setInterval(()=>{
            plusSlides(n+1);
        },3000)
    }
}

const showSlide=n=>{
    if(n > slides.length) slideIndex=1;
    if(n < 1) slideIndex=slides.length;
    for(let i=0;i<slides.length;i++)
        slides[i].classList.remove('slide-active')
    slides[slideIndex-1].classList.add("slide-active")
} 
window.addEventListener('load',()=>{
    showSlide(slideIndex);
    myTimer=setInterval(()=>{
        plusSlides(1)
    },3000)
})
let moveLeft = document.querySelector('.move-left')
let moveRight = document.querySelector('.move-right')
moveLeft.addEventListener('click', () => {
    plusSlides(-1)
})
moveRight.addEventListener('click', () => {
    plusSlides(1)
})
let bars=document.querySelector('.icon-bars');
let mobile=document.querySelector('.menu-mobile')
let page =document.querySelector('.page-content')
bars.addEventListener('click',()=>{
    mobile.classList.toggle('menu-active');
})
// ===============load page=============
let loadpage=document.querySelector(".load-page");
let content=document.querySelector(".page-content");
window.addEventListener('load',()=>{
    console.log("hello")
   content.classList.add("none")
   loadpage.classList.add("block")
   setTimeout(()=>{
    content.classList.remove("none")
    loadpage.classList.remove("block")
   },1500)
  
})