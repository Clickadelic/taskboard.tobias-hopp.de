import React from 'react'
import Container from '@mui/material/Container'; // Grid version 1
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Typography } from '@mui/material';


function Footer() {

	return (
		<footer style={{minHeight: "200px", backgroundColor: "#000"}}>
			<Container maxWidth="xl">
				<Grid container spacing={2}>
					<Grid xs={3}>
						<Typography as="h2">
							Was ist das Dashboard?
						</Typography>
					</Grid>
					<Grid xs={3}>
						Item
					</Grid>
					<Grid xs={3}>
						Item
					</Grid>
					<Grid xs={3}>
						Item
					</Grid>
				</Grid>
			</Container>
		</footer>
	)

}

export default Footer