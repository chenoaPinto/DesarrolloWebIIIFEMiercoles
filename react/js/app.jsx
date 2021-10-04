let alumnos= {
    nombre: " chenoa",
    edad: 18,
    mostrar:()=>{
        return `soy ${alumnos.nombre} y tengo ${alumnos.edad}`;
    }
};
let saludo= `hola${alumnos.nombre} como estas?`;

ReactDOM.render(
    <div className="row">
        <div className="col-6 bg-primary text-white text-center p-4">
        
        {alumnos.mostrar()}
        </div>
        
    </div>,
    document.getElementById('root')
);
