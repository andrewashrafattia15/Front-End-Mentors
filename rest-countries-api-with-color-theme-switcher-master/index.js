let url = "https://restcountries.com/v3.1/all";

// const countries = url.then(response => response.json()).;

function appendInfo(
  countryFlag,
  countryName,
  countryPopulation,
  countryRegion,
  countryCapital
) {
  const template = `<div class="country_card">
  <a href="./card.html?country=${countryName}">
        <img class="country_flag" src=${countryFlag}>
        <div class="country_info">
            <h2 class="country_name">${countryName}</h2>
            <div  class="country_rest_details">
                  <p><b>Population:</b> ${countryPopulation}<p/>
                  <p><b>Region:</b> ${countryRegion}<p/>
                  <p><b>Capital:</b> ${countryCapital}<p/>
            </div>
        </div>
  </a>
    </div>`;
  
  return template;
}
console.log(document.querySelector(".countries_container"));

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    if (data.length > 0) {
      data.forEach((element) => {
        const temp = appendInfo(
          element.flags.svg,
          element.name.common,
          element.population,
          element.region,
          element.capital
        );
        document.querySelector(".countries_container").innerHTML += temp;
      });
    }
  });
