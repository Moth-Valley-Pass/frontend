import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Stack, Alert, Box, Button, Typography, Link } from "@mui/material";
import Marquee from "react-fast-marquee";
import { SxProps } from "@mui/material/styles";
import Seasons from "./components/Seasons";
import FreeMint from "./components/FreeMint";
import { useConnectWallet } from "@web3-onboard/react";
import { useSetChain } from "@web3-onboard/react";
import { NETWORK_ID, NETWORK_NAME } from "./CONSTANTS";
import { useMint } from "./contexts/MintContext";

export default function UILayer({ sx }: { sx?: SxProps }) {
	const [seasonsOpen, setSeasonsOpen] = useState(false);
	const [freeMintOpen, setfreeMintOpen] = useState(false);
	const [{ wallet }, connect, disconnect] = useConnectWallet();
	const [
		{
			connectedChain, // the current chain the user's wallet is
		},
	] = useSetChain();
	const effect = 1;
	const [{ contract }] = useMint();
	// useEffect(() => {
	// 	console.log(contract);
	// 	contract?.getStage().then((res) => console.log("Stage", res));
	// }, [effect, contract]);
	return (
		<Box sx={{ p: { xs: 2, md: 5 }, height: "100%", ...sx }}>
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
								fontSize: { xs: "35px", md: "64px" },
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

					<Box>
						<Button
							onClick={() => (wallet ? disconnect(wallet) : connect())}
							sx={{
								fontSize: { xs: "20px", md: "33px" },
								px: { xs: 1, md: 2 },
								display: { md: "block", xs: "none" },
							}}
						>
							{wallet ? "Disconnect" : "Connect Wallet"}
						</Button>
						{connectedChain && Number(connectedChain.id) !== NETWORK_ID && (
							<Alert
								sx={{ my: 2, alignSelf: "center", mx: "atuo", width: "90%" }}
								color="error"
							>
								Warning! Not connected to the&nbsp;
								{NETWORK_NAME} network!
							</Alert>
						)}
					</Box>
				</Stack>

				<Box>
					<Button
						onClick={() => (wallet ? disconnect(wallet) : connect())}
						sx={{
							fontSize: { xs: "20px", md: "33px" },
							px: { xs: 1, md: 2 },
							mb: 3,
							display: { xs: "block", md: "none" },
						}}
					>
						{wallet ? "Disconnect" : "Connect Wallet"}
					</Button>

					<Stack
						sx={{
							button: {
								fontSize: { xs: "20px", md: "33px" },
								px: { md: 2, xs: 1 },
							},
						}}
						gap={{ xs: 0.5, md: 2 }}
						alignItems="start"
					>
						<Link
							sx={{ textDecoration: "none" }}
							href="https://mothvalley.blog"
						>
							<Button>Blog</Button>
						</Link>
						<Button onClick={() => setSeasonsOpen(true)}>Season 1</Button>
						<Button onClick={() => setfreeMintOpen(true)}>Free Mint</Button>
					</Stack>
					<Box
						sx={{
							fontSize: { xs: "20px", md: "30px" },
							marginTop: { xs: "15px", md: "40px" },
						}}
					>
						<Marquee gradientWidth={0} delay={0.5}>
							&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;Mar 31st, 2023 - 875 Community
							Members -Season 1: Game of Chance - 91 Unique Artworks - Mar
						</Marquee>
					</Box>
				</Box>
			</Stack>
		</Box>
	);
}
