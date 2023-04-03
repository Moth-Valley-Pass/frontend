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
import CloseBtn, { CloseBtnContainer } from "./CloseBtn";

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
					width: "min(1495px, 90vw)",
					boxSizing: "border-box",
					height: { md: "min(90vh, 900px)" },
					position: "relative",
				}}
				py={{ xs: 5, md: 5 }}
				px={{ xs: 2, md: 5 }}
			>
				<CloseBtnContainer>
					<CloseBtn
						onClick={() => {
							if (mintArtworkOpen) {
								setMintArtworkOpen(false);
							} else if (season1Open) {
								setSeason1Open(false);
							} else {
								onClose();
							}
						}}
					></CloseBtn>
				</CloseBtnContainer>
				{mintArtworkOpen ? (
					<MintArtWorkHeading />
				) : season1Open ? (
					<Season1Heading />
				) : (
					<Typography fontWeight="bold" variant="h1">
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
