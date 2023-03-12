import React, { useState } from "react"
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material"
import HomeIcon from "@mui/icons-material/Home"
import PersonIcon from "@mui/icons-material/Person"
import { useNavigate } from "react-router-dom"

interface Props {
	state: number
}

const Navbar = (props: Props) => {
	const navigation = useNavigate()
	const [value, setValue] = useState<number>(props.state)

	return (
		<div id="navbar">
			<Paper
				sx={{
					position: "fixed",
					bottom: 0,
					left: 0,
					right: 0,
				}}
				elevation={3}
			>
				<BottomNavigation
					showLabels
					value={value}
					onChange={(event, newValue: number) => {
						setValue(newValue)
						newValue === 0 ? navigation("/home") : navigation("/profile")
					}}
				>
					<BottomNavigationAction label="Home" icon={<HomeIcon />} />
					<BottomNavigationAction label="Profile" icon={<PersonIcon />} />
				</BottomNavigation>
			</Paper>
		</div>
	)
}

export default Navbar
