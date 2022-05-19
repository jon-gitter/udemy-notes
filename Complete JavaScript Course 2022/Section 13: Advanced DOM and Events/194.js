'use strict';

// we want to create a tab, when clicked on, will change the content below

// the entire tabbed component in HTML is called class = "operations" (line 143)
// in HTML "operations__tab-container" contains the three tabs, each tab is a button
// there are three operations content
// when we click on a tab we essentially hide the other tabs

// building the tabbed component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

// tabs.forEach((t) => tabs.addEventListener('click', () => console.log('TAB'))); // this code is not recommended b/c it will loop over every tab, what if we had 200 tabs? it would slow down the page

// using event delegation, we need to attach the event handler on the common parent element of all the elements we're interested in
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  // guard clause
  if (!clicked) return;

  // remove active classes for both tab and content areas
  tabs.forEach((t) => t.classList.remove('operations__tab--active'));
  tabsContent.forEach((c) => c.classList.remove('operations__content--active'));

  // Active tab
  clicked.classList.add('operations__tab--active');

  // activate content area
  console.log(clicked.dataset.tab);
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});
