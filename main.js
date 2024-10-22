//1. Funciones flecha

//Convierte la siguiente función en una función flecha:

function saludar() {
    return "Hola";
  }

const saludar1 = () => "Hola"
console.log(saludar1);

//Convierte la siguiente función en una función flecha en línea:

function division(a,b) {
  return a / b;
}

const divide = (a,b) => a/b
console.log(divide);

//Convierte la siguiente función en una función flecha:

function miNombre(nombre) {
  return `Mi nombre es ${nombre}`;
}

const myName = (nombre) => `Mi nombre es ${Víctor}`
console.log(myName);

//Convierte las siguientes funciones en funciones flecha:

function test2() {
  console.log("Función test 2 ejecutada.");
}
function test1(callback) {
  callback();
}

const test22 = () => "Función test2 ejecutada"
console.log(test22);

const test21 = (callback) => callback()
console.log(test21);

//2. Foreach

let gente = [
    {
      nombre: "Jamiro",
      edad: 45,
    },
    {
      nombre: "Juan",
      edad: 35,
    },
    {
      nombre: "Paco",
      edad: 34,
    },
    {
      nombre: "Pepe",
      edad: 14,
    },
    {
      nombre: "Pilar",
      edad: 24,
    },
    {
      nombre: "Laura",
      edad: 24,
    },
    {
      nombre: "Jenny",
      edad: 10,
    },
  ];


  let edadGente = gente.filter(persona => persona.edad > 25)
  console.log(edadGente);
  
  //Crea un array con la gente que empieza por J. 
  
  let nombreJ = []
  
  gente.forEach(persona => {
    if (persona.nombre.startsWith('J')){
      nombreJ.push(persona)
    }

  })
  console.log(nombreJ)

  //3. Map

  let genteMas25 = gente.filter(persona => persona.edad >25)

  let nombreMas25 = genteMas25.map(persona => persona.nombre)
  console.log(nombreMas25);
  
   
  let genteJ = gente.filter(persona => persona.nombre.startsWith('J'))

   let nombreConJ = genteJ.map(persona => persona.nombre)
   console.log(nombreConJ);

   //4. Filter

   //Crea un segundo array que devuelva los impares
   
   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

   const impares = numbers.filter(numero => numero % 2 !== 0);

   console.log(impares);

   //Dado el siguiente array, genera un segundo array que filtre los platos veganos y saque una sentencia como la del ejemplo:

   const foodList = [
    { name: 'Tempeh', isVeggie: true },
    { name: 'Cheesbacon burguer', isVeggie: false },
    { name: 'Tofu burguer', isVeggie: true },
    { name: 'Entrecot', isVeggie: false }
  ];

  const comidaVegana = foodList
  .filter(comida => comida.isVeggie)
  .map(comida => `Que rica ${comida.name} me voy a comer!`);

console.log(comidaVegana);

//5. Reduce

//Dado el siguiente array, obtén la multiplicación de todos los elementos del array:

const numeros = [39, 2, 4, 25, 62];

const multi = numeros.reduce((a,b)=> a*b)

console.log(multi);





   
    
  

