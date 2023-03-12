import React from "react"
import { Card, CardMedia } from "@mui/material"

const Picture = () => {
	return (
		<div id="pictures-grid">
			<Card sx={{ maxWidth: 345 }}>
				<CardMedia
					sx={{ height: 350, width: 250 }}
					image="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
					title="photographer"
				/>
			</Card>
		</div>
	)
}

export default Picture
