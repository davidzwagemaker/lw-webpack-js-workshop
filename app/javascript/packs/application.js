import 'bootstrap';
import './application.css';
import { loadDynamicBannerText } from '../components/banner';
import { initUpdateNavbarOnScroll } from '../components/navbar';
import { autocompleteSearch } from '../components/autocomplete';

const homePage = document.querySelector('.pages.home');
if (homePage) {
  loadDynamicBannerText();
  initUpdateNavbarOnScroll();
}

const autoCompleteField = document.getElementById('search-data');
if (autoCompleteField) {
  autocompleteSearch();
}
