/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./App.css"
import AuthProvider from "./services/AuthProvider"
import PrivateRoute from "./services/privateRoute"
import { Home, Login, Register, Profile, Connection } from "./pages/Index"
import { Paper } from "@mui/material"

function App() {
	return (
		<AuthProvider>
			<div id="master-div">
				<Paper className="header" elevation={6}>
					<div className="header-name">MeetMe</div>
				</Paper>
				<Router>
					<Routes>
						<Route path="/" element={<Connection />} />
						<Route
							path="/home"
							element={
								<PrivateRoute>
									<Home />
								</PrivateRoute>
							}
						/>
						<Route
							path="/profile"
							element={
								<PrivateRoute>
									<Profile />
								</PrivateRoute>
							}
						/>
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
					</Routes>
				</Router>
			</div>
		</AuthProvider>
	)
}

export default App
