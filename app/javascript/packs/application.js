import 'bootstrap';
import './application.css';
import { loadDynamicBannerText } from '../components/banner';
import { initUpdateNavbarOnScroll } from '../components/navbar';
import { autocompleteSearch } from '../components/autocomplete';
import { bookmark } from '../components/bookmarking';
import { booking } from '../components/booking';
import { slider } from '../components/portfolio';
import { select } from '../components/select';
import { animateSubnavInput } from '../components/subnav';

const homePage = document.querySelector('.pages.home');
if (homePage) {
  loadDynamicBannerText();
  initUpdateNavbarOnScroll();
  bookmark();
}

const developersShow = document.querySelector('.developers.show');
if (developersShow) {
  slider();
  booking();
}

const developersNew = document.querySelector('.developers.new');
if (developersNew) {
  select();
}

const developersIndex = document.querySelector('.developers.index');
if (developersIndex) {
  bookmark();
  animateSubnavInput();
}

const autoCompleteField = document.getElementById('search-data');
if (autoCompleteField) {
  autocompleteSearch();
}

