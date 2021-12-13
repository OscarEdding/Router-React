import React from "react"
import { Link } from "react-router-dom"

const Nosotros = () => {
	const [equipo, setEquipo] = React.useState([])

	React.useEffect(() => {
		console.log("useEffect")
		obtenerDatos() /* Ejecutamos a la función obtenerDatos y 
        gracias a , [] lo estamos llamando solo 1 vez */
	}, [])

	const obtenerDatos = async () => {
		/* Función de flecha asincrona */
		const data = await fetch("https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations") /* Llamado a la app */
		const users = await data.json() /* Lo transformamos a json */
		console.log(users)
		setEquipo(users.civilizations) /* Una vez obtenido toda la información necesaria, podemos 
        pushearla en setEquipo */
	}

	return (
		<div>
			<h1>Nosotros</h1>
			<ul>
				{equipo.map((item) => (
					<li key={item.id}>
                        <Link to={`/nosotros/${item.id}`}> 
                            {/* Como el to es dinamico vamos a utilizar las llaves {} y 
                            las comillas invertidas `` para poder recibir el id de la 
                            manera ${item.id}.
                            De esta manera realizamos un ancla a cada item de la lista 
                            que al presionarlo muestra como ruta el id. */}
						    {item.name} - {item.expansion}
                        </Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Nosotros
