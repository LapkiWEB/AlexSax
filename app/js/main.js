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


});