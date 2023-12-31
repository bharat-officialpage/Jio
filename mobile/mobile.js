let hamburger = document.querySelector('#bar');
let sidenav = document.querySelector('.aside');
let inputsearch = document.querySelector('.inputsearch');

hamburger.onclick = () => {
    hamburger.classList.toggle('fa-xmark');
    sidenav.classList.toggle('active');
}


document.querySelector('#Input1').onclick = () =>{
    inputsearch.classList.toggle('active');
}
document.querySelector('#glass').onclick = () =>{
    inputsearch.classList.toggle('active');
}
document.querySelector('.fa-chevron-left').onclick = () =>{
    inputsearch.classList.remove('active');
}
document.querySelector('.backg').onclick = () =>{
    inputsearch.classList.remove('active');
}

$(document).ready(function () {
    $('.h3').click(function () {
        $(this).next('.tooglecont').toggle();
    });
})

window.onscroll = () =>{
    if(window.scrollY > 300){
    document.querySelector('.header').classList.add('active')
    }else{
      document.querySelector('.header').classList.remove('active')
    }
  }





  const tabItems = document.querySelectorAll('.box');
  const tabContentItems = document.querySelectorAll('.tabcontent');
  
  function selectItem(e) {
      removeBorder();
      removeShow();
      this.classList.add('active');
      const tabContentItem = document.querySelector(`#${this.id}-content`);
      tabContentItem.classList.add('show');
  }
  
  function removeBorder() {
      tabItems.forEach(item => {
          item.classList.remove('active');
      });
  }
  
  function removeShow() {
      tabContentItems.forEach(item => {
          item.classList.remove('show');
      });
  }
  
  tabItems.forEach(item => {
      item.addEventListener('click', selectItem);
  });

































//   caraousel
var swiper = new Swiper(".caraousel-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
//   caraousel





//   caraousel
var swiper = new Swiper(".apps-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        100: {
            slidesPerView: 1,
        },
        200: {
            slidesPerView: 2,
        },
        300: {
            slidesPerView: 3,
        },
      
   
    },
});
//   caraousel