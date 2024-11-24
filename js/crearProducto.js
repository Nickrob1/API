import { conexionAPI } from "./script.js";
const form = document.querySelector("[data-form]");

async function crearProducto(evento){
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value;

    await conexionAPI.enviarProducto(nombre,precio,imagen);

    alert("Se ha enviado el producto")
}

form.addEventListener("submit",evento => crearProducto(evento));

