function animateSubnavInput() {
  console.log('test1')
  const searchbar = document.querySelector('.search-input');
  searchbar.addEventListener("focus", (event) => {
    document.querySelector('.search-input').classList.add('is-visible');
    document.querySelector('.search-icon').classList.remove('is-visible')
  });
};

export { animateSubnavInput }
