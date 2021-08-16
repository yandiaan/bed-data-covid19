let url =
  "https://rs-bed-covid-api.vercel.app/api/get-hospitals?provinceid=34prop&cityid=3404&type=1";

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

axios.get(`${url}`).then((data) => {
  console.log(data);
});
