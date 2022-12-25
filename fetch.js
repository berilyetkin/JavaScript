fetch("https://www.instagram.com/instagram/?__a")
.then((response) => {
console.log(response.xml);
})
.catch();




// window.onload = function () {
//     res = fetch("https://www.instagram.com/instagram/?__a", {
//         method: 'get'
//     }).then(function (data) {
//         return data.json();
//     }).catch(function (error) {
//         console.log("ERROR".concat(error.toString()));
//     });
//     console.log(res.user);
// };
