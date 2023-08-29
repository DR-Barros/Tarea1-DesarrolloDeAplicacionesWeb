const urlParams = new URLSearchParams(window.location.search)
const NAME = urlParams.get("Nombre");
const nombre = document.getElementById('nombre')
const region = document.getElementById('region')
const comuna = document.getElementById('comuna')
const transporte = document.getElementById('transporte')
const deportes = document.getElementById('deportes')
fetch("./datos/hinchas.json")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        data.hinchas.forEach(element => {
            if (element.Nombre == NAME) {
                nombre.innerText = element.Nombre
                //region.innerText = element.region
                comuna.innerText = element.Comuna
                transporte.innerText = element.Transporte
            }
        });
    })
