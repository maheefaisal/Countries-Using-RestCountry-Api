const loadserver = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayingserver(data));
};
const displayingserver = (countries) => {
  const countriescontainer = document.getElementById("allcountries");
  // console.log(countries)
  //   for (const country of countries) {
  //     console.log(country);
  //   }
  countries.forEach((country) => {
    console.log(country.cca2);
    const countrydiv = document.createElement("div");
    countrydiv.classList.add("country");
    countrydiv.innerHTML = `
        <h3>Name:${country.name.common} </h3>
        <h3>Capital:${country.capital ? country.capital[0] : "no capital"} </h3>
    <button onclick="loadcountrydetails('${country.cca2}')">Details</button>

        `;
    countriescontainer.appendChild(countrydiv);
  });
};

const loadcountrydetails = (code) => {
  const url = `https://restcountries.com/v3.1/alpha/${code}
  `;
  // console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => showcountrydetails(data[0]));
};

const showcountrydetails = (country) => {
  const detailcontainer = document.getElementById("countrydetail");
  detailcontainer.innerHTML = `
  <h2>Country Details</h2>
  <h3>Name: ${country.name.common}</h3>
  <p>capital: ${country.capital}</p>
  <img src="${country.flags.png}" alt="">

  `;
};
loadserver();
