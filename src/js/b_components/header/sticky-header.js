import {debounce} from '../../b_helpers/condition-helpers.js'

const header = document.querySelector(".header");

let prevScrollPos = window.pageYOffset;

function showHeader() {
  const showHeaderEvent = new CustomEvent('show-header', {
    detail: {
    }
  });
  header.classList.remove('header--hidden');

  header.dispatchEvent(showHeaderEvent);
}

function hideHeader() {
  const hideHeaderEvent = new CustomEvent('hide-header', {
    detail: {
    }
  });
  header.classList.add('header--hidden');

  header.dispatchEvent(hideHeaderEvent);
}

const handleScroll = () => {
  if (window.pageYOffset <= header.getBoundingClientRect().height) {
    showHeader();
    return;
  }

  const currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    showHeader();
  } else {
    hideHeader();
  }
  prevScrollPos = currentScrollPos;
};

window.addEventListener('scroll', debounce(handleScroll, 50));

/*
window.addEventListener("scroll", () => {
  return
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    // код для мобильных устройств
  } else {
    // код для обычных устройств
  }
});
*/