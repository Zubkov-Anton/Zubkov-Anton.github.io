const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    speed: 1200,
    nav: false,
    controls: false
    
  });
    document.querySelector('.next').addEventListener ('click',function () {
    slider.goTo('next');
    });
    document.querySelector('.prev').addEventListener ('click',function () {
        slider.goTo('prev');
        });




//Modal******************************************
$('[data-modal=consultation]').on ('click', function(){
  $('.overlay, #consultation').fadeIn('slow');

});
$('.modal__close').on('click', function(){
  $('.overlay, #consultation, #thanks').fadeOut('slow')
});

//Настройка валидации

function valideForms(form){
  $(form).validate({
    rules: {
      name: "required",
      phone: "required",
      email: {
        required: true,
        email: true
      }
     },
    messages: {
      name: "Пожалуйста, введите свое имя",
      phone: "Пожалуйста, введите свой номер телефона",
      email: {
        required: "Пожалуйста, введите свою почту",
        email: "Неправильно введен адрес почты"
      }
    }
  });
}

valideForms('.feed-form');
$('input[name=phone]').mask("+7 (999) 999-99-99");
