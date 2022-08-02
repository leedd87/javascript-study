// const puntaje = 1000;

// if (puntaje === 1000) {
// 	console.log("si es igual");
// } else {
// 	console.log("no es igual");
// }

// if (puntaje !== 1000) {
// 	console.log("es diferente");
// } else {
// 	console.log("es igual");
// }

// const dinero = 500;
// //const totalAPagar = 300;

// if (dinero < totalAPagar) {
// 	console.log("si podemos pagar");
// } else {
// 	console.log("Fondos insuficientes");
// }

// const autenticado = false;
// const puedePagar = true;

// console.log(autenticado ? "si esta autenticado" : "no esta autenticado");

// const efectivo = 300;
// const credito = 400;
// const disponible = efectivo + credito;
// const totalAPagar = 600;

//Fizz Buzz
//3 6 9 12 ... fizz
//5 10 15 20... buzz
//15 30 45 ... fizzbuzz

for (let i = 0; i <= 100; i++) {
	if (i % 5 === 0 && i % 3 === 0) {
		console.log("fizzbuzz");
	} else if (i % 5 === 0) {
		console.log("buzz");
	} else if (i % 3 === 0) {
		console.log("fizz");
	} else {
		console.log(i);
	}
}
