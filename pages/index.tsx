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
					<MothValley sx={{ position: "absolute", inset: "0" }}></MothValley>
					<BugsAndImages
						sx={{ opacity: 1, position: "absolute", inset: "0" }}
					></BugsAndImages>

					<LayerStones sx={{ position: "absolute", inset: "0" }}></LayerStones>
					<UILayer sx={{ position: "absolute", inset: "0" }}></UILayer>
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
				height: "100%",
				...sx,
			}}
		>
			<Typography
				textAlign="center"
				fontWeight={"800"}
				fontFamily="'Hepta Slab', serif"
				variant="h1"
				sx={{
					fontSize: {
						xs: "50px !important",
						sm: "80px !important",
						md: "200px !important",
					},
					textTransform: "uppercase",
				}}
			>
				Moth <br /> Valley
			</Typography>
		</Box>
	);
}
