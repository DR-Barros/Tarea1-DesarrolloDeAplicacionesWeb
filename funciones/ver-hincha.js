const HINCHA = [
    {
        "Nombre": "Javiera Vidal",
        "Comuna":"La Reina",
        "Deportes": ['Golf', 'Lucha', 'Surf'],
        "Transporte": "particular",
        "Celular": "+ 56904040404"
    },
    {
        "Nombre": "Juan Radrigán",
        "Comuna":"Ñuñoa",
        "Deportes": ['Karate'],
        "Transporte": "locomoción Pública",
        "Celular": "+56987654321"
    },
    {
        "Nombre": "Humberto Suazo",
        "Comuna":"San Antonio",
        "Deportes": ['Rugby 7', 'Tiro'],
        "Transporte": "particular",
        "Celular": "+56909090909"
    },
    {
        "Nombre": "Julio Rodriguez",
        "Comuna":"Punta Arenas",
        "Deportes": ['Vela', 'Remo', 'Surf'],
        "Transporte": "locomoción Pública",
        "Celular": "+56912345678"
    },
    {
        "Nombre": "Lucas Asadi",
        "Comuna":"Puente Alto",
        "Deportes": ['Gimnasia rítmica'],
        "Transporte": "particular",
        "Celular": "+56955533322"
    },
]

const LISTADOHINCHAS = document.getElementById("tabla");

let str = "<tr><td>Nombre</td><td>Comuna</td><td>Deportes</td><td>Modo Transporte</td><td>Numero celular</td></tr>"
HINCHA.forEach(e =>{
    str += "<tr><td><a href='./informacion-hincha.html?Nombre="+e.Nombre+"'>"+e.Nombre+"</a></td>"
    str += "<td>"+e.Comuna+"</td><td>"
    e.Deportes.forEach(e =>{str += " "+ e + " "})
    str += "</td><td>"+e.Transporte+"</td>"
    str += "<td>"+e.Celular+"</td><tr>"
})
LISTADOHINCHAS.innerHTML = str