function interviewCarousel() {
    const wrapper = document.querySelector(".interviews_wrap");
  
    if (!wrapper) return;
  
    const slider = wrapper.querySelector(".interviews_cms.swiper");
    const arrowPrev = wrapper.querySelector(".interviews_arrow.swiper-prev");
    const arrowNext = wrapper.querySelector(".interviews_arrow.swiper-next");
  
    let swiper = new Swiper(slider, {
      slidesPerView: 1.5,
      spaceBetween: 0,
      speed: 300,
      loop: false,
      watchOverflow: true,
      navigation: {
        nextEl: arrowNext,
        prevEl: arrowPrev,
      },
      breakpoints: {
        640: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
      },
    });
  }
  
  window.Webflow ||= [];
  window.Webflow.push(() => {
    interviewCarousel();
  });  