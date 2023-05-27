const swiperShop = new Swiper('.shop__swiper', {

   navigation: {
      nextEl: '.catalog-next',
      prevEl: '.catalog-prev',
   },

   simulateTouch: false,

   breakpoints: {
      320: {
         slidesPerView: 1,
      },
      769: {
         slidesPerView: 2,
         spaceBetween: 20,
      },
      1321: {
         slidesPerView: 3,
         spaceBetween: 30,
      }
   },
});
const swiperProduct = new Swiper('.product__swiper', {

   nested: true,

   navigation: {
      nextEl: '.product-next',
      prevEl: '.product-prev',
   },

   zoom: {
      maxRatio: 2,
      minRatio: 1,
   },

});



const swiperManufacturer = new Swiper('.manufacturer__swiper', {

   spaceBetween: 20,

   navigation: {
      nextEl: '.manufacturer-next',
      prevEl: '.manufacturer-prev',
   },

});



const swiperBenefit = new Swiper('.benefit__swiper', {

   autoplay: true,

   breakpoints: {
      320: {
         spaceBetween: 15,
         slidesPerView: 1.2,
      },
      769: {
         spaceBetween: 30,
         slidesPerView: 2.2,
      },
      1321: {
         spaceBetween: 30,
         slidesPerView: 3,
      }
   },

});



const swiperNews = new Swiper('.news__swiper', {

   navigation: {
      nextEl: '.news-next',
      prevEl: '.news-prev',
   },

   autoplay: true,

   breakpoints: {
      320: {
         slidesPerView: 1,
      },
      769: {
         slidesPerView: 2,
         spaceBetween: 20,
      },
      1321: {
         slidesPerView: 3,
         spaceBetween: 30,
      }
   },
});



const swiperCard = new Swiper('.card-product__swiper', {

   nested: true,

   navigation: {
      nextEl: '.card-next',
      prevEl: '.card-prev',
   },

   zoom: {
      maxRatio: 2,
      minRatio: 1,
   },

});


