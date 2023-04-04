import { Box, Dialog, Button, Stack, Typography, Divider } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import ClubsIcon from "@/src/assets/clubs.svg";
import DaimondIcon from "@/src/assets/daimond.svg";
import HeartsIcon from "@/src/assets/heartsvg.svg";
import SpadeIcon from "@/src/assets/spade.svg";

function MintButton() {}

export default function Season1({
	setMintArtworkOpen,
}: {
	setMintArtworkOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	// const [mintArtworkOpen, setMintArtworkOpen] = useState(false);
	return (
		<Box>
			<Stack
				sx={{ flexDirection: { xs: "column-reverse", lg: "row" } }}
				// p={{ xs: 2, md: 5 }}
				alignItems={{ xs: "center", lg: "start" }}
				gap={{ xs: 3, md: 10 }}
			>
				<Box
					sx={{
						width: { xs: 400, xl: 611 },
						// height: { xs: 400 / (611 / 509), xl: 509 },
						aspectRatio: `${611 / 509}`,
						maxWidth: "90%",
						minWidth: "45%",
						img: {},
						position: "relative",
					}}
				>
					<Image
						style={{ objectFit: "contain" }}
						fill
						alt="a of spades"
						src="/a of spades moth.jpg"
					></Image>
				</Box>
				<Box>
					<Typography
						sx={{ fontSize: { p: 0, xs: "25px", xl: "30px" } }}
						variant="h5"
					>
						S1 focuses on highlighting emerging artists just entering the crypto
						space. Game of Chance is a curation of artworks from talented
						artists who deserves more attention.
					</Typography>
					<Stack gap={1} mt={3} direction="row">
						<Box sx={{ position: "relative", width: "50px" }}>
							<Image
								style={{
									position: "absolute",
									left: "-80px",
									top: "10px",
									objectFit: "contain",
									zIndex: 2,
									objectPosition: "top center",
								}}
								width={275}
								height={264}
								alt="a of spades"
								src="/fly path.svg"
							></Image>
						</Box>
						<Typography sx={{ fontSize: { xs: "25px", md: "30px" } }}>
							Scroll down to find out more.
						</Typography>
					</Stack>

					<Button
						sx={{
							px: { md: 5, xl: 15 },
							// width: 333,
							// height: 94,
							display: "block",
							mx: "auto",
							mt: { xs: 4, md: 10 },
							fontSize: "40px",
						}}
						onClick={() => setMintArtworkOpen(true)}
					>
						Mint
					</Button>
				</Box>
			</Stack>
			<Divider
				sx={{
					my: 2,
					display: { xs: "block", lg: "none" },
					border: "2px solid black",
				}}
			></Divider>
			<Stack
				my={{ xs: 4, md: 8 }}
				justifyContent="space-between"
				alignItems={"center"}
				direction={{ xs: "column", md: "row" }}
				gap={{ xs: 2, md: 3 }}
				sx={{
					".img-container": {
						width: { xs: 175, lg: 237 },
						aspectRatio: `${237 / 352}`,
						maxWidth: "100%",
						objectFit: "contain",
						position: "relative",
					},
					".img-container.moth-man": {
						width: { xs: 265, lg: 486 },
						aspectRatio: `1`,
					},
				}}
			>
				<Stack
					justifyContent="space-between"
					gap={{ xs: 2, sm: 6, md: 9, lg: 12, xl: 15 }}
					sx={{ flexShrink: "0", felxGrow: "1", maxWidth: "100%" }}
					direction="row"
				>
					<Box className="img-container">
						<Image src="/7 of spades.svg" fill alt="card"></Image>
					</Box>
					<Box className="img-container">
						<Image src="/joker of hearts.svg" fill alt="card"></Image>
					</Box>
				</Stack>
				<Typography variant="h1">=</Typography>
				<Box className="img-container moth-man">
					<Image
						style={{ objectFit: "cover" }}
						src="/moth man.jpg"
						fill
						alt="card"
					></Image>
				</Box>
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
			<Box my={2} sx={{ p: { xs: 1, md: 2 }, border: "2px solid black" }}>
				{" "}
				<Typography>For example: </Typography>
				<Typography>
					burning A<Image width={15} height={15} src={HeartsIcon} alt="icon" />{" "}
					& 5<Image width={15} height={15} src={SpadeIcon} alt="icon" /> will
					give you an art work from Artist A; and{" "}
				</Typography>
				<Typography>
					burning 8<Image width={15} height={15} src={ClubsIcon} alt="icon" /> &
					K<Image width={15} height={15} src={DaimondIcon} alt="icon" /> will
					give you an art work from Artist B, etc.{" "}
				</Typography>
			</Box>
			<Button
				sx={{
					px: { md: 5, xl: 15 },
					// width: 333,
					// height: 94,
					display: "block",
					mx: "auto",
					mt: { xs: 4, md: 10 },
					fontSize: "40px",
				}}
				onClick={() => setMintArtworkOpen(true)}
			>
				Mint
			</Button>
			<Box sx={{ height: "2px" }}></Box>
		</Box>
	);
}

export function Season1Heading() {
	return (
		<Box sx={{ overflow: "auto", pr: 8 }}>
			<Stack
				alignItems="center"
				sx={{ width: "max-content" }}
				gap={{ xs: 2, md: 5 }}
				direction="row"
			>
				<Box
					sx={{
						img: {
							width: { xs: 40, lg: 100 },
							height: { xs: 40, lg: 100 },
						},
					}}
				>
					<Image
						style={{ objectFit: "contain" }}
						width={100}
						height={100}
						alt="a of spades"
						src="/Folder.svg"
					></Image>
				</Box>
				<Typography fontWeight="bold" variant="h1">
					<i style={{ fontWeight: "normal" }}> Season 1:</i> Game of Chance
				</Typography>
			</Stack>
		</Box>
	);
}
