// var cowsay = require("cowsay");
//
// let nombre = "Richie"
// let fraceVaquita = "Surcare los 7 mares de pasto";
// let historia = "Hola mi nombre es " + nombre + " .Y hoy me encontre con una vaquita pirata que decia: " + fraceVaquita;
//
// console.log(historia);
//
// console.log(cowsay.say({
// 	text : "I'm a moooodule",
// 	e : "$$",
// 	T : "U "
// }));

// let nombre = 'Richie';
// let Nacionalidad = 'mexicana';
// let quote = 'No es necesario pasar por todas las experiencias en la vida y si podemos evitar las malas porque no ayudarnos.';
// let historia = 'Hola Soy ' + nombre + ' y soy Mexicano. La mejor experiencia en la vida la encuentras conociendo diferentes personas.' + quote;
// let greeting = 'Gracias';
//
//
// console.log(historia);

// or cowsay.think()

// Math.round();
// Math.floor();
// Math.ceil();


// var cowsay = require("cowsay");
const intro = require('./intro');

let personaje = "Richie";
let lugar = 'CDMX';
let edad = Math.random((Math.ceil() * 100));
console.log(intro.historia(personaje, lugar, edad));

// console.log(cowsay.say({
//   text: 'hola',
//   e: "X-$",
//   T: "V "
// }))
