//Variables utiles
//Precio base de la cotización, en quetzales, lo puede cambiar
var precio_base = 2000;

//Valores de los recargos
var edad_18 = 0.1; // 10%
var edad_25 = 0.2; // 20%
var edad_50 = 0.3; // 30%

var casado_18 = 0.1; // 10%
var casado_25 = 0.2; // 20%
var casado_50 = 0.3; // 30%

var hijos_recargo = 0.2; // 20%

const obtenerRecargo = (edad) => {
  if (edad <= 24) {
    return precio_base * 0.1;
  }

  if (edad <= 49) {
    return precio_base * 0.2;
  }

  return precio_base * 0.3;
};

const cotizacion = () => {
  const edad = parseInt(prompt('¿Cuál es su edad?'));

  if (edad < 18) {
    return alert('No tiene la edad suficiente');
  }

  let precio = 2000;
  let recargo = 0;

  recargo += obtenerRecargo(edad);

  const nombreAsegurado = prompt('¿Cuál es su nombre?');

  const propiedades = prompt('¿Tiene propiedades?');

  if (propiedades.toLowerCase() == 'si') {
    const cantidadPropiedades = parseInt(prompt('¿Cuántas propiedades tiene?'));

    for (let contador = 1; contador <= cantidadPropiedades; contador++) {
      recargo += precio * 0.35;
    }
  }

  const sueldo = parseInt(prompt('¿Cuál es su sueldo?'));

  recargo += sueldo * 0.05;

  const pareja = prompt('¿Tiene parejas?');

  if (pareja.toLowerCase() == 'si') {
    const edadPareja = parseInt(prompt('¿Cuál es la edad de tu pareja?'));

    recargo += obtenerRecargo(edadPareja);
  }

  const hijos = prompt('¿Tiene hijos?');

  if (hijos.toLowerCase() == 'si') {
    const cantidadHijos = parseInt(prompt('¿Cuántos hijos tiene?'));

    for (let contador = 1; contador <= cantidadHijos; contador++) {
      recargo += precio * 0.2;
    }
  }

  const precioFianl = precio + recargo;

  alert(`${nombreAsegurado}, el precio final es: ${precioFianl}`);
};

let contadorWhile = 0;
while (true) {
  if (contadorWhile > 0) {
    const continuar = prompt('¿Desea continuar?, [salir] = acabar programa');

    if (continuar.toLowerCase() == 'salir') {
      break;
    }
  }

  cotizacion();
  contadorWhile += 1;
}
