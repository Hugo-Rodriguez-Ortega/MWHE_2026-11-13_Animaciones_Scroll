/* =========================================================
   main.js · TAREA 5 · Scroll suave con Lenis
   Docs: https://github.com/darkroomengineering/lenis
   =========================================================

   1. Enlaza en index.html el CSS y el JS de Lenis desde el CDN (huecos marcados).
   2. Crea aquí la instancia con autoRaf: true.
   3. Haz que los enlaces del menú bajen suave y dejen hueco a la cabecera
      (opción anchors con un offset negativo).
   4. Prueba a cambiar lerp (entre 0 y 1) y fíjate en la diferencia.

*/

// Escribe aquí tu código
const lenis = new Lenis({
    autoRaf: true,
    anchors: { offset: -80 }
});

const piezas = document.querySelectorAll('.pieza');

function suavizar(t) {
    return t < 0.5 ? 8 * t ** 4 : 1 - (-2 * t + 2) ** 4 / 2;
}

function escalarPiezas() {
    const centro = window.innerWidth / 2;
    piezas.forEach(function (pieza) {
        const caja = pieza.getBoundingClientRect();
        const distancia = Math.abs(caja.left + caja.width / 2 - centro) / centro;
        const cerca = Math.max(0, 1 - distancia);
        pieza.style.setProperty('--cerca', suavizar(cerca));
    });
}

window.addEventListener('scroll', escalarPiezas);
escalarPiezas();
