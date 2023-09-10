async function getCountriesNames() {
   const response = await fetch(
      "https://restcountries.com/v3.1/all?fields=name"
   );
   return await response.json();
}

async function getCountryInfo(country) {
   let response = await fetch(
      `https://restcountries.com/v3.1/name/${country}?fields=flags,name,timezones,population,capital,currencies,area,languages&fullText=true`
   );
   const countryInfo = await response.json();
   return countryInfo[0];
}

//RENDER

const $CountryInfo = document.getElementById("country-information");
const $CountrySelector = document.getElementById("country-selector");

populateSelector();

async function populateSelector() {
   const countries = await getCountriesNames();
   $CountrySelector.innerHTML = countries
      .sort((a, b) => (a.name.common > b.name.common ? 1 : -1))
      .map(
         ({ name: { common, official } }) =>
            `<option value="${official}"> ${common} </option>`
      )
      .join("");
}
