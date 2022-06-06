'use strict';

// we want to build a feature that reveals elements when we scroll close to them, the sections will "slide" up when we reach them

// CSS class used on <section> elements
// .section--hidden {
//   opacity: 0;
//   transform: translateY(8rem);
// }

// reveal sections

const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});
