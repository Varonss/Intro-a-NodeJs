module.exports = {
  historia: function(personaje, lugar, edad = 19) {
    if(edad > 18 && edad < 80) {
      return `${personaje} vivia una triste existencia porque no lograba encontrar el amor. Llevava ${edad} anos en este mundo y nunca habia logrado salir de ${lugar}.`
    } else if( edad > 80){
      return `Despues de viajar por el mundo por ${edad} years ${personaje} habia encontrado la sabiduria sificiente como para salir de ${lujar}.`
    }
    // return "Habia una vez un chico que se llamaba" + personje + " y el vivia en " + lugar;
    return `Habia una vez un chico que se llamaba ${personaje} y el vivia en ${lugar}.`;
  }
}
