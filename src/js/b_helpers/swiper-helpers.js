const b_swiperClasses = {
	bulletPercentage: "b_swiper-pagination-bullet__percentage",
}

function initPaginationPercentage(swiper, autoplaySpeed) {
	let timingModifier = 400;
	let currentBullet = swiper.el.querySelector('.swiper-pagination-bullet-active')


	if (currentBullet == null) {
		setTimeout(() => {
			usePaginationPercentage(swiper, autoplaySpeed)
		}, 300)
	} else {
		const paginationPercentage = document.createElement('span');
		paginationPercentage.classList.add(b_swiperClasses.bulletPercentage);
		if (currentBullet) {
			currentBullet.querySelectorAll('span').forEach(span => {
				span.remove();
			})

			currentBullet.append(paginationPercentage);
		}

		let currentInterval = 0;
		if (swiper.isStarterSlide) {
			timingModifier = 1200;
			swiper.isStarterSlide = false;
		} else {
			timingModifier = 210;
		}

		swiper.autoplayInterval = setInterval(() => {
			currentInterval += 200;
			const percentage = (currentInterval / (autoplaySpeed - timingModifier)) * 100;
			paginationPercentage.style.width = `${percentage}%`;

			if (currentInterval >= autoplaySpeed) {
				clearInterval(swiper.autoplayInterval);
				setTimeout(() => {
					paginationPercentage.remove();
				}, 100);

				if (swiper.activeIndex >= swiper.slides.length - 1) {
					swiper.slideTo(0);
				} else {
					swiper.slideNext();
				}
			}
		}, 200);

		swiper.on('slideChange', () => {
			clearInterval(swiper.autoplayInterval);
			usePaginationPercentage(swiper, autoplaySpeed);
			swiper.el.querySelectorAll('.swiper-pagination-bullet').forEach(bullet => {
				if (bullet.classList.contains('swiper-pagination-bullet-active')) return;
				bullet.querySelectorAll(`.${b_swiperClasses.bulletPercentage}`).forEach(indicator => {
					indicator.remove();
				})
			})
		})
	}
}

export function usePaginationPercentage(swiper, autoplaySpeed) {
	swiper.isStarterSlide = true;
	swiper.autoplayInterval = "";

	initPaginationPercentage(swiper, autoplaySpeed);
}