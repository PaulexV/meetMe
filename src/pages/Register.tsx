import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth"
import { setDoc, doc } from "firebase/firestore"
import React, { type SyntheticEvent, useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../services/AuthProvider"
import { auth, db } from "../services/firebase"

const Register = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const navigate = useNavigate()

	const { setUser, error, setError } = useContext(AuthContext)

	const signUp = async (e: SyntheticEvent) => {
		e.preventDefault()

		setError(null)
		try {
			await createUserWithEmailAndPassword(auth, email, password)

			auth.currentUser !== null &&
				(await setDoc(doc(db, "users", auth.currentUser.uid), {
					id: auth.currentUser.uid,
					age: null,
					city: null,
					description: null,
					picture: null,
					isSearching: false,
				}))

			const response = await signInWithEmailAndPassword(auth, email, password)
			setUser(response.user)
			localStorage.setItem("@user", JSON.stringify(response.user))
			navigate("/Home")
		} catch (error: any) {
			if (error.code === "auth/email-already-in-use") {
				setError("Cet email est déjà utilisé")
			} else if (error.code === "auth/invalid-email") {
				setError("Le format de l'email est invalide")
			} else {
				console.error(error)
			}
		}
	}

	return (
		<div id="register-div">
			<h1>Register</h1>
			{error != null && <p style={{ color: "red" }}>{error}</p>}
			<form onSubmit={signUp}>
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
				<button type="submit">Register</button>
			</form>
		</div>
	)
}
export default Register
