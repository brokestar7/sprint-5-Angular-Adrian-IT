var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};
function generarChiste() {
    fetch("https://icanhazdadjoke.com/", requestOptions)
        .then(function (response) { return response.text(); })
        .then(function (result) { return console.log(result); })["catch"](function (error) { return console.log('error', error); });
}
