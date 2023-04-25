console.log("Ejercicio 1 - Area y perimetro Cuadrado");

function cuadrado(L) {
  let area = L * L;
  let perimetro = L + L + L + L;
  retorno = { lado: L, Area: area, Perimetro: perimetro };
  return retorno;
}

console.log(cuadrado(9));

console.log("Ejercicio 2 - Area y perimetro Circulo");
function circulo(R) {
  const PI = 3.1415167;
  let area = PI * R ** 2;
  let perimetro = 2 * R * PI;
  retorno = {
    Radio: R,
    Area: parseFloat(area.toFixed(2)),
    Perimetro: parseFloat(perimetro.toFixed(2)),
  };
  return retorno;
}
console.log(circulo(5));
console.log("Ejercicio 3 - Vueltas");
function vueltas(V) {
  let mM, mQ, mD, mC, mI;
  let res, res1;
  // Monedas de 1000
  res = V % 1000;
  mM = (V - res) / 1000;
  // Monedas de 500
  res1 = res % 500;
  mQ = (res - res1) / 500;
  // Monedas de 200
  res = res1 % 200;
  mD = (res1 - res) / 200;
  // Monedas de 100
  res1 = res % 100;
  mC = (res - res1) / 100;
  //   Monedas de 50
  res = res % 50;
  mI = (res1 - res) / 50;

  vueltas = {
    monedasDe1000: mM,
    monedasDe500: mQ,
    monedasDe200: mD,
    monedasDe100: mC,
    monedasDe50: mI,
  };

  return vueltas;
}
console.log(vueltas(250));
console.log("Ejercicio 4 - Es positivo? ");
function positivoVsNegativo(N) {
  return N >= 0 ? true : false;
}
console.log(positivoVsNegativo(-2));

console.log("Ejercicio 5 - descuento + iva? ");

function precioProducto(N) {
  const IVA = 0.19;
  const DESCUENTO = 0.3;
  let descuento = N * DESCUENTO;
  let iva = N * IVA;
  let precio = N - descuento + iva;
  return precio;
}

console.log(
  "Precio Total del producto con descuento + iva " + precioProducto(3000) + " $"
);

console.log("Ejercicio 6 - salario horas extras ");
function salarioTrabajador(H) {
  let hE = H - 40;
  const SALARIO = 400_000;
  return SALARIO + 2 * hE * (SALARIO / 40);
}
console.log(salarioTrabajador(41));
