import React from "react"
import {
	BrowserRouter as Router, // BrowserRouter Y Router hacen lo mismo
	Switch,
	Route,
	Link,
	NavLink,
} from "react-router-dom"
import Civilizacion from "./components/Civilizacion"
import Contacto from "./components/Contacto"
import Inicio from "./components/Inicio"
import Nosotros from "./components/Nosotros"

function App() {
	return (
		<Router>
			{/* Para utilizar rutas en cada uno de nuestros componentes,
             se debe envolver todo en un Router con la finalidad de
             que si se cambia a otro componente por url, que cambie
             todo el contenido dinámico. */}
			<div className="container mt-5">
				<h1>Navbar...</h1>
				<div className="btn-group">
					<Link to="/" className="btn btn-dark mt-2">
						Inicio
					</Link>
					<Link to="/nosotros" className="btn btn-dark mt-2">
						Nosotros
					</Link>
					<NavLink to="/contacto" className="btn btn-dark mt-2 active" activeClassName="active">
						{/* El activeClass */}
						Contacto
					</NavLink>
				</div>
				<hr />
				<Switch>
					{/* Aquí se cargará el contenido dinámico, al cambiar de ruta
          solo cambiará el contenido de cada Route, lo que está fuera del
          Switch se mantendrá. */}
					<Route path="/nosotros/:id">
						{" "}
						{/* Este id es una variable, podemos colocar otro nombre */}
						{/* Realizamos la llamada al componente donde vamos a procesar el id
            de cada civilización. */}
						<Civilizacion />
					</Route>
					<Route path="/contacto">
						Esta es la página de contacto
						<Contacto />
					</Route>
					<Route path="/nosotros">
						Esta es la página de nosotros
						<Nosotros />
					</Route>
					<Route path="/" exact>
						{/* Con el exact se puede subir este Route al inicio del Switch,
            de lo contario deberá ir al final */}
						Esta es la página de inicio
						<Inicio />
					</Route>
					{/* Es importante que al declarar la ruta de cada Route, tiene que ser
          de lo mas especifico a lo mas general, es decir, que si colocamos el
          Route de inicio en el comienzo, no va a llegar a las rutas de contacto
          y de nosotros, a menos que le apliquemos un exact el cual quiere decir 
          que en exactamente esa ruta muestre la información contenida */}
				</Switch>
			</div>
		</Router>
	)
}

export default App
