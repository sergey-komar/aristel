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


    const logoModile = document.querySelector(".logo-mobile");

    if (logoModile) {
      window.addEventListener("scroll", () => {
        if (window.scrollY) {
          logoModile.classList.add("logo-mobile-hidden");
        } else {
          logoModile.classList.remove("logo-mobile-hidden");
        }
      });
    }


    // Маска для Инпута
var element = document.getElementById('input-mask');
var maskOptions = {
	mask: '+{7}(000)000-00-00'
};
if(element){
    var mask = IMask(element, maskOptions);
}


const headingBlock = document.querySelector(".heading-block");
  const headingVideo = document.querySelector(".heading__video--about");
  var videoEl = document.getElementsByTagName("video")[0],
    playBtn = document.getElementById("playBtn"),
    vidControls = document.getElementById("controls");

  if (playBtn) {
    playBtn.addEventListener("click", () => {
      headingBlock.classList.toggle("block-hidden");
    });
  }

  if (videoEl && vidControls && playBtn && headingVideo) {
    // если браузер может воспроизводить видео удаляем класс
    videoEl.addEventListener(
      "canplaythrough",
      function () {
        vidControls.classList.remove("hidden");
      },
      false
    );
    // запускам или останавливаем воспроизведение
    playBtn.addEventListener(
      "click",
      function () {
        if (videoEl.paused) {
          videoEl.play();
        } else {
          videoEl.pause();
        }
        headingVideo.classList.toggle("hidden-video");
        const path = videoEl.getAttribute("controls");
        videoEl.setAttribute("controls", path);
      },
      false
    );
  }

  if (videoEl && playBtn) {
    videoEl.addEventListener(
      "play",
      function () {
        playBtn.innerText = "";
      },
      false
    );

    videoEl.addEventListener(
      "pause",
      function () {
        playBtn.innerText = "";
      },
      false
    );
  }

  if (videoEl) {
    videoEl.addEventListener(
      "ended",
      function () {
        videoEl.currentTime = 0;
      },
      false
    );
  }




});