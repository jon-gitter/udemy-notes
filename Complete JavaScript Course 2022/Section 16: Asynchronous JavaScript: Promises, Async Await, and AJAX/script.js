'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

////////////////////////////////////////////
////// Throwing Errors Manually //////
////////////////////////////////////////////

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)}</p>
        <p class="country__row"><span>🗣️</span>${
          Object.values(data.languages)[0]
        }</p>
        <p class="country__row"><span>💰</span>${
          Object.values(Object.values(data.currencies)[0])[0]
        }</p>
      </div>
    </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);

  // countriesContainer.style.opacity = 1;
};

// getJSON will return a promise
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

const getCountryData = function (country) {
  // country 1
  getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then((data) => {
      renderCountry(data[0]);
      const neighbor = data[0].borders[0];
      
      if (!neighbor) throw new Error('No neighbor found!');

      // country 2
      getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbor}`,
        'Country not found').then((data) => renderCountry(data, 'neighbor'))
    .catch((err) => {
      console.error(`${err}!!!!!!`);
      renderError(`Something went wrong!!!!! ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
  };


btn.addEventListener('click', function () {
  getCountryData('portugal');
});

getCountryData('australia');

///////////////////////////////////////////////////////////////

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     // console.log(this.responseText);

//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `
//     <article class="country">
//       <img class="country__img" src="${data.flags.png}" />
//       <div class="country__data">
//         <h3 class="country__name">${data.name.common}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(
//           +data.population / 1000000
//         ).toFixed(1)}</p>
//         <p class="country__row"><span>🗣️</span>${
//           Object.values(data.languages)[0]
//         }</p>
//         <p class="country__row"><span>💰</span>${
//           Object.values(Object.values(data.currencies)[0])[0]
//         }</p>
//       </div>
//     </article>`;

//     countriesContainer.insertAdjacentHTML('beforeend', html);

//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('portugal');
// getCountryData('usa');
// getCountryData('germany');

///////////////////////
// we need to implement a sequence of AJAX calls so we can render the first country then the country that borders it
///////////////////////

// const renderCountry = function (data, className = '') {
//   const html = `
//     <article class="country ${className}">
//       <img class="country__img" src="${data.flags.png}" />
//       <div class="country__data">
//         <h3 class="country__name">${data.name.common}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(
//           +data.population / 1000000
//         ).toFixed(1)}</p>
//         <p class="country__row"><span>🗣️</span>${
//           Object.values(data.languages)[0]
//         }</p>
//         <p class="country__row"><span>💰</span>${
//           Object.values(Object.values(data.currencies)[0])[0]
//         }</p>
//       </div>
//     </article>`;

//   countriesContainer.insertAdjacentHTML('beforeend', html);

//   countriesContainer.style.opacity = 1;
// };

// const getCountryAndNeighbour = function (country) {
//   // AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // Render country 1
//     renderCountry(data);

//     // Get neighbor country 2
//     const [neighbor] = data.borders;
//     // for countries without borders
//     if (!neighbor) return;

//     // AJAX call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbor}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const [data2] = JSON.parse(this.responseText);
//       console.log(data2);

//       // setting different styles for neighbor countries
//       renderCountry(data2, 'neighbor');
//     });
//   });
// };

// // getCountryAndNeighbour('portugal');
// getCountryAndNeighbour('usa');

// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 second passed');
//     setTimeout(() => {
//       console.log('3 second passed');
//       setTimeout(() => {
//         console.log('4 second passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);
