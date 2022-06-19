//============================================
//-------- hide if notification content is 0
//====================================================

const menuItem = document.querySelectorAll('.nav__item p')
let count =0;
menuItem.forEach(item=>{
    if(menuItem[count].textContent == 0)menuItem[count].classList.add('hide')    
    count +=1;
})


