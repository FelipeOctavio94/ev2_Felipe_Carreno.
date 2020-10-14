import moneda from './modules/moneda.js';
import pasteles from './modules/pasteles.js'

var caja = document.getElementById('caja');

window.calcular = moneda.calcular.bind(moneda);
window.cargar = pasteles.cargar.bind(pasteles);

document.getElementById('moneda').addEventListener('click',()=>{
    caja.innerHTML = moneda.data;
    
})

document.getElementById('pasteles').addEventListener('click',()=>{
    caja.innerHTML = pasteles.data;
    pasteles.cargar();
})