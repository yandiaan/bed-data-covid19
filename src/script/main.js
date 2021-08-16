import axios from "axios";
import "./components/nav-bar.js";

let url = "https://rs-bed-covid-api.vercel.app/api";
let province = document.getElementById("province");
let cities = document.getElementById("cities");
let cov = document.getElementById("cov");
let dataContainer = document.getElementById("dataContainer");
let btnSearch = document.getElementById("btnSearch");

axios.get(`${url}/get-provinces`).then((response) => {
  let data = response.data.provinces;
  data.forEach((result) => {
    province.innerHTML += `
              <option value="${result.id}">${result.name}</option>
              `;
  });
});

province.addEventListener("change", () => {
  cities.innerHTML = `<option selected disabled hidden>Pilih Kabupaten/Kota</option>`;
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

cities.addEventListener("change", () => {
  cov.removeAttribute("disabled");
});

btnSearch.addEventListener("click", () => {
  dataContainer.innerHTML = `<h1 class="text-center">Data Rumah Sakit</h1>`;
  axios
    .get(
      `${url}/get-hospitals?provinceid=${province.value}&cityid=${cities.value}&type=${cov.value}`
    )
    .then((response) => {
      let data = response.data.hospitals;
      data.forEach((result) => {
        dataContainer.innerHTML += `<div class="card bg-dark text-light w-75 mx-auto mt-4 mb-2 p-3 text-center rounded">
          <p>Nama Rumah Sakit : ${result.name}</p>
          <p>Alamat : ${result.address}</p>
          <p>Telepon : ${result.phone}</p>
          <p>Antrian : ${result.queue}</p>
          <p>Kamar Kosong : ${result.bed_availability}</p>
          <p>${result.info}</p>
        </div>`;
      });
    });
});
