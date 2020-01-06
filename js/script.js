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

 //Tabs

 let tabIndex = 1,
 tabs = document.querySelectorAll('.info-tabcontent'),
 tabsToggleWrap = document.querySelector('.info-header'),
 tabsToggle = document.querySelectorAll('.info-header-tab');

showTabs(tabIndex);

 function showTabs(n){

     tabs.forEach((item) => item.style.display = 'none');
     tabsToggle.forEach((item) => item.classList.remove('active'));
     tabs[tabIndex - 1].style.display = 'block';
     tabsToggle[tabIndex - 1].classList.add('active');
 }


 function currentTab(n){
     showTabs(tabIndex = n);
 }


 tabsToggleWrap.addEventListener('click', function(event){
     for (let i = 0; i < tabsToggle.length + 1; i++){
         if(event.target.classList.contains('info-header-tab') && event.target == tabsToggle[i-1]){
             currentTab(i);
           
         }
     }
 });
 //Modal

 let contactsBtn = document.querySelector('.contacts-btn'),
        modalWriteUs = document.querySelector('.modal-write-us'),
        overlay = document.querySelector('.overlay'),
        closeForm = document.querySelector('.close-form'),
        closeMap = document.querySelector('.close-map'),
        inputFocus =  document.getElementById('user-name'),
        imgMap = document.querySelector('.map'),
        modalMap = document.querySelector('.modal-map');

    contactsBtn.addEventListener('click', function(){
        
        overlay.style.display = 'block';
        modalWriteUs.style.display = 'block';
        document.body.style.overflow = 'hidden';
        inputFocus.focus();
    });
    closeForm.addEventListener('click', function(){
        overlay.style.display = 'none';
        modalWriteUs.style.display = 'none';
      
        document.body.style.overflow = '';
    });
    imgMap.addEventListener('click', function(){
        
        overlay.style.display = 'block';
        modalMap.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
    });
   
   
    closeMap.addEventListener('click', function(){
        overlay.style.display = 'none';
       
        modalMap.style.display = 'none';
        document.body.style.overflow = '';
    });
   
    
});















