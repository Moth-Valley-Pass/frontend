import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function MintArtwork() {
	const [minted, setMinted] = useState(false);
	return (
		<Box>
			<Stack alignItems={"start"} gap={5} direction="row">
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
						<Typography>You have revealed an artwork!</Typography>
					) : (
						<Button onClick={() => setMinted(true)}>Mint</Button>
					)}
					<Typography>
						Click <Link href="https://google.com"> here </Link> to view.
					</Typography>
				</Box>
			</Stack>
			{minted ? (
				<Typography>Burn success.</Typography>
			) : (
				<Typography>Click to select cards to burn</Typography>
			)}
		</Box>
	);
}
