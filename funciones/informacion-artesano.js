const urlParams = new URLSearchParams(window.location.search)
const NAME = urlParams.get("Nombre");
const nombre = document.getElementById('nombre')
const region = document.getElementById('region')
const comuna = document.getElementById('comuna')
const tipo = document.getElementById('tipo')
const descripcion = document.getElementById('descripcion')
const mail = document.getElementById('mail')
const phone = document.getElementById('phone')
const fotos = document.getElementById('fotos')

fetch("./datos/artesanos.json")
.then(response => response.json())
.then(data => {
    data.artesanos.forEach(e => {
        if (e.Nombre == NAME) {
            nombre.innerText = e.Nombre
            region.innerText = e.Region
            comuna.innerText = e.Comuna
            let tipos = ""
            e.Tipo.forEach(d => tipos+=" "+d+" ")
            tipo.innerHTML = tipos
            mail.innerText = e.Email
            phone.innerText = e.Celular
            if (Object.keys(e).some(x => x == "Descripcion")){
                descripcion.innerText = e.Descripcion
            }
            let str = ""
            e.Fotos.forEach(f =>{
                let i = f.indexOf(".")
                str+= "<img src='./resources/img/"+f+"' alt='"+f.substring(0, i)+"'>"
            })
            fotos.innerHTML = str
        }
    });
})

