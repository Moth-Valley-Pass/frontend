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
					<Typography>
						S1 focuses on highlighting emerging artists just entering the crypto
						space. Game of Chance is a curation of artworks from talented
						artists who deserves more attention.
					</Typography>
					<Stack direction="row">
						<Box sx={{ width: "50px" }}>
							<Image
								style={{
									position: "relative",
									left: "-80px",
									objectFit: "contain",
								}}
								width={275}
								height={234}
								alt="a of spades"
								src="/fly path.svg"
							></Image>
						</Box>
						<Typography>Scroll down to find out more.</Typography>
					</Stack>

					<Button onClick={() => setMintArtworkOpen(true)}>Mint</Button>
				</Box>
			</Stack>

			<Stack alignItems={"center"} direction="row" gap={3}>
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
			<Box mt={5}>
				<Typography variant="h4">Rules:</Typography>
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
				sx={{ display: "block", m: "auto" }}
			>
				Mint
			</Button>
		</Box>
	);
}
