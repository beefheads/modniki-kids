import Swiper, { Navigation, Autoplay, Pagination, Thumbs, EffectFade, Grid } from "swiper";

window.addEventListener('DOMContentLoaded', (event) => {
	const productHeroCarousel = document.querySelector('.product-hero__carousel');
	if (!productHeroCarousel) return;

	const autoplaySpeed = 5000;
	let productHeroGallery = new Swiper(".product-hero__gallery-swiper", {
	  modules: [Navigation, Pagination, EffectFade, Autoplay],
	  speed: 350,
		grabCursor: true,
		on: {
			slideChange: function() {
				productHeroThumbs.slideTo(this.activeIndex);
			},
		},
	});

	let productHeroThumbs = new Swiper(".product-hero__thumbs-swiper", {
	  modules: [Navigation, Pagination, EffectFade, Autoplay, Thumbs],
	  speed: 350,
		direction: 'vertical',
		slidesPerView: 'auto',
		spaceBetween: 20,
	  navigation: {
	    nextEl: ".product-hero__thumbs-button-next",
	    prevEl: ".product-hero__thumbs-button-prev",
	  },
	  thumbs: {
  		swiper: productHeroGallery
  	},
		on: {
			slideChange: function() {
				productHeroGallery.slideTo(this.activeIndex);
			},
		},
	});

	function highlightActiveThumb() {
		const CURRENT_THUMB_CLASS = 'product-hero__thumbs-slide--current';

		const thumbs = productHeroThumbs.slides;
		thumbs.forEach(thumb => {
			thumb.classList.remove(CURRENT_THUMB_CLASS);
		})
		thumbs[productHeroGallery.activeIndex].classList.add(CURRENT_THUMB_CLASS);
	}
	productHeroGallery.on('slideChange', highlightActiveThumb);

	productHeroThumbs.slides.forEach((thumb, index) => {
		thumb.addEventListener('click', () => {
			productHeroGallery.slideTo(index);
		})
	})

});