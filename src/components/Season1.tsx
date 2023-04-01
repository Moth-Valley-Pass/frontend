import { Box, Dialog, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

export default function Season1({
	setMintArtworkOpen,
}: {
	setMintArtworkOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	// const [mintArtworkOpen, setMintArtworkOpen] = useState(false);
	return (
		<Box>
			<Stack p={5} gap={3} direction="row">
				<Image
					style={{ objectFit: "contain" }}
					width={611}
					height={509}
					alt="a of spades"
					src="/a of spades moth.jpg"
				></Image>
				<Box>
					<Typography sx={{ fontSize: "30px" }} variant="h5">
						S1 focuses on highlighting emerging artists just entering the crypto
						space. Game of Chance is a curation of artworks from talented
						artists who deserves more attention.
					</Typography>
					<Stack mt={3} direction="row">
						<Box sx={{ position: "relative", width: "50px" }}>
							<Image
								style={{
									position: "absolute",
									left: "-80px",
									top: "10px",
									objectFit: "contain",
								}}
								width={275}
								height={234}
								alt="a of spades"
								src="/fly path.svg"
							></Image>
						</Box>
						<Typography sx={{ fontSize: "30px" }}>
							Scroll down to find out more.
						</Typography>
					</Stack>

					<Button
						sx={{
							width: 333,
							height: 94,
							display: "block",
							mx: "auto",
							mt: 10,
							fontSize: "40px",
						}}
						onClick={() => setMintArtworkOpen(true)}
					>
						Mint
					</Button>
				</Box>
			</Stack>

			<Stack
				my={3}
				justifyContent="space-between"
				alignItems={"center"}
				direction="row"
				gap={3}
			>
				<Image
					src="/7 of spades.svg"
					width={237}
					height={352}
					alt="card"
				></Image>
				<Image
					src="/joker of hearts.svg"
					width={237}
					height={352}
					alt="card"
				></Image>
				<Typography variant="h1">=</Typography>
				<Image src="/moth man.jpg" width={486} height={486} alt="card"></Image>
			</Stack>
			<Box sx={{ my: 3, "&>*": { my: 1 } }} mt={5}>
				<Typography fontWeight="bold" variant="h4">
					Rules:
				</Typography>
				<Typography>
					- Each Moth Valley Pass holder will be airdropped 2 random cards.
				</Typography>
				<Typography>
					- The time will come when you&apos;ll have to burn 2 cards.{" "}
				</Typography>
				<Typography>
					- Each art piece is tied to an exact combination of cards.{" "}
				</Typography>
				<Typography>
					- The art pieces and their respective artists will only be revealed
					after the burn period.{" "}
				</Typography>
				<Typography>
					- Ignore the suits, only face value plays a role in the outcomes
				</Typography>
			</Box>
			<Box my={2} sx={{ p: 2, border: "2px solid black" }}>
				{" "}
				<Typography>For example: </Typography>
				<Typography>
					burning A♥️ & 5♠️ will give you an art work from Artist A; and{" "}
				</Typography>
				<Typography>
					burning 8♣️ & K♦️ will give you an art work from Artist B, etc.{" "}
				</Typography>
			</Box>
			<Button
				onClick={() => setMintArtworkOpen(true)}
				sx={{
					fontSize: "40px",
					display: "block",
					width: "333px",
					height: "90px",
					m: "70px auto",
					mb: "100px",
				}}
			>
				Mint
			</Button>
			<Box sx={{ height: "2px" }}></Box>
		</Box>
	);
}

export function Season1Heading() {
	return (
		<Stack alignItems="center" gap={5} direction="row">
			<Image
				style={{ objectFit: "contain" }}
				width={100}
				height={100}
				alt="a of spades"
				src="/folder.svg"
			></Image>
			<Typography fontSize="70px" fontWeight="bold" variant="h1">
				<i style={{ fontWeight: "normal" }}> Season 1:</i> Game of Chance
			</Typography>
		</Stack>
	);
}
