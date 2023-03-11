import React, { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { AuthContext } from "./AuthProvider"

const PrivateRoute = ({ children }: any) => {
	const user = useContext(AuthContext)
	const location = useLocation()

	if (user.user == null) {
		// Si l'utilisateur n'est pas connecté, je le redirige vers la page de connexion
		return <Navigate to="/" state={{ from: location }} />
	}

	// Si l'utilisateur est connecté, alors je retourne le composant enfant
	return children
}

export default PrivateRoute
