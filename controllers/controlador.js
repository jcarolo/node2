


// el controlador se encargara de administrar las peticiones y respuestas

const {request,response}=require('express')

// cuales son operaciones que debe realizar mi servidor

//registrar un juegador
//buscar un juegador
//buscar todos los jugadores
//Editar un jugadores
//Eliminar un  jugador


function registrarJugador(peticion=request, respuesta=response){

respuesta.json(
{
    estado:true,
    mensaje:"estoy registrando un jugador"
}
)
}

function buscarJugador(peticion=request, respuesta=response){

    respuesta.json(
        {
            estado:true,
            mensaje:"estoy buscando un jugador"
        }
        )
}

function buscarJugadores(peticion=request, respuesta=response){

    respuesta.json(
        {
            estado:true,
            mensaje:"estoy buscando todos los jugadores"
        }
        )
    }

function editarJugador(peticion=request, respuesta=response){

    respuesta.json(
        {
            estado:true,
            mensaje:"estoy editando un jugador"
        }
        )
}


function eliminarJugador(peticion=request, respuesta=response){

    respuesta.json(
        {
            estado:true,
            mensaje:"estoy eliminando un jugador"
        }
        )

}

module.exports={
    registrarJugador,
    buscarJugador,
    buscarJugadores, 
    editarJugador,
    eliminarJugador
}