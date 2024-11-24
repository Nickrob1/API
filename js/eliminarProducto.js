boton

















/*import { conexionAPI } from "./script.js";

async function eliminarProductos (){
    const listaAPI = await conexionAPI.listarProductos();
    const botonEliminar = document.querySelector(".fa-trash")
    const id = listaAPI.forEach(element => {element.getAttribute("data-id")
        
    });
    console.log(id);
}

eliminarProductos();