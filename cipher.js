/*
Javascript:
- No se puede hacer una función que cifre/descifre el texto apretando la tecla
ENTER, porque el ENTER es para dejar un renglón en la caja y poder seguir escribiendo.
*/

/*Los caracteres capaz de leer y cifrar/descifrar:*/
const abecedario = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", 
"m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "á", 
"é", "í", "ó", "ú", ",", ".", "?", "¿", "!", "¡", ";", "1", "2", "3", "4", "5",
"6", "7", "8", "9", "0", "@", "{", "}", "A", "B", "C", "D", "E", "F", "G", "H", 
"I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", 
"X", "Y", "Z", "Á", "É", "Í", "Ó", "Ú", "-", "_", "=", "%", "$", "(", ")",];





/*CIFRAR TEXTO================================================================*/
function cifrar(){
	let textoCifrado = "";
	let letraCifrada = "";	
	let textoACifrar = document.getElementById("cifrar").value;

	for (let i = 0; i < textoACifrar.length; i++) {
		//... si encuentra un espacio, lo agrega al texto que se está cifrando:
		if (textoACifrar[i] === " ") {
			textoCifrado += letraCifrada + " ";
		}

		/*Cifrado para el último elemento del arreglo: se le reasigna el índice 1, es decir,
		se movió en el arreglo 2 lugares hacia la derecha y "salió por la izquierda" del arreglo.*/
		/*El método indexOf() devuelve el índice del elemento dentro del arreglo, que sea igual a 
		lo que le pongamos entre (), en este caso, la letra [i] en "textoACifrar"*/	
		else if (abecedario.indexOf(textoACifrar[i]) === (abecedario.length - 1)) {
			let letraCifrada = abecedario[1];
			textoCifrado += letraCifrada;	
			
		}	

		//Cifrado para el anteúltimo elemento del arreglo: se le reasigna el índice 0.
		else if (abecedario.indexOf(textoACifrar[i]) === (abecedario.length - 2)) {
			let letraCifrada = abecedario[0];
			textoCifrado += letraCifrada;
		}
		
		/*Cifrado para el resto de las letras del string de la variable "textoACifrar": 
		cambia el índice original de esa letra en el arreglo abecedario por el mismo + 2 y
		devuelve esa letra del mismo arreglo*/ 
		else {
			let indiceLetra = abecedario.indexOf(textoACifrar[i]);

			let letraCifrada = abecedario[indiceLetra + 2];

			textoCifrado += letraCifrada;
		}
		
}

	document.getElementById("descifrar").value = textoCifrado;
	
}

/*Función para borrar la caja de texto con el texto a cifrar*/
function borrarCifrar() {
	document.getElementById("cifrar").value = "";
}




/*DESCIFRAR TEXTO ==========================================================*/
function descifrar(){
	let textoADescifrar = "";
	let textoDescifrado = "";
	let letraDescifrada = "";


	textoADescifrar = document.getElementById("descifrar").value;

	for (let i = 0; i < textoADescifrar.length; i++) {
		//... si encuentra un espacio, lo agrega al texto que se está cifrando:
		if (textoADescifrar[i] === " ") {
			textoDescifrado += letraDescifrada + " ";
		}

		/*Descifrado para el último elemento del arreglo:*/
		else if (abecedario.indexOf(textoADescifrar[i]) === 1) {
			let letraDescifrada = abecedario[(abecedario.length - 1)];
			textoDescifrado += letraDescifrada;	
			
		}	

		//Descifrado para el anteúltimo elemento del arreglo: 
		else if (abecedario.indexOf(textoADescifrar[i]) === (0)) {
			let letraDescifrada = abecedario[abecedario.length - 2];
			textoDescifrado += letraDescifrada;
		}
		
		/*Descifrado para el resto de las letras del string de la variable "textoACifrar": 
		cambia el índice original de esa letra en el arreglo abecedario por el mismo - 2 y
		devuelve esa letra del mismo arreglo*/ 
		else {
			let indiceLetra = abecedario.indexOf(textoADescifrar[i]);

			let letraDescifrada = abecedario[indiceLetra - 2];

			textoDescifrado += letraDescifrada;
		}
		
	}
	
	document.getElementById("cifrar").value = textoDescifrado;
	
}

/*Función para borrar la caja de texto con el texto a descifrar*/
function borrarDescifrar() {
	document.getElementById("descifrar").value = "";
}


