
async function listarProductos() {
    const conexion = await fetch("http://localhost:3001/productos");
    const dataConvertida = await conexion.json();
    console.log (dataConvertida)
    console.log (conexion)
    return dataConvertida;
}


async function enviarProducto(nombre,precio,imagen) {
    const conexion = await fetch ("http://localhost:3001/productos",{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            nombre:nombre,
            precio:precio,
            imagen:imagen
        })
    })

    const dataConvertida = await conexion.json();

    return dataConvertida;
}

export const conexionAPI = {
    listarProductos,enviarProducto
}