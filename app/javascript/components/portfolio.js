import { tns } from 'tiny-slider/src/tiny-slider';

function slider() {
  var slider = tns({
    container: document.getElementById('js-projects'),
    items: 1,
    controls: false,
    nav: false,
    responsive: {
      640: {
        edgePadding: 20,
        gutter: 20,
        items: 2
      },
      700: {
        gutter: 30
      },
      900: {
        items: 3,
      }
    }
  });

  document.querySelector('<div class="fas "></div>fa-chevron-right').onclick = function() {
    console.log('hello')
    slider.goTo('next');
  }
  document.querySelector('.fas.fa-chevron-left').onclick = function() {
    slider.goTo('prev');
  }
};

export { slider }
