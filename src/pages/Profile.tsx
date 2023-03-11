import React, { useContext } from "react"
import { signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../services/AuthProvider"
import { auth } from "../services/firebase"
import { Button } from "@mui/material"
import Navbar from "../components/Navbar"

const Profile = () => {
	const navigate = useNavigate()
	const { user } = useContext(AuthContext)

	const logout = async () => {
		await signOut(auth).then(() => {
			localStorage.removeItem("@user")
			navigate("/")
		})
	}

	return (
		<div id="profile-div">
			{user != null && (
				<Button
					variant="contained"
					onClick={async () => {
						await logout()
					}}
				>
					Logout
				</Button>
			)}
			<Navbar state={1} />
		</div>
	)
}

export default Profile
