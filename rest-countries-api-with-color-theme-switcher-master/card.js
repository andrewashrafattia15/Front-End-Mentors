const urlCountries = new URLSearchParams(window.location.search);
const country = urlCountries.get("country");
console.log(country);

let url = "https://restcountries.com/v3.1/name/" + country;

// const countries = url.then(response => response.json()).;

function appendInfo(
  countryName,
  countryNativeName,
  countryRegion,
  countryPopulation,
  countrySubregion,
  countryCapital,
  countryTld,
  countryCurrencies,
  countryLanguages,
  countryBorders,
  countryFlag
) {
  const template = `<div class="country_card">
        <img class="country_flag" src=${countryFlag}>
        <div class="country_info">
            <h2 class="country_name">${countryName}</h2>
            <div  class="country_rest_details">
                  <p><b>Native Name:</b> ${countryNativeName}<p/>
                  <p><b>Population:</b> ${countryPopulation}<p/>
                  <p><b>Region:</b> ${countryRegion}<p/>
                  <p><b>Sub Region:</b> ${countrySubregion}<p/>
                  <p><b>Capital:</b> ${countryCapital}<p/>
                  <p><b>Top Level Domain:</b> ${countryTld}<p/>
                  <p><b>Currencies:</b> ${countryCurrencies}<p/>
                  <p><b>Languages:</b> ${countryLanguages}<p/>
                  <p><b>Border Countries:</b> ${countryBorders}<p/>
            </div>
        </div>
    </div>`;

  return template;
}
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    data = data[0];
    console.log(data);
    const currencies = data.currencies[Object.keys(data.currencies)[0]].name;
    var languages = Object.entries(data.languages).map((lang) => lang[1]);
    console.log(languages);
    // var currencies = data[Object.keys(data)[8]].name;
    const temp = appendInfo(
      data.name.common,
      data.name.native,
      data.region,
      data.population,
      data.subregion,
      data.capital,
      data.tld,
      currencies,
      languages,
      data.borders,
      data.flags.svg
    );
    document.querySelector(".detailed_card").innerHTML += temp;
  });
