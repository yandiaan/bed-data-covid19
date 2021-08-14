let url = "https://api.dazelpro.com/mobile-legends/hero";

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

axios.get(`${url}/9`).then((data) => console.log(data.data.hero));
