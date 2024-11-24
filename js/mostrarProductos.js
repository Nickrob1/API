import { conexionAPI } from "./script.js";

const lista = document.querySelector("[data-lista]")

function crearCard(imagen,nombre,precio,id){
    const producto = document.createElement("li");
    producto.className = "card";
    producto.innerHTML = `<img class="productos__lista__imagen" src="Assets/${imagen}.png">
                    <p class="productos__lista__subtitulo">${nombre}</p>
                    <div class="productos__lista__precio__contenedor">
                        <p class="productos__lista__precio">$ ${precio}</p>
                        <i class="fa fa-trash" aria-hidden="true" data-id ="${id}></i>"
                    </div>`;
    return producto;
}

async function listarProductos (){
    const listaAPI = await conexionAPI.listarProductos();
    listaAPI.forEach(producto => {lista.appendChild(crearCard(producto.imagen,producto.nombre,producto.precio,producto.id));
    }
);
    
    
}

listarProductos()