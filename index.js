function slidePlugin(activeSlide=0) {
  const slides = document.querySelectorAll('.slide');
  slides[activeSlide].classList.add('active');

  for(let slide of slides) {
    slide.addEventListener('click', ()=> {
    removeActive();
    slide.classList.add('active');
    })
  }

  function removeActive() {
    slides.forEach(el => {
    el.classList.remove('active');
    })
  }

}
slidePlugin();
