
const mostrarChiste = <HTMLInputElement>document.getElementById("textoChiste");
var reportJokes:any = [];

async function generarChiste(){
    const encontrarIndex = (e:any) => e.id == data.id;
    
    const config = {
        headers: {
            Accept: "application/json",
        },
        
    };

    const result = await fetch('https://icanhazdadjoke.com/', config);
    const data = await result.json();
    
    mostrarChiste.innerHTML = data.joke;
    console.log(data.joke);
    
    
    if(!reportJokes.includes(data.id)){ // si se introduce por primera vez
        // console.log("if reportJokes"+reportJokes);
        // console.log("id reportJokes"+reportJokes.findIndex(encontrarIndex));
        reportJokes.push(data);
        reportJokes[reportJokes.findIndex(encontrarIndex)].score = 0;        
        
    }
    
}

function rateJokes(score:number){
    
    
}