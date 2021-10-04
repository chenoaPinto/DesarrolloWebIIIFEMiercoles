let elemento = document.getElementById('root');

const nombreCompleto=(nombre="", apellido= "")=>{
    let nc= `<h2> mi nombre es: ${nombre} ${apellido}</h2>`;
    return nc;

}

elemento.innerHTML+=nombreCompleto("chenoa","pinto");
