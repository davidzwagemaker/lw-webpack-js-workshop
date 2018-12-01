import 'bootstrap';
import { loadDynamicBannerText } from '../components/banner';

const homePage = document.querySelector('.pages.home');
if (homePage) {
  loadDynamicBannerText();
}
