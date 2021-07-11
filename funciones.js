// Declarativas

function miFuncion () {
    return 3;
}

miFuncion();

//Expresión

var miFuncion = function(a, b) {
    return a + b;
}

miFuncion();


//Saludo estudiantes

function saludarEstuadiantes(estudiante) {
    console.log(`Hola ${estudiante}`);
}

//Obtener resultados y no usar el console log

function sumar(a,b) {
    var resultado = a + b;
    return resultado;    
}
