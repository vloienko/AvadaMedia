const swiper = new Swiper('.space__slider', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	pagination: {
		el: '.swiper-pagination',
		type: 'fraction',
		renderFraction: function (currentClass, totalClass) {
			return '0<span class="' + currentClass + '"></span>';
		},
	},

	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true,
	},

	breakpoints: {
		320: {
			slidesPerView: 1.19,
		},
		378: {
			slidesPerView: 1.17,
		},
		769: {
			slidesPerView: 1.185,
		},
		1025: {
			slidesPerView: 1.173,
		},
	},
	initialSlide: 1,
	speed: 1000,
});



const swiper1 = new Swiper('.project-slider__swiper', {

	breakpoints: {
		320: {
			slidesPerView: 1.2,
			spaceBetween: 26,
		},
		378: {
			slidesPerView: 1.57,
			spaceBetween: 20,
		},
		769: {
			slidesPerView: 2.48,
			spaceBetween: 40,
		},
		1025: {
			slidesPerView: 3.35,
			spaceBetween: 48,
		},
	},

	freeMode: true,
	grabCursor: true,
	speed: 1000,
});



const swiper2 = new Swiper('.experience__slider', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	pagination: {
		el: '.swiper-pagination',
		type: 'fraction',
		renderFraction: function (currentClass, totalClass) {
			return '0<span class="' + currentClass + '"></span>';
		},
	},

	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true,
	},

	breakpoints: {
		320: {
			slidesPerView: 1.082,
		},
		378: {
			slidesPerView: 1.3,
		},
		769: {
			slidesPerView: 1.082,
		}
	},
	spaceBetween: 12,
	grabCursor: true,
	speed: 1600,
});