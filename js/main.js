"use strict";
document.addEventListener("DOMContentLoaded", () => {
  //slider merch
  const swiper = new Swiper('.merch__swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


  function menu() {
      // бургер меню
    function disableScroll() {
      let pagePosition = window.scrollY;
      document.body.classList.add('scroll');
      document.body.dataset.position = pagePosition;
      document.body.style.top = -pagePosition + 'px';
    }
    
    function enableScroll() {
      let pagePosition = parseInt(document.body.dataset.position, 10);
      document.body.style.top = 'auto';
      document.body.classList.remove('scroll');
      window.scroll({
        top: pagePosition,
        left: 0
      });
      document.body.removeAttribute('data-position');
    }
    
    
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.nav');
    const menuWrap = document.querySelector('.nav__wrapper');
    const menuItem = document.querySelectorAll('.nav__link');
    burger.addEventListener('click', () => {
      menu.classList.toggle('overlay');
      burger.classList.toggle('burger--active');
      menuWrap.classList.toggle('nav--active');

      
      if (burger.classList.contains('burger--active')) {
        disableScroll();
      } else {
        enableScroll();
      }
    });

    menuItem.forEach(el => {
      el.addEventListener('click', () => {
        menu.classList.remove('overlay');
        burger.classList.remove('burger--active');
        menuWrap.classList.remove('nav--active');
        enableScroll();
      })
    })
  }
  menu();
  

  function dots() {
    
    // точки на карте
    const dotsBtn = document.querySelectorAll('.map__dots');
    const dotsItem = document.querySelectorAll('.locations__item');

    dotsBtn.forEach(function(item) {
        item.addEventListener("click", function() {

            let currentBtn = item;
            let dotId = currentBtn.getAttribute("data-dot"); 
            let currentDot = document.querySelector(dotId); 


            if (! currentBtn.classList.contains('active') ) {
            dotsBtn.forEach (function(item) {
                item.classList.remove('active');
            });

            currentBtn.classList.add('active');

            dotsItem.forEach(function(item){
                item.classList.remove('active');
            });

            currentDot.classList.add('active');
            }
        });
    });
  }

  dots();

  function validateForm() {
    const form = document.querySelector('.form');
    const telSelector = form.querySelector('input[type="tel"]')
    const inputMask = new Inputmask('+7 (999) 999-99-99');
    inputMask.mask(telSelector);
  
    new window.JustValidate('.form', {
     
      rules: {
        tel: {
          required: true,
          function: () => {
            const phone = telSelector.inputmask.unmaskedvalue();
            return Number(phone) && phone.length === 10;
          }
        },
        textarea: {
          required: true,
        },
        checkbox: {
          required: true,
        }
        
      },
      colorWrong: '#ff0f0f',
      messages: {
        name: {
          required: 'Введите имя',
          minLength: 'Введите 3 и более символов',
          maxLength: 'Запрещено вводить более 15 символов'
        },
        tel: {
          required: 'Введите телефон',
          function: 'Здесь должно быть 10 символов без +7'
        }
      },
      submitHandler: function(thisForm) {
        let formData = new FormData(thisForm);
    
        let xhr = new XMLHttpRequest();
    
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              console.log('Отправлено');
            }
          }
        }
    
        xhr.open('POST', 'mail.php', true);
        xhr.send(formData);
    
        thisForm.reset();
      }
    })
  
  }

  validateForm();

  // function preloader() {
  //   const hellopreloader = document.querySelector('.loader');
  //   const body = document.querySelector('.page__body');
  //   function fadeOutno(el) {
  //       el.style.opacity = 1;
  //       const interhellopreloader = setInterval(function () {
  //           el.style.opacity = el.style.opacity - 0.05;
  //           if (el.style.opacity <= 0.05) {
  //               clearInterval(interhellopreloader);
  //               hellopreloader.style.display = "none";
  //               body.classList.remove('scroll')
  //           }
  //       }, 16);
  //   }
  //   window.onload = function () {
  //       setTimeout(function () {
  //           fadeOutno(hellopreloader);
  //       }, 1000);
  //   };
  // }
  // preloader();


 
  // window.addEventListener('scroll', videoScroll);
       
  // function videoScroll() {
  //   var windowHeight = window.innerHeight,
  //       videoEl = document.querySelectorAll('.video-block__item');

  //   for (var i = 0; i < videoEl.length; i++) {

  //     var thisVideoEl = videoEl[i],
  //         videoHeight = thisVideoEl.clientHeight,
  //         videoClientRect = thisVideoEl.getBoundingClientRect().top;

  //     if ( videoClientRect <= ( (windowHeight) - (videoHeight*.5) ) && videoClientRect >= ( 0 - ( videoHeight*.5 ) ) ) {
  //       thisVideoEl.play();
  //     } else {
  //       thisVideoEl.pause();
  //     }

  //   }
  // }
  // videoScroll();


  const scroller = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    smartphone: {smooth: true},
    tablet: {smooth: true},
    resetNativeScroll: false
    
  });

    
    scroller.on('scroll', () => {
      var windowHeight = window.innerHeight,
      videoEl = document.querySelectorAll('.video-block__item');
          for (var i = 0; i < videoEl.length; i++) {
      
            var thisVideoEl = videoEl[i],
                videoHeight = thisVideoEl.clientHeight,
                videoClientRect = thisVideoEl.getBoundingClientRect().top;
      
            if ( videoClientRect <= ( (windowHeight) - (videoHeight*.5) ) && videoClientRect >= ( 0 - ( videoHeight*.5 ) ) ) {
              thisVideoEl.play();
            } else {
              thisVideoEl.pause();
            }
          }
        
    });

    scroller.on('scroll', (obj) => {
   
      var btnTop = document.querySelector('#goTop');
        if (obj.delta.y >= 300) {
          btnTop.classList.add('is-visible');
        } else {
          btnTop.classList.remove('is-visible');
        }

        const target = document.querySelector('#top');
        
          btnTop.onclick = function () {
            scroller.scrollTo(target);
          }
        
    });

    setTimeout(function () {
      scroller.update();
    }, 1000);


});
