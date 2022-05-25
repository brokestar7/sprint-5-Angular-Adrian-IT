
const mostrarChiste = <HTMLInputElement>document.getElementById("textoChiste");
var reportJokes = [];

async function generarChiste(){
    
    const config = {
        headers: {
            Accept: "application/json",
        },

    };

    const result = await fetch('https://icanhazdadjoke.com/', config);
    const data = await result.json();

    mostrarChiste.innerHTML = data.joke;
    console.log(data.joke);
    
    
}