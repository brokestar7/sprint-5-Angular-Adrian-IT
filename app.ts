
var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");

var requestOptions: any = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};


function generarChiste(){
    
    fetch("https://icanhazdadjoke.com/", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));


}