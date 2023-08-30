// Funcion que muestra el menu

function responsiveMenu() {
    let x = document.getElementById("nav")
    if (x.className==="") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

// Funcion aplica estilo a la opcion seleccionada del menu y quita la anterior seleccionada

function seleccionar(link) {
    let opciones = document.querySelectorAll('#links a')
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = 'seleccionado'

    // Vamos hacer desaparecer el menu una vez seleccionado una opcion
    var x = document.getElementById("nav")
    x.className = "";   
}

// Funcion del formulario

const form = document.querySelector('form')
const loader = document.getElementById('loader')
const respuesta = document.getElementById('respuesta')

form.addEventListener('submit', (e)=>{
    //e.preventDefault()
    alert("Enviando Formulario");
    loader.style.display = 'block'
    respuesta.style.display = 'block'
    setTimeout(() => {
        loader.style.display = 'none'
        respuesta.style.display = 'none'
    },3000);
})