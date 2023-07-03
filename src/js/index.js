"use strict";

import "./b_components/header/header.js";

import "./b_components/spawners/b_modal.js";
import "./b_components/groupers/bayan.js";
import "./b_components/controls/stepper.js";
import "./b_components/controls/b_tabs.js";
import "./b_components/controls/formich.js";

import "./libs/lazyload.min.js";
let lazyLoadInstance = new LazyLoad();
window.lazyLoad = lazyLoadInstance;

import "./mdn_components/carousel.js";
import "./mdn_components/progress.js";

import "./mdn_sections/offer-carousel.js";

import "./mdn_sections/help.js";


/*
import { Fancybox, Carousel } from "@fancyapps/ui";
import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";
Fancybox.bind('[data-fancybox]', {
  Toolbar: {
    display: [
      "close",
    ],
  },
});
*/

/**
 * Маска телефона
 */
import "./libs/inputmask.js";
const telInputs = document.querySelectorAll('input[type="tel"]');
telInputs.forEach(tel => {
  const maskOptions = {
    mask: '+7(999) 999-99-99',
    inputmode: 'tel',
  };

  new Inputmask(maskOptions).mask(tel);
})


import AOS from "aos";
window.aos = AOS;
window.aos.init({
  offset: 50
});

setTimeout(() => {
  window.aos.refresh();
}, 5000)

const phones = document.querySelectorAll('a[href^="tel:"]');
phones.forEach((phone) => {
  phone.classList.add('js_copyclicker');
});
import "./b_components/controls/copyclicker.js"

import "./b_helpers/apple-helpers.js"
import "./b_helpers/smooth-anchors.js"

import "./libs/masonry.pkgd.min.js";
const reviewsMasonryContainer = document.querySelector('.reviews__masonry');
if (reviewsMasonryContainer) {
  let reviewsMasonry = new Masonry(reviewsMasonryContainer, {
      // options...
      itemSelector: '.review-card',
      gutter: 30,
      columnWidth: '.review-card',
      percentPosition: true
  });
  window.reviewsMasonry = reviewsMasonry
  reviewsMasonry.layout();

  let previousWidth = window.innerWidth;
  window.addEventListener('resize', function() {
    const currentWidth = window.innerWidth;
    if (currentWidth === previousWidth) return;

    reviewsMasonry.layout();
    previousWidth = currentWidth;
  });
}

const blogMasonryContainer = document.querySelector('.blog__masonry');
if (blogMasonryContainer) {
  let blogMasonry = new Masonry(blogMasonryContainer, {
      // options...
      itemSelector: '.blog-card',
      gutter: 30,
      columnWidth: '.blog-card',
      percentPosition: true
  });
  window.blogMasonry = blogMasonry
  blogMasonry.layout();

  let previousWidth = window.innerWidth;
  window.addEventListener('resize', function() {
    const currentWidth = window.innerWidth;
    if (currentWidth === previousWidth) return;

    blogMasonry.layout();
    previousWidth = currentWidth;
  });
}
