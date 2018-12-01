import 'bootstrap';
import { loadDynamicBannerText } from '../components/banner';
import { initUpdateNavbarOnScroll } from '../components/navbar';

const homePage = document.querySelector('.pages.home');
if (homePage) {
  loadDynamicBannerText();
}

initUpdateNavbarOnScroll();
