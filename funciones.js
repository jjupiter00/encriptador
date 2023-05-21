

var encriptar = document.querySelector(".encriptar");
var desencriptar = document.querySelector(".desencriptar");
var form1 = document.querySelector(".input_text");
var form2 = document.querySelector(".input_resultado");
var copiar = document.querySelector(".copiar");



function encriptando (evento){

    evento.preventDefault();
    let ingreso_text = document.querySelector(".ingreso_text").value;
    let ingreso_resultado = document.querySelector(".ingreso_resultado");
    
    
    
    
    
    ingreso_resultado.value = ingreso_text.replace(/e/g,"enter");
    ingreso_resultado.value = ingreso_resultado.value.replace(/i/g,"imes");
    ingreso_resultado.value = ingreso_resultado.value.replace(/a/g,"ai");
    ingreso_resultado.value = ingreso_resultado.value.replace(/o/g,"ober");
    ingreso_resultado.value = ingreso_resultado.value.replace(/u/g,"ufat");

    
   

   form1.reset();
   

}

function desencriptando (evento) {

    evento.preventDefault();
    let ingreso_text = document.querySelector(".ingreso_text").value;
    let ingreso_resultado = document.querySelector(".ingreso_resultado");
    
    ingreso_resultado.value = ingreso_text.replace(/ufat/g,"u");
    ingreso_resultado.value = ingreso_resultado.value.replace(/ober/g,"o");
    ingreso_resultado.value = ingreso_resultado.value.replace(/ai/g,"a");
    ingreso_resultado.value = ingreso_resultado.value.replace(/imes/g,"i");
    ingreso_resultado.value = ingreso_resultado.value.replace(/enter/g,"e");

    form1.reset();

}

function copiando (evento){

    evento.preventDefault();
    let ingreso_resultado = document.querySelector(".ingreso_resultado");
    
    
    navigator.clipboard.writeText(ingreso_resultado.value);


    form2.reset();
}



encriptar.onclick = encriptando;
desencriptar.onclick = desencriptando;
copiar.onclick = copiando;




