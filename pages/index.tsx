import Head from "next/head";
import { useRef, useEffect } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Stack, Box, Button, Typography } from "@mui/material";
import Marquee from "react-fast-marquee";
import { SxProps } from "@mui/material/styles";
import BugsAndImages from "@/src/Layer2";
import Draggable from "react-draggable";
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
					},
				}}
			>
				<MothValley sx={{ position: "absolute", inset: "0" }}></MothValley>
				{/* <BugsAndImages
					sx={{ position: "absolute", inset: "0" }}
				></BugsAndImages> */}

				{/* <Layer1 sx={{ position: "absolute", inset: "0" }}></Layer1>
				<LayerStones sx={{ position: "absolute", inset: "0" }}></LayerStones> */}
			</Box>
		</>
	);
}

function Layer1({ sx }: { sx?: SxProps }) {
	return (
		<Box sx={{ p: 5, height: "100%", ...sx }}>
			<Stack sx={{ height: "100%", justifyContent: "space-between" }}>
				<Stack
					direction="row"
					justifyContent="space-between"
					alignItems="start"
				>
					<Box>
						<Typography
							sx={{
								fontWeight: "bold",
								fontSize: "64px",
								textTransform: "uppercase",
							}}
						>
							APRIL 30th
						</Typography>
						<Stack gap={3} direction="row">
							<Image
								width={35}
								height={35}
								style={{ objectFit: "contain" }}
								src="/twitter icon.png"
								alt="twitter"
							></Image>
							<Image
								width={35}
								style={{ objectFit: "contain" }}
								height={35}
								src="/insta btn.png"
								alt="instagram"
							></Image>
							<Image
								width={35}
								style={{ objectFit: "contain" }}
								height={35}
								src="/discord icon.png"
								alt="discord"
							></Image>
						</Stack>
					</Box>

					<Button>Connect Wallet</Button>
				</Stack>

				<Box>
					<Stack gap={2} alignItems="start">
						<Button>Blog</Button>
						<Button>Season 1</Button>
						<Button>Free Mint</Button>
					</Stack>
					<Marquee style={{ marginTop: "20px" }} gradientWidth={0} delay={0.5}>
						&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;Mar 31st, 2023 - 875 Community
						Members -Season 1: Game of Chance - 91 Unique Artworks - Mar
					</Marquee>
				</Box>
			</Stack>
		</Box>
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
				fontWeight={"bold"}
				variant="h1"
				sx={{ fontSize: "200px", textTransform: "uppercase" }}
			>
				Moth <br /> Valley
			</Typography>
		</Box>
	);
}
function LayerStones({ sx }: { sx?: SxProps }) {
	const boxRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		boxRef.current!.querySelectorAll("img").forEach((img) => {
			img.draggable = false;
		});
	});

	return (
		<Box
			ref={boxRef}
			sx={{
				height: "100%",
				...sx,
				"&>*": {
					position: "absolute",
				},
				"*:img": {
					draggable: "false",
				},
			}}
		>
			<Image
				style={{ top: 70, left: 210 }}
				width={40}
				height={40}
				alt="rock"
				src="/rock 1.png"
			></Image>
			<Box sx={{ top: 260, left: 190 }}>
				<Image width={40} height={40} alt="rock" src="/rock 2a.png"></Image>
				<Image width={40} height={40} alt="rock" src="/rock 2b.png"></Image>
				<br />
				<Image
					style={{ visibility: "hidden" }}
					width={40}
					height={40}
					alt="hidden"
					src="/rock 2c.png"
				></Image>
				<Image width={40} height={40} alt="rock" src="/rock 2c.png"></Image>
			</Box>
			<Box sx={{ top: 420, left: 250 }}>
				<Image width={40} height={40} alt="rock" src="/rock 3.png"></Image>
			</Box>
			<Box sx={{ top: 490, left: 310 }}>
				<Image width={40} height={40} alt="rock" src="/rock 4a.png"></Image>
				<Image width={40} height={40} alt="rock" src="/rock 4b.png"></Image>
			</Box>
			<Box sx={{ left: 1000, top: 500 }}>
				<Image width={40} height={40} alt="rock" src="/rock 5.png"></Image>
			</Box>
			<Box sx={{ top: 800, left: 1500 }}>
				<Image width={40} height={40} alt="rock" src="/rock 6a.png"></Image>
				<Image width={40} height={40} alt="rock" src="/rock 6b.png"></Image>
			</Box>
			<Box sx={{ top: 500, left: 1500 }}>
				<Image width={40} height={40} alt="rock" src="/rock 7a.png"></Image>
				<Image width={40} height={40} alt="rock" src="/rock 7b.png"></Image>
				<Image width={40} height={40} alt="rock" src="/rock 7c.png"></Image>
				<Image width={40} height={40} alt="rock" src="/rock 7d.png"></Image>
			</Box>
			<Draggable axis="both">
				<Box sx={{ backgroundColor: "red", top: 200, left: 800 }}>
					<Image width={40} height={40} alt="rock" src="/rock 8a.png"></Image>
					<Image width={40} height={40} alt="rock" src="/rock 8b.png"></Image>
					<Image width={40} height={40} alt="rock" src="/rock 8c.png"></Image>
				</Box>
			</Draggable>
		</Box>
	);
}
