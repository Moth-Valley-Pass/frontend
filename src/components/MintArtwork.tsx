import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function MintArtwork() {
	const [minted, setMinted] = useState(false);
	return (
		<Box sx={{ maxWidth: "100%" }}>
			<Stack
				justifyContent={"space-between"}
				alignItems={{ xs: "center", lg: "start" }}
				gap={{ xs: 2, md: 5 }}
				sx={{
					".img-container": {
						position: "relative",
						width: 264,
						height: 393,
						maxWidth: "100%",
					},
					".img-container.minted": {
						width: 410,
						height: 410,
					},
				}}
				direction={{ xs: "column", lg: "row" }}
			>
				<Box className="img-container">
					<Image alt="card fly" src="/red fly card.svg" fill></Image>
				</Box>
				<Box className="img-container">
					<Image alt="card fly" src="/black fly card.svg" fill></Image>
				</Box>
				<Typography sx={{ alignSelf: "center" }} variant="h1">
					=
				</Typography>
				<Box sx={{ maxWidth: "100%" }}>
					{minted ? (
						<Box className="img-container minted">
							<Image alt="card fly" src="/fly gown.png" fill></Image>
						</Box>
					) : (
						<Box
							className="img-container minted"
							sx={{ backgroundColor: "grey" }}
						></Box>
					)}
					{minted ? (
						<>
							{" "}
							<Typography
								sx={{ textAlign: { lg: "start", xs: "center" } }}
								fontWeight="bold"
								mt={3}
								variant="h6"
							>
								You have revealed an artwork!
							</Typography>
							<Typography
								sx={{ textAlign: { lg: "start", xs: "center" } }}
								fontWeight="bold"
								variant="h6"
							>
								Click <Link href="https://google.com"> here </Link> to view.
							</Typography>
						</>
					) : (
						<Button
							sx={{ fontSize: "20px", my: 2, width: "100%" }}
							onClick={() => setMinted(true)}
						>
							Mint
						</Button>
					)}
				</Box>
			</Stack>

			<Typography
				textAlign={{ lg: "start", xs: "center" }}
				fontWeight="bold"
				variant="h6"
			>
				{minted ? "Burn success" : "					Click to select cards to burn"}
			</Typography>
		</Box>
	);
}
export function MintArtWorkHeading() {
	return (
		<Box sx={{ maxWidth: "100%", overflow: "auto" }}>
			<Stack
				sx={{
					img: {
						width: { xs: 40, lg: 100 },
						height: { xs: 40, lg: 100 },
					},
					width: "max-content",
				}}
				alignItems="center"
				gap={{ xs: 2, md: 5 }}
				direction="row"
			>
				<Image
					style={{ objectFit: "contain" }}
					width={100}
					height={100}
					alt="a of spades"
					src="/Folder.svg"
				></Image>
				<Typography fontWeight="bold" variant="h1">
					<i> Season 1:</i> Mint Artwork
				</Typography>
			</Stack>
		</Box>
	);
}
