$(document).ready(function() {
  $('#header-navbtn').click(function() {
    menu();
  });

  if($('.header-nav_active')) {
    $('.header-nav__item').click(function() {
      menu();
    });
  };
});

function menu() {
  nav();
  navbtn();
  lock();
};

function lock() {
  $('body').toggleClass('lock');
};

function navbtn() {
  $('#header-navbtn').toggleClass('header-navbtn_active');
};

function nav() {
  if ($('#header-nav').attr('class') === 'header-nav') {
    $('#header-nav').toggleClass('header-nav_active');
    $('#header-nav').hide();
    $('#header-nav').fadeIn(600);
  } else {
    $('#header-nav').toggleClass('header-nav_active');
  };
};