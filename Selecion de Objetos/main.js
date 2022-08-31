"use strict"
//seleciionar por id
//const parrafoUno = document.getElementById("parrafo1");
//seleccion por atributo name
let nameParrafo = document.getElementById("parra2");
console.log(nameParrafo);
//seleciion por class
let elemento = document.getElementById("parrafo");
console.log(elemento);
//query selector por id
const parrafoUno = document.querySelector("#parrafo1");
const elementEtiqueta =document.querySelector("h1");
const elementClass = document.querySelector(".ejemplo");

// selecionando todos los elementos p
const todosp = document.querySelectorAll("p");
//console.log(lementClass);
/*
function print(){
    const valor = document.getElementById("edad").ariaValueMax;
    alert ("la edad es: " + valor);
}*/
const print1 = () => {
    const valor = document.getElementById("edad").value;
    alert ("la edad es:" + valor);
}