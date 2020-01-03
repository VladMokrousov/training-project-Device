window.addEventListener('DOMContentLoaded', function(){
    'use strict';
 //Slider
 let slideIndex = 1,
 slides = document.querySelectorAll('.slider-item'),
 dotsWrap = document.querySelector('.slider-dots'),
 dots = document.querySelectorAll('.dot');

showSlides(slideIndex);

 function showSlides(n){
    if (n > slides.length){
        slideIndex = 1;
    }  

     slides.forEach((item) => item.style.display = 'none');
     dots.forEach((item) => item.classList.remove('dot-active'));
     slides[slideIndex - 1].style.display = 'flex';
     dots[slideIndex - 1].classList.add('dot-active');
 }

let timerId = setInterval(() => plusSlides(), 3000);

 function plusSlides () {
     showSlides(slideIndex += 1);
 }
 function currentSlide(n){
     showSlides(slideIndex = n);
 }


 dotsWrap.addEventListener('click', function(event){
     for (let i = 0; i < dots.length + 1; i++){
         if(event.target.classList.contains('dot') && event.target == dots[i-1]){
             currentSlide(i);
             clearInterval(timerId);
             timerId = setInterval(() => plusSlides(), 3000);
         }
     }
 });
});















