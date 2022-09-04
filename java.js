var requestUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=9e77b1b7f27b8828dd5ef4dfac880892`;
const APIkey = '9e77b1b7f27b8828dd5ef4dfac880892';
let lon = '----';
let lan = '----';
var responseText = document.getElementById('response-text');



fetch(requestUrl)
.then(function (response) {
    return response.json();
})
.then(function (data) {
console.log(data)
    // for (let i = 0; i <data.length; i++) {
    //     const listItem = document.create
    // }
});


// fetch(requestUrl)
//     .then(response => response.text())
//     .then(data => console.log(data));
// fetch(requestUrl)
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// function getApi(requestUrl) {
//   fetch(requestUrl)
//     .then(function (response) {
//       console.log(response);
//       if (response.status === 200) {
//         responseText.textContent = response.status;
//       }
//       return response.json();
//   });
// }





// getApi(requestUrl);
