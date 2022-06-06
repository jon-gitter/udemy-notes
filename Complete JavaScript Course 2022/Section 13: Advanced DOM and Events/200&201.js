'use strict';

// HTML
// uses 3 divs that each have their own "slide" under one larger div line 217 of HTML

// CSS
// uses the transform: translateX(input defined value here) property to move each of the slides as we click the buttons. translate(0%) is active slide, translate(-100%) for previous, translate(-200%) farthest slide after scrolling through them to the right. At beginning it starts (0%), (100%), (200%)

// first step we need to do is set the transform: translate() properties automatically, right now they're all on-top of one another

// slider
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider_btn--left');
const btnRight = document.querySelector('.slider_btn--right');

let curSlide = 0;
const maxSlide = slides.length; // helps us set the max number of slides so when we hit the right button it will stop

// scale down slider and make other slides not visible that arn't at 0%
const slider = document.querySelector('.slider');
slider.style.transform = 'scale(0.5)';
slider.style.overflow = 'visible';

// putting all the slides side by side, right now they're stacked on top of one another
slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));
// 0%, 100%, 200%

// next slide
btnRight.addEventListener('click', function () {
  if (curSlide === maxSlide - 1) // need to add -1 to make it zero based or else it will go one more to the right at the end {
    curSlide = 0;
  } else {
    curSlide++;
  }

  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - curSlide)}%)`)
  ); // -100%, 0%, 100%
});



// Refactored 

// slider
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider_btn--left');
const btnRight = document.querySelector('.slider_btn--right');

let curSlide = 0;
const maxSlide = slides.length;

const goToSlide = function(slides){
  slides.forEach(
    (s,i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};
goToSlide(0);


// Next slide
const nextSlide = function(){
  if (curSlide === maxSlide - 1){
    curSlide = 0;
  } else {
    curSlide++;
  }

  goToSlide(curSlide)
}

const prevSlide = function(){
  if(curSlide === 0){
    curSlide = maxSlide -1;
  } else{
    curSlide--;
  }
  goToSlide(curSlide)
}

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);


////////////////////// adding more features. keyboard event (left and right arrow keys) and clicking dots to move the slider //////////////////////

// NOTE: we have an empty container with class="dots" for the dots to select to go between slides

// slider
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider_btn--left');
const btnRight = document.querySelector('.slider_btn--right');
const dotContainer = document.querySelector('.dots');

let curSlide = 0;
const maxSlide = slides.length;

// creating dots
const createDots = function (){
  slides.forEach(function(_, i){
    dotContainer.insertAdjacentHTML('beforeend', `<button class="dots_dot" data-slide="${i}"></button>`);
  });
};
createDots();

// adding class to activated dot
const activateDot = function(slide){
  document.querySelectorAll('.dots_dot').forEach(dot=> dot.classList.remove('dots__dot--active'));

  document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');
};
activateDot(0);

const goToSlide = function(slides){
  slides.forEach(
    (s,i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};
goToSlide(0);


// Next slide
const nextSlide = function(){
  if (curSlide === maxSlide - 1){
    curSlide = 0;
  } else {
    curSlide++;
  }

  goToSlide(curSlide);
  activateDot(curSlide);
}

const prevSlide = function(){
  if(curSlide === 0){
    curSlide = maxSlide -1;
  } else{
    curSlide--;
  }
  goToSlide(curSlide)
  activateDot(curSlide);
}

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

document.addEventListener('keydown', function(e){
  if (e.key === 'ArrowLeft') prevSlide();
  if (e.key === 'ArrowRight') nextSlide();
})

dotContainer.addEventListener('click', function(e){
  if(e.target.classList.contains('dots__dot')){
    const {slide} = e.target.dataset.slide;
    goToSlide(slide);
    activateDot(slide);
  }
});


////////////////// final refactor ////////////////// 

// slider
const slider = function(){
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider_btn--left');
const btnRight = document.querySelector('.slider_btn--right');
const dotContainer = document.querySelector('.dots');

let curSlide = 0;
const maxSlide = slides.length;

// functions
const createDots = function (){
  slides.forEach(function(_, i){
    dotContainer.insertAdjacentHTML('beforeend', `<button class="dots_dot" data-slide="${i}"></button>`);
  });
};


// adding class to activated dot
const activateDot = function(slide){
  document.querySelectorAll('.dots_dot').forEach(dot=> dot.classList.remove('dots__dot--active'));

  document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');
};

const goToSlide = function(slides){
  slides.forEach(
    (s,i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};

// Next slide
const nextSlide = function(){
  if (curSlide === maxSlide - 1){
    curSlide = 0;
  } else {
    curSlide++;
  }

  goToSlide(curSlide);
  activateDot(curSlide);
}

const prevSlide = function(){
  if(curSlide === 0){
    curSlide = maxSlide -1;
  } else{
    curSlide--;
  }
  goToSlide(curSlide)
  activateDot(curSlide);
}

const init = function(){
  goToSlide(0);
  createDots();
  activateDot(0);

}
init()

// Event handlers
btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

document.addEventListener('keydown', function(e){
  if (e.key === 'ArrowLeft') prevSlide();
  if (e.key === 'ArrowRight') nextSlide();
})

dotContainer.addEventListener('click', function(e){
  if(e.target.classList.contains('dots__dot')){
    const {slide} = e.target.dataset.slide;
    goToSlide(slide);
    activateDot(slide);
  }
});
};
slider();