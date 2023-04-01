import Head from "next/head";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Stack, Box, Button, Typography, Link } from "@mui/material";
import Marquee from "react-fast-marquee";
import { SxProps } from "@mui/material/styles";
import Seasons from "./components/Seasons";
import FreeMint from "./components/FreeMint";

export default function UILayer({ sx }: { sx?: SxProps }) {
	const [seasonsOpen, setSeasonsOpen] = useState(false);
	const [freeMintOpen, setfreeMintOpen] = useState(false);

	return (
		<Box sx={{ p: 5, height: "100%", ...sx }}>
			<Seasons open={seasonsOpen} onClose={() => setSeasonsOpen(false)} />
			<FreeMint open={freeMintOpen} onClose={() => setfreeMintOpen(false)} />
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
							<Link href="https://twitter.com/moth_valley">
								<Image
									width={35}
									height={35}
									style={{ objectFit: "contain" }}
									src="/twitter icon.png"
									alt="twitter"
								></Image>
							</Link>
							<Link href="https://www.instagram.com/mothvalley.eth">
								<Image
									width={35}
									style={{ objectFit: "contain" }}
									height={35}
									src="/insta btn.png"
									alt="instagram"
								></Image>
							</Link>
							<Link href="https://discord.gg/mothvalley">
								<Image
									width={35}
									style={{ objectFit: "contain" }}
									height={35}
									src="/discord icon.png"
									alt="discord"
								></Image>
							</Link>
						</Stack>
					</Box>

					<Button sx={{ fontSize: "33px", px: 2 }}>Connect Wallet</Button>
				</Stack>

				<Box>
					<Stack gap={2} alignItems="start">
						<Link
							sx={{ textDecoration: "none" }}
							href="https://mothvalley.blog"
						>
							<Button sx={{ fontSize: "33px", px: 2 }}>Blog</Button>
						</Link>
						<Button
							sx={{ fontSize: "33px", px: 2 }}
							onClick={() => setSeasonsOpen(true)}
						>
							Season 1
						</Button>
						<Button
							sx={{ fontSize: "33px", px: 2 }}
							onClick={() => setfreeMintOpen(true)}
						>
							Free Mint
						</Button>
					</Stack>
					<Marquee
						style={{ fontSize: "30px", marginTop: "40px" }}
						gradientWidth={0}
						delay={0.5}
					>
						&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;Mar 31st, 2023 - 875 Community
						Members -Season 1: Game of Chance - 91 Unique Artworks - Mar
					</Marquee>
				</Box>
			</Stack>
		</Box>
	);
}
