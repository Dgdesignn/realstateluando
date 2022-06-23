//============================================
//-------- hide if notification content is 0
//====================================================

const menuItem = document.querySelectorAll('.nav__item p')
let count =0;
menuItem.forEach(item=>{
    if(menuItem[count].textContent == 0)menuItem[count].classList.add('hide')    
    count +=1;
})


/*=============================================
============SWIPER===========================================*/
var swiperPopular = new Swiper(".popular__container", {
    spaceBetween:32,
    grabCursor:true,
    centeredSlides:true,
    slidesPreView:'auto',
    loop:false,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*=======================================================
client and house button switch
*/

const clientButtonSwitch = document.querySelector('.client__button')
const houseButtonSwitch = document.querySelector('.houses__button')
const boxAgentClient = document.querySelector('.agent-users')
const boxAgentHouse = document.querySelector('.agent-house')


clientButtonSwitch.addEventListener('click',()=>{

     if(boxAgentClient.classList.contains('hide')){
        boxAgentClient.classList.remove('hide')
        boxAgentHouse.classList.add('hide')   
     }
    
})


houseButtonSwitch.addEventListener('click',()=>{

    if(boxAgentHouse.classList.contains('hide')){
        boxAgentHouse.classList.remove('hide')   
        boxAgentClient.classList.add('hide')
    }
   
})



/*styling modal association button*/

const btnAssociaton = document.querySelector('.button__association')
const selectHouse = document.querySelector('.select')
const cancelAssBtn = document.querySelector('.cancel_assiciation')

btnAssociaton.addEventListener('click',()=>{
    btnAssociaton.classList.add('hide');
    selectHouse.classList.remove('hide');
})


cancelAssBtn.addEventListener('click',()=>{
    btnAssociaton.classList.remove('hide');
    selectHouse.classList.add('hide');
})

const modalBox = document.querySelector('.modal_')
const closeBtn = document.querySelector('.close_modal')
const btnAssNow = document.querySelector('.associationNow')

closeBtn.addEventListener('click',()=>{
    modalBox.classList.add('hide');
})

btnAssNow.addEventListener('click',()=>{
    modalBox.classList.remove('hide');
})












