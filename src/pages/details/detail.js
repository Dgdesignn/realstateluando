const btnCloseModal = document.querySelector('.cancel__modal')
const btnOpenModal = document.querySelector('.button-open__book')
const bookModal = document.querySelector('.book__modal')

btnCloseModal.addEventListener('click',()=>{
    bookModal.classList.add('hiden')
})

btnOpenModal.addEventListener('click',()=>{
    bookModal.classList.remove('hiden')
})

// ================Initialize Swiper========== -->
 
      var swiper = new Swiper(".mySwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });