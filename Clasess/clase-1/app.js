let div= document.querySelector('div');
let boton = document.getElementById('boton');

boton.addEventListener('click', saludar);
boton.addEventListener('click', adios);

// boton.onclick = saludar;
// boton.onclick = adios;

function colores(){
    console.log('entro -->')
    div.innerHTML='esto lo trae el javaScrips'
    div.style.margin = '50p'
    div.style.background='aliceblue'
}
function saludar(){
    alert('Hola estoy aqui')
}
function adios(){
    alert('Adios')
}