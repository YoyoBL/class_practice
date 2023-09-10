async function getCountriesNames() {
   let countriesNames = await fetch(
      "https://restcountries.com/v3.1/all?fields=name"
   ).then((response) => response.json(response));
   countriesNames = countriesNames.map((nameObj) => {
      return nameObj.name.common;
   });
   return countriesNames.sort();
}

async function getCountryInfo(country) {
   let countryInfo = await fetch(
      `https://restcountries.com/v3.1/name/${country}?fields=flags,name,timezones,population,capital,currencies,area,languages&fullText=true`
   ).then((info) => info.json());
   return countryInfo[0];
}

//RENDER

const $CountryInfo = document.getElementById("country-information");
const $CountrySelector = document.getElementById("country-selector");

async function loadCountryNames() {
   const countriesNames = await getCountriesNames();
   let html = "";
   for (let country of countriesNames) {
      html += `<option value="${country}">${country}</option>
      `;
   }
   return html;
}

function objectToString(obj) {
   let keys = Object.keys(obj).toString();
   return keys;
}

function countryHtml({
   flags,
   timezones,
   population,
   capital,
   area,
   languages,
   currencies,
}) {
   timezones = timezones.toString();
   capital = capital.toString();
   languages = Object.values(languages).join(", ");

   return `
    <div class="card w-100">
    <div class="card-header text-center fs-3">
    ${$CountrySelector.value}
  </div>
    <img
       src="${flags.svg}"
       class="card-img-top"
       alt="${flags.alt}"
    />

    <ul class="list-group list-group-flush">
       <li class="list-group-item d-flex">
          <i class="me-2 bi bi-clock"></i>
          <span class="fw-bold">Timezone: </span>
          <span class="flex-fill text-center">${timezones}</span>
       </li>
       <li class="list-group-item d-flex">
          <i class="me-2 bi bi-people-fill"></i>
          <span class="fw-bold">Population: </span>
          <span class="flex-fill text-center">${population}</span>
       </li>
       <li class="list-group-item d-flex">
          <i class="me-2 bi bi-building"></i>
          <span class="fw-bold">Capital: </span>
          <span class="flex-fill text-center"
             >${capital}</span
          >
       </li>
       <li class="list-group-item d-flex">
          <i class="me-2 bi bi-geo-fill"></i>
          <span class="fw-bold">Area: </span>
          <span class="flex-fill text-center">
             ${area} m<sup>2</sup>
          </span>
       </li>
       <li class="list-group-item d-flex">
          <i class="me-2 bi bi-translate"></i>
          <span class="fw-bold">Languages: </span>
          <span class="flex-fill text-center">${languages}</span>
       </li>
       <li class="list-group-item d-flex">
          <i class="me-2 bi bi-cash-coin"></i>
          <span class="fw-bold">Currencies: </span>
          <span class="flex-fill text-center">
             ${currencies[objectToString(currencies)].name} (${objectToString(
      currencies
   )})
          </span>
       </li>
    </ul>
 </div>
    `;
}

async function handleGetCountryInfo(country) {
   const countryInfo = await getCountryInfo(country);
   const html = countryHtml(countryInfo);
   return html;
}

function renderApp(html) {
   $CountryInfo.innerHTML = html;
}

//On load

loadCountryNames().then((response) => ($CountrySelector.innerHTML = response));

$CountrySelector.addEventListener("change", () => {
   const country = $CountrySelector.value;
   handleGetCountryInfo(country).then((response) => renderApp(response));
});
