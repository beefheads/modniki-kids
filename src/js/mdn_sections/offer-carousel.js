import Swiper, { Navigation, Autoplay, Pagination, Thumbs, EffectFade, Grid } from "swiper";
import {usePaginationPercentage} from "../b_helpers/swiper-helpers.js";

window.addEventListener('DOMContentLoaded', (event) => {
	const offerCarousel = document.querySelector('.offer-carousel');
	if (!offerCarousel) return;

	const autoplaySpeed = 7000;
	let offerCarouselSwiper = new Swiper(".offer-carousel-swiper", {
	  modules: [Navigation, Pagination, EffectFade, Autoplay],
	  speed: 350,
	  loop: false,
	  autoplay: {
	  	delay: autoplaySpeed,
	  },
		autoHeight: true,
	  pagination: {
	    el: ".offer-carousel-pagination",
	    clickable: true,
	  },
	  navigation: {
	    nextEl: ".offer-carousel-button-next",
	    prevEl: ".offer-carousel-button-prev",
	  },
	});

});