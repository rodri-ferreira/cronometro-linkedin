const btnIniciar = document.querySelector('#iniciar');
const btnPausar = document.querySelector('#pausar');
const btnZerar = document.querySelector('#zerar');
const cronometroMarcador = document.querySelector('#cronometroMarca');
const registrarTempo = document.querySelector('#registrar')
const containerTempoSalvo = document.querySelector('.tempoSalvo')
const temposRegistrados = document.querySelector('.registrarTempo')

let elementoRegistro;

let tempo = 0;
let botaoClicado = false
let dataExibe;
let setIntervalFunc

// botão iniciar
const iniciarCronometroFunc = function(){
        
    if(!botaoClicado) {
        console.log("botão clicado 1 vez")
        setIntervalFunc = setInterval(function(){

            tempo++;

            dataExibe = new Date(00,00,00,00,00,00,tempo * 1000)
                cronometroMarcador.innerHTML = dataExibe.toLocaleTimeString('pt-BR',{
                hour12: false
                })

        }, 1000)

        botaoClicado = true 
    }    
}

//botão pausar 
function pausarCronometro() {
    setTimeout(function(){
        clearInterval(setIntervalFunc)
    },10)
    cronometroMarcador.innerHTML = dataExibe.toLocaleTimeString('pt-BR',{
        hour12: false
        })
    botaoClicado = false
}

//botaoZerar
function zerarCronometro() {
    tempo = 0
    
    setTimeout(function(){
        clearInterval(setIntervalFunc)
    },1)
    dataExibe = new Date(00,00,00,00,00)

    cronometroMarcador.innerHTML = dataExibe.toLocaleTimeString('pt-BR',{
        hour12: false
        })
    botaoClicado = false
    const registrados = document.getElementsByClassName("registrarTempo");

    const registradosArray = Array.from(registrados);

    registradosArray.forEach(function(elemento) {
        elemento.parentNode.removeChild(elemento);
    });
    
}

//botao registar tempo

function registrarTempoFunc() {

    elementoRegistro = document.createElement("p")
    elementoRegistro.className = 'registrarTempo'
    elementoRegistro.textContent = dataExibe.toLocaleTimeString('pt-BR',{
        hour12: false
    })

    containerTempoSalvo.appendChild(elementoRegistro)

}

btnIniciar.addEventListener('click', iniciarCronometroFunc);
btnPausar.addEventListener('click', pausarCronometro);
btnZerar.addEventListener('click', zerarCronometro);
registrarTempo.addEventListener('click', registrarTempoFunc)
