$(document).ready(function () {
  var mySwiperBottom = [], 
      mySwiperThumbs = [];
  // init BigSlider
  var settingsBottom = {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev'
  };
  

  // init SmallSlider
  var settingsThumbs = {
    // centeredSlides: true,
    slidesPerView: 'auto',
    touchRatio: 0.2,
    slideToClickedSlide: true,

  };

  // get active IMG

    $("#gallery-list").find(".gallery").each(function(index, el) {
      var _this = $(this),
          i = index;

      mySwiperBottom[i] = new Swiper(_this.find('.gallery-bottom'), settingsBottom);
      mySwiperThumbs[i] = new Swiper(_this.find('.gallery-thumbs'), settingsBottom);

      mySwiperBottom[i].params.control = mySwiperThumbs[i];
      mySwiperThumbs[i].params.control = mySwiperBottom[i];

      var galleryImgThumbSRC = _this.find(".gallery-thumbs .swiper-slide-active img").attr("src"); 

      _this.find(".product-image-wrapper img").prop("src", galleryImgThumbSRC);
      
      // destroy and init, when the mouse leaves the element
      _this.find('.slider-wrapper').hover(function() {
        /* Stuff to do when the mouse enters the element */
      }, function() {
        // mySwiperBottom.params.effect = 'fade'; 
        mySwiperBottom[i].slideTo(0, 100);
        mySwiperThumbs[i].slideTo(0, 100);
      });
    });
});