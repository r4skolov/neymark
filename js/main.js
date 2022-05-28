"use strict";
document.addEventListener("DOMContentLoaded", () => {
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

  const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 300
  });
  // if (window.screen.width > 1200) {
  //   gsap.set(".content:not(.initial)", { autoAlpha: 0 });

  //   var headlines = gsap.utils.toArray(".text");
  //   var totalDuration = 1500;


  //   ScrollTrigger.create({
  //     trigger: ".pin-up",
  //     start: "top top",
  //     end: "+=" + totalDuration,
  //     pin: true,
  //     scrub: true,
  //     animation: lineTimeline,
  //   });


  //   var target = document.querySelectorAll(".test");
  //   var target2 = document.querySelectorAll(".metaverse__item");
  //   var observer = new MutationObserver(function (mutations) {
  //     mutations.forEach(function (mutationRecord) {
  //       target2.forEach((elem, i) => {
  //         elem.classList.remove("active");
  //       });
  //       mutationRecord.target
  //         .closest(".metaverse__item")
  //         .classList.add("active");
  //     });
  //   });

  //   target.forEach((elem, i) => {
  //     observer.observe(elem, { attributes: true, attributeFilter: ["style"] });
  //   });
  // }

});
