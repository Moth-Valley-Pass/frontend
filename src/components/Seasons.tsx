import {
	Stack,
	Box,
	Dialog,
	Divider,
	Typography,
	IconButton,
} from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";
import Season1, { Season1Heading } from "./Season1";
import MintArtwork, { MintArtWorkHeading } from "./MintArtwork";

export default function Seasons({
	open,
	onClose,
}: {
	open: boolean;
	onClose: () => any;
}) {
	const [season1Open, setSeason1Open] = useState(false);
	const [mintArtworkOpen, setMintArtworkOpen] = useState(false);

	return (
		<Dialog maxWidth={false} open={open} onClose={onClose}>
			<Box
				sx={{
					width: "min(1495px, 95vw)",
					height: "850px",
					position: "relative",
				}}
				p={5}
			>
				<Box
					sx={{
						position: "absolute",
						top: { xs: 25, md: 50 },
						right: { xs: 55, md: 50 },
					}}
				>
					{
						<IconButton
							onClick={() => {
								if (mintArtworkOpen) {
									setMintArtworkOpen(false);
								} else if (season1Open) {
									setSeason1Open(false);
								} else {
									onClose();
								}
							}}
							sx={{
								img: {
									width: { md: 50, xs: 25 },
									height: { md: 50, xs: 25 },
								},
							}}
						>
							<Image
								width={50}
								height={50}
								src="/close.svg"
								alt="Close btn"
							></Image>
						</IconButton>
					}
				</Box>
				{mintArtworkOpen ? (
					<MintArtWorkHeading />
				) : season1Open ? (
					<Season1Heading />
				) : (
					<Typography
						sx={{ fontSize: { xs: "30px", md: "6rem" } }}
						fontWeight="bold"
						variant="h1"
					>
						Seasons
					</Typography>
				)}
				<Divider sx={{ border: "3px solid black", my: 3 }}></Divider>
				{/* home */}
				{mintArtworkOpen ? (
					<MintArtwork />
				) : season1Open ? (
					<Season1 setMintArtworkOpen={setMintArtworkOpen} />
				) : (
					<Stack
						gap={{ xs: 5, md: 10 }}
						p={3}
						justifyContent={"center"}
						alignItems={"center"}
						margin={"auto"}
						flexWrap={"wrap"}
						direction="row"
						sx={{
							img: {
								width: { md: "250px", xs: "100px" },
								height: { md: "250px", xs: "100px" },
							},
						}}
					>
						<Stack alignItems="center">
							<IconButton>
								<Image
									width={250}
									height={250}
									onClick={() => setSeason1Open(true)}
									src="/Folder.svg"
									alt="Close btn"
								></Image>
							</IconButton>
							<Typography>Season 1</Typography>
						</Stack>
						<Stack alignItems="center">
							<IconButton disabled>
								<Image
									width={250}
									height={250}
									src="/FolderLock.svg"
									alt="Close btn"
								></Image>
							</IconButton>
							<Typography>Season 2</Typography>
						</Stack>
						<Stack alignItems="center">
							<IconButton disabled>
								<Image
									width={250}
									height={250}
									src="/FolderLock.svg"
									alt="Close btn"
								></Image>
							</IconButton>
							<Typography>Season 3</Typography>
						</Stack>
					</Stack>
				)}
			</Box>
		</Dialog>
	);
}
