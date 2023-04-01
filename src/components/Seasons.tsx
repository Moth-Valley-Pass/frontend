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
				<Box sx={{ position: "absolute", top: 50, right: 50 }}>
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
						gap={10}
						p={3}
						height="550px"
						justifyContent={"center"}
						alignItems={"center"}
						margin={"auto"}
						direction="row"
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
