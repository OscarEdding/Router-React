import React from "react"
import { useParams } from "react-router"
import Nosotros from "./Nosotros"

const Civilizacion = () => {
	console.log(useParams())
	const { id } = useParams() /* Hacemos una llamada al idque se encuentra en el 
    path (path="/nosotros/:id") de la manera {id}.
    Es importante que esta constante lleve el mismonombre que 
    en el path de Route. */
	console.log(id)

	/* Utilizamos un useState, un useEffect y una función para llamara a una api
    tal cual como lo hicimos en el componente Nosotros.jsx */
	const [civilizacion, setCivilizacion] = React.useState([])

	React.useEffect(() => {
		console.log("useEffect")
		const obtenerDatos = async () => {
			/* Función de flecha asincrona */
			const data = await 
                fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`)
			/* Llamado a la app con el valor dinámico al id (ojo que es civilization sin "s") */
			const res = await data.json() /* Lo transformamos a json */
			console.log(res)
			setCivilizacion(res) /* Una vez obtenido toda la información necesaria, podemos 
            pushearla en setCivilizacion */
		}
		obtenerDatos()
        /* Para solucionar unos errores, debemos realizar unos cambios:
        Como mencionamos anteriormente, la función obtenerDatos puede ir dentro del useEffect
        para evitar los warnings de React, pero luego nos da un warning de que el id se está
        perdiendo, por lo que lo agregamos dentro de , [id] */

	}, [id])

	return (
		<div>
			<h3>{civilizacion.name}</h3>
			<p>{civilizacion.team_bonus}</p>
		</div>
	)
}

export default Civilizacion
