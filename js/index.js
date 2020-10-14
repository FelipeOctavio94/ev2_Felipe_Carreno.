import moneda from './modules/moneda.js';

var caja = document.getElementById('caja');

window.calcular = moneda.calcular.bind(moneda);

document.getElementById('moneda').addEventListener('click',()=>{
    caja.innerHTML = moneda.data;
    
});