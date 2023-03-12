import React from "react"
import { Button } from "@mui/material"
import { Link } from "react-router-dom"
import "./Connetion.css"

const Connection = () => {
	return (
		<div id="connectionPage">
			<Link to="/login">
				<Button variant="contained">Login</Button>
			</Link>
			<Link to="/register">
				<Button variant="contained">Register</Button>
			</Link>
		</div>
	)
}

export default Connection
