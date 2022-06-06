'use strict';

// images have the most impact on page loading, important that images are optimized, lazy loading images helps with this

// we want a low resolution image that is small in size and loads in the beginning thats replaced by the larger img.  img src is the small image, the larger image is in the data-src. We will also remove the lazy-img class that makes the image blurred.

// HTML

/* <div class="features">
  <img
    src="img/digital-lazy.jpg"
    data-src="img/digital.jpg"
    alt="Computer"
    class="features_img lazy-img"
  />
</div>; */

// CSS

// .lazy-img {
//   filter: blur(20px);
// }

/////////////////////////////////////////////////////

// Lazy loading images

const imgTargets = document.querySelectorAll('img[data-src]'); // [] allow us to select the property of data-src from all the images that contain it, this is a CSS feature

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  // replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img'); // will only remove the blur filter when the high-res image is fully loaded
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px', // makes it so that the images load 200 pixels before we reach them
});

imgTargets.forEach((img) => imgObserver.observe(img));
