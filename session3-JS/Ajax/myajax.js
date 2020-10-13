document.querySelector("#btn").addEventListener("click", getData);
const TARGET = document.querySelector("#target");
async function getData() {
  let url = "https://127.0.0.1/gogo";
  let options = {
    method: "GET",
    // mode: 'cors',
    // headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json;charset=UTF-8'
    // },
    // body: JSON.stringfy({
    //     property_one: value_one,
    //     property_two: value_two
    // })
  };
  let response = await fetch(url, options);

  // console.log(response);
  let responseOK = response && response.ok;
  if (responseOK) {
    let data = await response.json();
    console.log("==========", data[0]["title"]);
    data.map((item) => (TARGET.innerHTML += item.title));
  }
}
setTimeout(getData, 5000);
// async function getData() {
//   let url = "https://jsonplaceholder.typicode.com/users";
//   let options = {
//     method: "GET",
//     // mode: 'cors',
//     // headers: {
//     //     'Accept': 'application/json',
//     //     'Content-Type': 'application/json;charset=UTF-8'
//     // },
//     // body: JSON.stringfy({
//     //     property_one: value_one,
//     //     property_two: value_two
//     // })
//   };
//   let response = await axios(url, options);
//   console.log("####", response);
//   let responseOK = response && response.status === 200;

//   if (responseOK) {
//     let data = await response.data;
//     console.log("==========", data);
//     data.map((item) => (TARGET.innerHTML += item.name));
//     // TARGET.innerHTML = data;
//   }
// }
