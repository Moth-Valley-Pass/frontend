import Head from "next/head";
import { useRef, useEffect } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Stack, Box, Button, Typography } from "@mui/material";
import Marquee from "react-fast-marquee";
import { SxProps } from "@mui/material/styles";
import BugsAndImages from "@/src/Bugs";
import Draggable from "react-draggable";
import LayerStones from "@/src/Stones";
import UILayer from "@/src/UILayer";
import "@/src/initWallet";
import MintProvider, { useMint } from "@/src/contexts/MintContext";
const inter = Inter({ subsets: ["latin"] });

const imagesBehindMothValley = [
	"/crooked branch.png",
	"/green pumpkin.png",
	"/rock 7b.png",
];

const imagesInMobileInFrontOfUI = [
	// "/shiny pumpkin.png",
	"/big fire moth.png",
	"/hibiscus.png",
];

function getImagesBehindMothValleyObjStyled(show: boolean, arr?: string[]) {
	const imagesBehindMothValleyObjStyled = {
		img: {
			display: show ? "none" : "block",
		},
	} as any;
	[...(arr || imagesBehindMothValley)].forEach((img) => {
		imagesBehindMothValleyObjStyled[`img[data-src="${img}"]`] = {
			// zIndex: "0 !important",
			display: show ? "block !important" : "none",
			// zIndex: "0 !important",
		};
	});
	console.log(imagesBehindMothValleyObjStyled);
	return imagesBehindMothValleyObjStyled;
}

// function getImagesInFrontOfUIStyled(show: boolean) {
// 	const imagesBehindMothValleyObjStyled = {
// 		img: {
// 			display: show ? "none" : "block",
// 		},
// 	} as any;
// 	imagesBehindMothValley.forEach((img) => {
// 		imagesBehindMothValleyObjStyled[`img[data-src="${img}"]`] = {
// 			// zIndex: "0 !important",
// 			display: show ? "block !important" : "none",
// 			// zIndex: "0 !important",
// 		};
// 	});
// 	console.log(imagesBehindMothValleyObjStyled);
// 	return imagesBehindMothValleyObjStyled;
// }

export default function Home() {
	return (
		<>
			<Head>
				<title>Moth Valley Pass</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Box
				sx={{
					width: "100%",
					height: "100vh",
					overflow: "hidden",
					// ...(imagesBehindMothValley.map(img=>{
					// 	return (...(styleImagesBehindMothValley(img)))
					// })),
					"&>*": {
						height: "100%",
						overflow: "hidden",
						img: {
							userSelect: "none",
						},
					},
				}}
			>
				<MintProvider>
					<BugsAndImages
						sx={{
							zIndex: 1,
							opacity: 1,
							position: "absolute",
							inset: "0",
							display: { lg: "block", xs: "none" },

							...getImagesBehindMothValleyObjStyled(true),
						}}
					></BugsAndImages>
					<LayerStones
						sx={{
							...getImagesBehindMothValleyObjStyled(true),
							zIndex: 1,
							position: "absolute",
							inset: "0",
						}}
					></LayerStones>
					<MothValley
						sx={{ zIndex: 2, position: "absolute", inset: "0" }}
					></MothValley>
					<BugsAndImages
						sx={{
							display: { lg: "block", xs: "none" },
							zIndex: 3,
							opacity: 1,
							position: "absolute",
							inset: "0",
							...getImagesBehindMothValleyObjStyled(false),
						}}
					></BugsAndImages>

					<LayerStones
						sx={{
							...getImagesBehindMothValleyObjStyled(false),
							zIndex: 4,
							position: "absolute",
							inset: "0",
						}}
					></LayerStones>

					<BugsAndImages
						sx={{
							display: { xs: "block", lg: "none" },
							zIndex: 1,
							opacity: 1,
							position: "absolute",
							inset: "0",
							...getImagesBehindMothValleyObjStyled(
								false,
								imagesInMobileInFrontOfUI
							),
						}}
					></BugsAndImages>
					<UILayer
						sx={{ zIndex: 5, position: "absolute", inset: "0" }}
					></UILayer>
					<BugsAndImages
						sx={{
							display: { xs: "block", lg: "none" },
							zIndex: 6,
							opacity: 1,
							position: "absolute",
							pointerEvents: "none",
							inset: "0",
							...getImagesBehindMothValleyObjStyled(
								true,
								imagesInMobileInFrontOfUI
							),
						}}
					></BugsAndImages>
				</MintProvider>
			</Box>
		</>
	);
}

function MothValley({ sx }: { sx?: SxProps }) {
	return (
		<Box
			sx={{
				display: "grid",
				placeItems: "center",
				p: 5,
				position: "relative",
				zIndex: 1,
				height: "100%",
				...sx,
			}}
		>
			<Box sx={{ "&>*": { lineHeight: "0.92" } }}>
				<Typography
					textAlign="center"
					fontWeight={"800"}
					fontFamily="'Hepta Slab', serif"
					variant="h1"
					sx={{
						fontSize: {
							xs: "18vw !important",
							sm: "120px !important",
							md: "150px !important",
							lg: "220px !important",
						},
						textTransform: "uppercase",
					}}
				>
					Moth
				</Typography>
				<Typography
					textAlign="center"
					fontWeight={"800"}
					fontFamily="'Hepta Slab', serif"
					variant="h1"
					sx={{
						fontSize: {
							xs: "18vw !important",
							sm: "120px !important",
							md: "150px !important",
							lg: "220px !important",
						},
						textTransform: "uppercase",
					}}
				>
					Valley
				</Typography>
			</Box>
		</Box>
	);
}
