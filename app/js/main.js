$(function () {
    $('.slider-box').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1915,
            settings: {
             arrows: false,
             dots: true
            },
          },
         
        ],
      
     });


     $('.slider-services--one').slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         responsive: [
            {
              breakpoint: 550,
              settings: {
               arrows: false,
               centerMode: true
              },
            },
           
          ],
        });
     
    $('.slider-services--two').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 550,
              settings: {
               arrows: false
              },
            },
           
          ],
      
     });
    $('.slider-services--three').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 550,
              settings: {
               arrows: false
              },
            },
           
          ],
      
     });

});

window.addEventListener('DOMContentLoaded', () => {

    const menu = document.querySelector(".menu");
    const mobile = document.querySelector(".nav-icon");
  
    mobile.addEventListener("click", function () {
     document.body.classList.toggle('mobile-class');
      this.classList.toggle("nav-icon--active");
      menu.classList.toggle("nav--active");
      document.body.classList.toggle('overflow');
    });


    // Маска для Инпута
var element = document.getElementById('input-mask');
var maskOptions = {
	mask: '+{7}(000)000-00-00'
};
if(element){
    var mask = IMask(element, maskOptions);
}



});