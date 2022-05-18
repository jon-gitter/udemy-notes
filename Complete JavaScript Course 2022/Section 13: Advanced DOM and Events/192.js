'use strict';
/////////
/////////
/////////

//////////// previous code ////////////////////
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

// Modal Window
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach((btn) => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Button scrolling
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  section1.scrollIntoView({ behavior: 'smooth' });
});

/////////
/////////
/////////

//////////// new code ////////////////////

// we want to implement a smooth scrolling behavior in the navigation to the correct section
// Page navigation
// the code below isn't efficient, b/c it uses a .forEach loop to go through every href, if there were many many more it would take a long time to execute
document.querySelectorAll('.nav__link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    const id = this.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  });
});

// more efficient way of writing code above using event delegation; event delegation uses the fact that events bubble up we do that by putting the eventListener on all a common parent of all the elements that we are interested in. For this example it's the container for all the links (.nav__links)
// can be completed in 2 steps
// step 1: we add the eventListener to a common parent element of all the elements that we're interested in
// step 2: Determine what element originated the event so we can then work with that element where the event was actually created

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // matching strategy
  if (e.target.classList.contains('.nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
