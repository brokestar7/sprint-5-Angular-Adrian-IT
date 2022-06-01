var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var mostrarChiste = document.getElementById("textoChiste");
var mostrarTiempo = document.getElementById("textoTiempo");
var dataResult = 0;
var reportJokes = [];
var fecha = new Date();
generarTiempo();
function generarChiste() {
    return __awaiter(this, void 0, void 0, function () {
        var encontrarIndex, nunRandom, result, data, config;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    encontrarIndex = function (e) { return e.id == data.id; };
                    nunRandom = Math.floor(Math.random() * 2);
                    console.log("numero random " + nunRandom);
                    config = {
                        headers: {
                            Accept: "application/json"
                        }
                    };
                    if (!(nunRandom == 1)) return [3 /*break*/, 3];
                    return [4 /*yield*/, fetch('https://icanhazdadjoke.com/', config)];
                case 1:
                    result = _a.sent();
                    return [4 /*yield*/, result.json()];
                case 2:
                    data = _a.sent();
                    mostrarChiste.innerHTML = data.joke;
                    return [3 /*break*/, 6];
                case 3: return [4 /*yield*/, fetch('https://api.chucknorris.io/jokes/random')];
                case 4:
                    result = _a.sent();
                    return [4 /*yield*/, result.json()];
                case 5:
                    data = _a.sent();
                    mostrarChiste.innerHTML = data.value;
                    _a.label = 6;
                case 6:
                    dataResult = data;
                    if (!reportJokes.includes(data.id)) { // si se introduce por primera vez
                        // console.log("if reportJokes"+reportJokes);
                        // console.log("id reportJokes"+reportJokes.findIndex(encontrarIndex));
                        reportJokes.push(data);
                        reportJokes[reportJokes.findIndex(encontrarIndex)].score = 0;
                        reportJokes[reportJokes.findIndex(encontrarIndex)].date = fecha.toISOString();
                    }
                    else {
                        console.log("else :)" + data);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function rateJokes(score) {
    if (dataResult == 0) {
        alert("primero pulsa en següent acudit para tener un chiste que puntuar :)");
    }
    else {
        var encontrarIndex = function (e) { return e.id == dataResult.id; };
        reportJokes[reportJokes.findIndex(encontrarIndex)].date = fecha.toISOString();
        reportJokes[reportJokes.findIndex(encontrarIndex)].score += score;
        console.log(reportJokes[reportJokes.findIndex(encontrarIndex)]);
        generarChiste();
    }
}
function generarTiempo() {
    return __awaiter(this, void 0, void 0, function () {
        var result, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Barcelona?unitGroup=metric&key=2AHH3C2PWPEXSKXPHQBMBR3YA&contentType=json')];
                case 1:
                    result = _a.sent();
                    return [4 /*yield*/, result.json()];
                case 2:
                    data = _a.sent();
                    mostrarTiempo.innerHTML = "<img src='./imagenes/dom.png'style='width:25px' > Temp " + data.days[0].temp + " ºC";
                    console.log(data);
                    return [2 /*return*/];
            }
        });
    });
}
// async function generarChisteCN(){
//     const result = await fetch('https://api.chucknorris.io/jokes/random');
//     const data = await result.json();
//     console.log(data.value);
// }
