/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var arregloResultante = [];

   for (var clave in objeto) {
     if (objeto.hasOwnProperty(clave)) {
       arregloResultante.push([clave, objeto[clave]]);
     }
   }
 
   return arregloResultante;

}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var desorden = {};

   for(var i = 0; i < string.length; i++) {
      var letra = string[i]
      if(desorden[letra]) {
         desorden[letra]++
      } else {
         desorden[letra] = 1
      }
   }
   var ordenado = {};

   Object.keys(desorden).sort().forEach(function(clave){
      ordenado[clave] = desorden[clave]

   });
 return ordenado;

}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var convertir = string.split("")
    var arreglomayuscula = [];
    var arreglominuscula = [];
    for(var i = 0; i < convertir.length; i++){
       if(convertir[i] === convertir[i].toUpperCase()) {
          arreglomayuscula.push(string[i])
 
       } else {
          arreglominuscula.push(string[i])
       }
 
    }
   
    return arreglomayuscula.join("") + arreglominuscula.join("")
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var convertir = frase.split(" ");
   var resultado =[];

   for(var i = 0; i < convertir.length; i++){
      resultado.push(convertir[i].split("").reverse().join(""))
   }
   return resultado.join(" ")

}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var string = numero.toString()
   for(var i = 0,j = string.length - 1; i < j; i++, j-- ){
      if(string[i] !== string[j]) {
         return "No es capicua"
      }
      
   }
   return "Es capicua"
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var basura = [];
   var palabra = string.split("");
   var arreglada = []
   for (var i = 0; i < palabra.length; i++){
      if(string[i] === "a" || string[i] === "b"  || string[i] === "c"){
         basura.push(string[i])
      } else {
         arreglada.push(string[i])
      }
   }
   return arreglada.join("");
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   arrayOfStrings.sort(function(a, B){
      return a.length - B.length
   })
   return arrayOfStrings;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var iguales = [];
   for(var i = 0; i < array1.length; i++){
      var array = array1[i]
      if (array2.includes(array)){
         iguales.push(array)
      }
   }
   return iguales;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
