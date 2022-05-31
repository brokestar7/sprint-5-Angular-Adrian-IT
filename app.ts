
const mostrarChiste = <HTMLInputElement>document.getElementById("textoChiste");
const mostrarTiempo = <HTMLInputElement>document.getElementById("textoTiempo");

var dataResult:any = 0; 
var reportJokes:any = [];
var fecha = new Date();

generarTiempo();

async function generarChiste(){
    const encontrarIndex = (e:any) => e.id == data.id;
    
    const config = {
        headers: {
            Accept: "application/json",
        },
        
    };

    const result = await fetch('https://icanhazdadjoke.com/', config);
    const data = await result.json();
    dataResult = data;
    mostrarChiste.innerHTML = data.joke;
    console.log(data.joke);
    
    
    if(!reportJokes.includes(data.id)){ // si se introduce por primera vez
        // console.log("if reportJokes"+reportJokes);
        // console.log("id reportJokes"+reportJokes.findIndex(encontrarIndex));
        reportJokes.push(data);
        reportJokes[reportJokes.findIndex(encontrarIndex)].score = 0;        
        reportJokes[reportJokes.findIndex(encontrarIndex)].date = fecha.toISOString();        
    }
    else{
        
        console.log("else :)" + data);
        
    }
    
}

function rateJokes(score:number){

    if(dataResult == 0){
        alert("primero pulsa en següent acudit para tener un chiste que puntuar :)");
    }
    else{

        const encontrarIndex = (e:any) => e.id == dataResult.id;
        reportJokes[reportJokes.findIndex(encontrarIndex)].date = fecha.toISOString();        
    
        reportJokes[reportJokes.findIndex(encontrarIndex)].score += score;
    
        console.log(reportJokes[reportJokes.findIndex(encontrarIndex)]);
    
        generarChiste();
    }
    
}

async function generarTiempo(){

    const result = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Barcelona?unitGroup=metric&key=2AHH3C2PWPEXSKXPHQBMBR3YA&contentType=json');

    const data = await result.json();
    mostrarTiempo.innerHTML = "<img src='./imagenes/dom.png'style='width:25px' > Temp "+data.days[0].temp+" ºC";
    console.log(data);

}

async function generarChisteCN(){

    const result = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await result.json();

    console.log(data.value);


}