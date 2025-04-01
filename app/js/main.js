// WOW JS Конфликтует с оверфлоу хайден на бади или секций
$(function () {

  $('.menu__btn').on('click', (function () {
    if (!$('.nav').hasClass('active')) {
      $('.nav').addClass('active');
      $('.menu__btn').addClass('active');
      $('body').addClass('menu-opened');
      $('.menu-drop').on('click', (e) => {
        e.target.classList.toggle('active');
      })
    } else {
      $('.nav').removeClass('active');
      $('.menu__btn').removeClass('active');
      $('body').removeClass('menu-opened');
      $('.menu-drop').on('click', (e) => {
        e.target.classList.toggle('active');
      })
    }
  }));





  $('.questions__item').on('click', (function () {
    $(this).find('.questions__item-title--btn').addClass('active');
    $(this).siblings().find('.questions__item-title--btn').removeClass('active');

    $(this).find('.questions__item-text').show(500);
    $(this).siblings().find('.questions__item-text').hide(500);

  }));

  lightGallery(document.querySelector('.gallery'));

  $('.reviews__inner').slick({
    prevArrow: $('.global-reviews__wrapper .slick-prev'),
    nextArrow: $('.global-reviews__wrapper .slick-next'),
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 800,
    // fade: true,
    dots: true,
    arrows: true,
    responsive: [{
      breakpoint: 1001,
      settings: {
        slidesToShow: 1,
        arrows: false,
      }
    },
    {
      breakpoint: 701,
      settings: {
        slidesToShow: 1,
        arrows: false,
      }
    },
    {
      breakpoint: 701,
      settings: {
        slidesToShow: 1,
        arrows: false,
      }
    }
    ]
  });



});





const modalTrigger = document.querySelectorAll('[data-modal]'),
  modal = document.querySelector('.modal'),
  modalCloseBtn = document.querySelector('[data-close]');

modalTrigger.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
  });
});

function clossModel() {
  modal.classList.add('hide');
  modal.classList.remove('show');
  document.body.style.overflow = '';
}

modalCloseBtn.addEventListener('click', clossModel);

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    clossModel();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.code === "Escape" && modal.classList.contains('show')) {
    clossModel();
  }
});