export default{
    valores: {dolar:628.68, 
              uf:26648.67, 
              euro:740.67}, 


    data: `
    <h1>Autor: FELIPE CARREÑO</h1>

    Valor en pesos CL<br>
    <input id="txt" type="number"/></br></br>
    <input id="dolar" type="radio" name="grupo" value="dolar">a Dolar
    <input id="uf" type="radio" name="grupo" value="uf">a UF
    <input id="euro" type="radio" name="grupo" value="euro">a Euro
    <br><br>
    <button onclick="calcular()">Calcular</button>
    <p id="resp"></p> 


    `,

    calcular: function (){
    var peso = document.getElementById('txt');
    var opciones = document.getElementById('grupo')
    var grupo = "";
    var resp = document.getElementById('resp');
    var total = "";
    if(peso!=""){
        radios.forEach(item =>{
            if(item.checked){
               peso = item.value;
            }

        });

        
        if (grupo == "dolar") {
            total= peso/this.valores.dolar;
            resp.innerHTML = "Equivale a "+total.toFixed(0)+" dolares";
            resp.style.color = "blue";
        }else if(grupo == "uf"){
            total = peso/this.valores.uf;
            resp.innerHTML = "Equivale a "+total.toFixed(0)+" UF";
            resp.style.color = "blue";
        }else if(grupo == "euro"){
            total = peso/this.valores.euro;
            resp.innerHTML = "Equivale a "+total.toFixed(0)+" euros";
            resp.style.color = "blue";
        }else{
            resp.innerHTML="Seleccione una moneda!";
            resp.style.color ="red";
        }
    }else{
        resp.style.color ="red";
        resp.innerHTML = "Ingrese algun valor";
    }

}
}