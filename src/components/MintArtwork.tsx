import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function MintArtwork() {
	const [minted, setMinted] = useState(false);
	return (
		<Box>
			<Stack
				justifyContent={"space-between"}
				alignItems={"start"}
				gap={5}
				direction="row"
			>
				<Image
					alt="card fly"
					src="/red fly card.svg"
					width={264}
					height={393}
				></Image>
				<Image
					alt="card fly"
					src="/black fly card.svg"
					width={264}
					height={393}
				></Image>
				<Typography sx={{ alignSelf: "center" }} variant="h1">
					=
				</Typography>
				<Box>
					{minted ? (
						<Image
							alt="card fly"
							src="/fly gown.png"
							width={410}
							height={411}
						></Image>
					) : (
						<Box
							width={410}
							sx={{ backgroundColor: "grey" }}
							height={411}
						></Box>
					)}
					{minted ? (
						<>
							{" "}
							<Typography fontWeight="bold" mt={3} variant="h6">
								You have revealed an artwork!
							</Typography>
							<Typography fontWeight="bold" variant="h6">
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
			{minted ? (
				<Typography fontWeight="bold" variant="h6">
					Burn success.
				</Typography>
			) : (
				<Typography fontWeight="bold" variant="h6">
					Click to select cards to burn
				</Typography>
			)}
		</Box>
	);
}
export function MintArtWorkHeading() {
	return (
		<Stack alignItems="center" gap={5} direction="row">
			<Image
				style={{ objectFit: "contain" }}
				width={100}
				height={100}
				alt="a of spades"
				src="/Folder.svg"
			></Image>
			<Typography fontSize="70px" fontWeight="bold" variant="h1">
				<i> Season 1:</i> Mint Artwork
			</Typography>
		</Stack>
	);
}
