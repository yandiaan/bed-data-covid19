import axios from "axios";
import "./components/nav-bar.js";

let url = "https://rs-bed-covid-api.vercel.app/api";
let province = document.getElementById("province");
let cities = document.getElementById("cities");

// fetch(url, {
//   method: "get",
//   dataType: "json",
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json",
//   },
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(`error : ${error}`));

axios.get(`${url}/get-provinces`).then((response) => {
  let data = response.data.provinces;
  data.forEach((result) => {
    province.innerHTML += `
    <option value="${result.id}">${result.name}</option>
    `;
  });
});

province.addEventListener("change", () => {
  cities.removeAttribute("disabled");
  axios
    .get(`${url}/get-cities?provinceid=${province.value}`)
    .then((response) => {
      let data = response.data.cities;
      data.forEach((result) => {
        cities.innerHTML += `
        <option value="${result.id}">${result.name}</option>
        `;
      });
    });
});

let welcome = document.getElementById("welcome");

welcome.addEventListener("click", () => {
  welcome.classList.add("disappear");
});
