let subject = " Prog 3 ";

let year = 2022;

let favoriteSites = [
    "Youtube", "Instagram", "Facebook", "Amazon", "Mercado Libre"
];

favoriteSites[3];

favoriteSites.pop;

favoriteSites.push('Netflix');

let person = {
    name = "Mike",
    lastName = "Wazowski",
    age = "37",
}

let resultado = (person) => `Hola mi nombre es ${person.name} ${person.lastName} y tengo ${person.age} anios`

console.log(resultado);


let punto4 = [
    {nombre: "prog 1", descripcion: "abcd", cantAlumnos: 2, alumnos: [{nombre:"juan"}, {nombre: "felipe"} ],dias: ["lunes", "viernes"]},
    {nombre: "prog 2", descripcion: "abcde", cantAlumnos: 19, alumnos: [{nombre: "pablo"}, {nombre: "esteban"} ], dias: ["martes", "viernes"]},
    {nombre: "prog 3", descripcion: "abcdf", cantAlumnos: 10, alumnos: [{nombre: "juan pablo"}, {nombre: "felipe"} ], dias: ["lunes", "miercoles"]},
    {nombre: "prog 4", descripcion: "abcdg", cantAlumnos: 22, alumnos: [{nombre: "andres"}, {nombre:"fernando"} ], dias: ["miercoles", "viernes"]},
    {nombre: "prog 5", descripcion: "abcdh", cantAlumnos: 23, alumnos: [{nombre: "dante"}, {nombre: "bautista"} ], dias: ["lunes", "viernes"]},
    {nombre: "prog 6", descripcion: "abcdi", cantAlumnos: 14, alumnos: [{nombre: "benito"}, {nombre: "pato" }], dias: ["martes", "miercoles"]}
]

punto4[3];

//no entiendo como aclarar sobre que curso me refiero con el map y el filter

let filtrado = punto4.filter(nombre => alumnos.nombre)

