window.onscroll = () => changeHeaderBackground();

function changeHeaderBackground() {
  const header = document.querySelector('[data-header]');
  const headerOffsetTrigger = header.offsetHeight;
  const pageOffset = window.pageYOffset;

  if (pageOffset > headerOffsetTrigger) {
    header.classList.add('header--no-transparency');
  } else {
    header.classList.remove('header--no-transparency');
  }
}
