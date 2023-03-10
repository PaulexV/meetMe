import { signInWithEmailAndPassword } from "firebase/auth"
import React, { type SyntheticEvent, useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../services/AuthProvider"
import { auth } from "../services/firebase"

const Login = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const navigate = useNavigate()
	const { setUser, error, setError } = useContext(AuthContext)

	const signIn = async (e: SyntheticEvent) => {
		e.preventDefault()

		setError(null)
		try {
			const response = await signInWithEmailAndPassword(auth, email, password)
			setUser(response.user)
			localStorage.setItem("@user", JSON.stringify(response.user))
			navigate("/Home")
		} catch (error: any) {
			if (error.code === "auth/user-not-found") {
				setError("Votre email ou mot de passse est incorrect")
			} else if (error.code === "auth/invalid-email") {
				setError("Le format de l'email est invalide")
			} else {
				console.error(error)
			}
		}
	}

	return (
		<div id="login-div">
			<h1>Login</h1>
			{error != null && <p style={{ color: "red" }}>{error}</p>}
			<form onSubmit={signIn}>
				<label>
					Email
					<input
						type="email"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value)
						}}
					/>
				</label>
				<label>
					Password
					<input
						type="password"
						value={password}
						onChange={(e) => {
							setPassword(e.target.value)
						}}
					/>
				</label>
				<button type="submit">Login</button>
			</form>
		</div>
	)
}

export default Login
