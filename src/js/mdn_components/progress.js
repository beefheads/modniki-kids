window.addEventListener('DOMContentLoaded', (event) => {
	const progressItems = [...document.querySelectorAll('.progress')];
	const PROGRESS_CLASSES = {
		init: 'progress--init',
	};

	function makeProgressData(progress, value, max, currency = '₽') {
		return {
			progress,
			value,
			max,
			currency,
		}
	}

	function setProgress(value) {
		const progressWrap = this.querySelector('.progress__wrap');
		const progressBar = this.querySelector('.progress__bar');
		if (!progressWrap || !progressBar) return

		progressBar.value = value
		syncProgressData(this);

		return this;
	}

	function moveIndicator(progress) {
		const progressWrap = progress.querySelector('.progress__wrap');
		const progressBar = progress.querySelector('.progress__bar');

		const max = progressBar.max;
		const value = progressBar.value;
		let percent = value / max * 100;
		const PERCENT_GAP_FIX = 12;
		percent = percent - PERCENT_GAP_FIX;

		const valueNode = progressWrap.querySelector('.progress__value');

		valueNode.style.left = `${percent}%`;

		return this;
	}

	function appendValueNode(progress) {
		const progressWrap = progress.querySelector('.progress__wrap');
		
		const valueNode = document.createElement('span');
		valueNode.classList.add('progress__value');
		progressWrap.append(valueNode);

		return valueNode;
	}

	function appendMaxNode(progress) {
		const progressWrap = progress.querySelector('.progress__wrap');

		const maxNode = document.createElement('span');
		maxNode.classList.add('progress__max');
		progressWrap.append(maxNode);

		return maxNode;
	}

	function syncProgressData(progress) {
		const progressWrap = progress.querySelector('.progress__wrap');
		const progressBar = progress.querySelector('.progress__bar');

		const progressValue = `${progressBar.value}${progressBar.dataset.currency}`
		const progressMax = `${progressBar.max}${progressBar.dataset.currency}`

		let progressValueNode = progress.querySelector('.progress__value');
		let progressMaxNode = progress.querySelector('.progress__max');

		if (!progressValueNode) {
			progressValueNode = appendValueNode(progress);
		}

		if (!progressMaxNode) {
			progressMaxNode = appendMaxNode(progress);
		}

		progressValueNode.innerText = progressValue;
		progressMaxNode.innerText = progressMax;

		// moveIndicator(progress)

		return progress;
	}

	function initProgressbar(progress) {
		if (progress.classList.contains(PROGRESS_CLASSES.init)) return;

		syncProgressData(progress);

		progress.makeProgressData = makeProgressData;
		progress.setProgress = setProgress;
		progress.syncProgressData = syncProgressData;
		progress.moveIndicator = moveIndicator;

		progress.classList.add(PROGRESS_CLASSES.init);
	}
	window.initProgressbar = initProgressbar;
	progressItems.forEach(progress => {
		initProgressbar(progress);
	})
});