import { Stack, Box, Dialog, Divider, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

export default function Seasons({
	open,
	onClose,
}: {
	open: boolean;
	onClose: () => any;
}) {
	return (
		<Dialog maxWidth={false} open={open} onClose={onClose}>
			<Box sx={{ width: "800px", height: "600px", position: "relative" }} p={5}>
				<Image
					onClick={onClose}
					style={{ position: "absolute", top: 50, right: 50 }}
					width={50}
					height={50}
					src="/close.svg"
					alt="Close btn"
				></Image>
				<Typography variant="h1">Seasons</Typography>
				<Divider></Divider>
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
			</Box>
		</Dialog>
	);
}
