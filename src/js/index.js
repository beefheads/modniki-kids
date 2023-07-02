"use strict";

import "./b_components/header/header.js";

import "./b_components/spawners/b_modal.js";
import "./b_components/groupers/bayan.js";
import "./b_components/controls/stepper.js";
import "./b_components/controls/b_tabs.js";

import "./libs/lazyload.min.js";
let lazyLoadInstance = new LazyLoad();
window.lazyLoad = lazyLoadInstance;

import "./mdn_components/carousel.js";

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
