const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

var splide = new Splide( '.splide', {
    perPage: 3,
    rewind : true,
    arrows: false,

    classes: {
        paggination: ''
    }
  });
  
splide.mount();


function scrollTo(element){
  window.scroll({
    top: element.offsetTop - 200,
    left: 0,
    behavior: 'smooth',
  })
}

const mainBtn = document.querySelector('#main__btn'),
      menuBtn = document.querySelector('#menu__btn'),
      menu = document.querySelector('.menu'),
      aboutBtn = document.querySelector('#about__btn'),
      about = document.querySelector('.history'),
      introBtn = document.querySelector('#intro__btn'),
      intro = document.querySelector('.intro');

mainBtn.addEventListener('click', (e) => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
});

menuBtn.addEventListener('click', (e) => {
  window.scroll({
    top: menu.offsetTop + 100,
    left: 0,
    behavior: 'smooth',
  });
});

aboutBtn.addEventListener('click', (e) => {
  scrollTo(about);
});

introBtn.addEventListener('click', (e) => {
  scrollTo(intro);
})

