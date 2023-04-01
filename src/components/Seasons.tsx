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
import Season1 from "./Season1";

export default function Seasons({
	open,
	onClose,
}: {
	open: boolean;
	onClose: () => any;
}) {
	const [season1Open, setSeason1Open] = useState(false);
	return (
		<Dialog maxWidth={false} open={open} onClose={onClose}>
			<Box
				sx={{ width: "1200px", height: "800px", position: "relative" }}
				p={5}
			>
				<Box sx={{ position: "absolute", top: 50, right: 50 }}>
					{season1Open ? (
						<IconButton onClick={() => setSeason1Open(false)}>
							<Image
								width={50}
								height={50}
								src="/close.svg"
								alt="Close btn"
							></Image>
						</IconButton>
					) : (
						<IconButton onClick={onClose}>
							<Image
								width={50}
								height={50}
								src="/close.svg"
								alt="Close btn"
							></Image>
						</IconButton>
					)}
				</Box>

				<Typography variant="h1">Seasons</Typography>
				<Divider></Divider>
				{/* home */}
				{season1Open ? (
					<Season1 />
				) : (
					<Stack
						gap={2}
						p={3}
						justifyContent={"center"}
						margin={"auto"}
						direction="row"
					>
						<Stack alignItems="center">
							<Image
								width={150}
								height={150}
								onClick={() => setSeason1Open(true)}
								src="/Folder.svg"
								alt="Close btn"
							></Image>
							<Typography>Season 1</Typography>
						</Stack>
						<Stack alignItems="center">
							<Image
								width={150}
								height={150}
								src="/FolderLock.svg"
								alt="Close btn"
							></Image>
							<Typography>Season 2</Typography>
						</Stack>
						<Stack alignItems="center">
							<Image
								width={150}
								height={150}
								src="/FolderLock.svg"
								alt="Close btn"
							></Image>
							<Typography>Season 3</Typography>
						</Stack>
					</Stack>
				)}
			</Box>
		</Dialog>
	);
}
