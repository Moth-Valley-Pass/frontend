import { CircularProgress, Box, Dialog } from "@mui/material";
import React from "react";

export default function Loader() {
	return (
		<Dialog
			sx={{
				zIndex: "2000",
				".MuiBackdrop-root": { backgroundColor: "rgba(0,0,0,0.5)" },
				".MuiPaper-root": {
					backgroundColor: "transparent",
					border: "none",
					borderRadius: "12px",
					maxWidth: "95%",
					boxShadow: "none",
					display: "grid",
					placeItems: "center",
					width: "200px",
					height: "200px",
					maxHeight: "95vh",
					margin: "0",
				},
			}}
			open={true}
			onClose={() => {}}
		>
			<Box sx={{ color: "white" }}>
				<CircularProgress color="inherit" />
			</Box>
		</Dialog>
	);
}
