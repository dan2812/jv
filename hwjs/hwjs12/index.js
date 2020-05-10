"use strict"

const input = document.querySelector("#country");
const listOfCountry = document.querySelector("listOfCountry");
const countryInfo = document.querySelector(".countryInfo");
const btn = document.querySelector(".push");


function fetchCountries(searchQuery){
return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
. then((res) => res.json())
.then((data) => data)
.catch((error) => error);
 };
function inputHandler() {
    fetchCountries(input.value).then((data) => {
      console.log(data);
      if (data.length > 2 && data.length < 10) {
        const names = data.reduce(
          (acc, el) => (acc += `<li>${el.name}</li>`),
          ""
        );
        listOfCountry.innerHTML = names;
      } else if (data.length === 1) {
          const lang = data[0].languages.map(el => el.name).reduce((acc,el) =>(acc += `<li>${el}</li>`), "")
        const countryInf = `<h2>${data[0].name}</h2>
        <div style="display:flex">
          <div>
              <p>Capital: ${data[0].capital}</p>
              <p>Population: ${data[0].population}</p>
             <div>
             <p>Languages</p>
              <ul>${lang}</ul>
              </div>
          </div>
          <div>
              <img height="200" width="200" src="${data[0].flag}"/>
          </div>
        </div>`;
        countryInfo.innerHTML = countryInf;
      }
    });
  }
  
  btn.addEventListener("click", inputHandler);