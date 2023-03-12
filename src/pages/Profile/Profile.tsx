import React, { useEffect, useState } from "react"
import { signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { auth, db } from "../../services/firebase"
import { Button, FormControl, TextField } from "@mui/material"
import Navbar from "../../components/Navbar"
import Picture from "../../components/Picture/Picture"
import "./Profile.css"
import { doc, getDoc, updateDoc } from "firebase/firestore"

const Profile = () => {
	const navigate = useNavigate()

	const [username, setUsername] = useState("")
	const [city, setCity] = useState("")
	const [age, setAge] = useState("")
	const [description, setDescription] = useState("")

	const logout = async () => {
		await signOut(auth).then(() => {
			localStorage.removeItem("@user")
			navigate("/")
		})
	}

	const updateUser = async () => {
		try {
			auth.currentUser !== null &&
				(await updateDoc(doc(db, "users", auth.currentUser.uid), {
					age,
					city,
					description,
					username,
				}))
		} catch (error: any) {
			throw new Error("Error, try again later.")
		}
	}

	return (
		<div id="profile-div">
			<Picture />
			<div className="fields">
				<TextField
					label="Username"
					variant="outlined"
					onChange={(e) => {
						setUsername(e.target.value)
					}}
				/>
				<TextField
					label="City"
					variant="outlined"
					onChange={(e) => {
						setCity(e.target.value)
					}}
				/>
				<TextField
					label="Age"
					variant="outlined"
					onChange={(e) => {
						setAge(e.target.value)
					}}
				/>
				<TextField
					id="outlined-multiline-static"
					label="Description"
					multiline
					rows={4}
					onChange={(e) => {
						setDescription(e.target.value)
					}}
				/>
			</div>
			<Button
				className="logout-button"
				variant="contained"
				onClick={async () => {
					await updateUser()
				}}
			>
				Save
			</Button>
			<Button
				className="logout-button"
				variant="contained"
				onClick={async () => {
					await logout()
				}}
			>
				Logout
			</Button>
			<Navbar state={1} />
		</div>
	)
}

export default Profile
