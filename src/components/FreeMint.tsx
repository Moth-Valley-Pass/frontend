import {
	Dialog,
	Link,
	Box,
	Button,
	Stack,
	Divider,
	Typography,
	IconButton,
	TextField,
	Alert,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import CloseBtn, { CloseBtnContainer } from "./CloseBtn";
import { GetWhitelistEligibility, isWhitelisted } from "../utils/isWhitelisted";
import { useConnectWallet } from "@web3-onboard/react";
import useContractFunctions from "../hooks/useContractFunctions";
import MintStatus from "./MintStatus";
import styleWeb3Account from "../utils/styleWeb3";
import { useMint } from "../contexts/MintContext";
import { EXPLORER_URI } from "../CONSTANTS";

export default function FreeMint({
	open,
	onClose,
}: {
	open: boolean;
	onClose: () => any;
}) {
	const [checkingEligibility, setCheckingEligibility] = useState(false);
	const [showMint, setShowMint] = useState(false);
	const [{ wallet }, connect] = useConnectWallet();
	const { mintNft } = useContractFunctions();
	const [mintData] = useMint();
	return (
		<Dialog maxWidth={false} open={open} onClose={onClose}>
			<Box
				sx={{ width: "min(1495px, 100%)", mx: "auto" }}
				px={{ xs: 3, md: 15 }}
				py={{ xs: 2, md: 3 }}
			>
				<CloseBtnContainer>
					<CloseBtn
						onClick={() => {
							onClose();
							// timeout because close anim takes soem time
							setTimeout(() => {
								setCheckingEligibility(false);
								setShowMint(false);
							}, 500);
						}}
					></CloseBtn>
				</CloseBtnContainer>
				<Box sx={{ overflow: "auto", pr: 8 }}>
					<Stack
						alignItems="center"
						direction="row"
						sx={{
							width: "max-content",
							overflowY: "hidden",
						}}
					>
						<Typography
							sx={{
								// whiteSpace: "nowrap",
								fontSize: { xs: "30px", md: "3rem" },
							}}
							fontWeight={"bold"}
							variant="h3"
						>
							Mint a Moth Valley Pass
						</Typography>
					</Stack>
				</Box>
				<Divider sx={{ border: "2px solid black", my: 4 }}></Divider>
				{checkingEligibility ? (
					<>
						<EligibilityOld></EligibilityOld>
						{/* <EligibilityMint /> */}
					</>
				) : showMint ? (
					<>
						mintData.txHash && !mintData.errorText && <Mint></Mint>
						{/* <Mint></Mint> */}
					</>
				) : (
					<Stack
						justifyContent="center"
						gap={7}
						direction={{ xs: "column", lg: "row" }}
					>
						<Stack sx={{ img: {} }} gap={4} alignItems="center">
							<Box
								sx={{
									width: { xs: 280, lg: 445 },
									aspectRatio: "1",
									position: "relative",
									maxWidth: "100%",
								}}
							>
								<Image
									fill
									alt="Green question mark"
									src={"/green question mark.png"}
								></Image>
							</Box>
							<Typography
								sx={{
									fontSize: { lg: "2.125rem", xs: "25px" },
									textAlign: { md: "start", xs: "center" },
								}}
								fontWeight="bold"
								variant="h4"
							>
								1 Mint per wallet
							</Typography>
						</Stack>
						<Stack
							alignSelf="stretch"
							justifyContent="center"
							gap={5}
							alignItems="center"
							sx={{ "&>*": { maxWidth: "100%" } }}
						>
							{isItApril30At12pmESTYet() && (
								<Button
									size="large"
									sx={{
										fontSize: { xs: 30, md: "50px" },
										px: { xs: 5, lg: 13 },
										py: { xs: 0, lg: 3 },
									}}
									onClick={() => {
										if (wallet) {
											mintNft();
											setShowMint(true);
										} else {
											connect();
											styleWeb3Account();
										}
									}}
								>
									{wallet ? "Mint" : "Connect Wallet"}
								</Button>
							)}
							<Button
								size="large"
								sx={{
									fontSize: { xs: 30, md: "45px" },
									px: { xs: 5, lg: 13 },
									py: { xs: 0, lg: 3 },
								}}
								onClick={() => setCheckingEligibility(true)}
							>
								Eligibility
							</Button>
						</Stack>
					</Stack>
				)}
				{wallet && (
					<Box my={2}>
						<MintStatus />
					</Box>
				)}
			</Box>
		</Dialog>
	);
}

function EligibilityOld() {
	const [checkedEligibility, setCheckedEligibility] = useState(false);
	const [eligible, setEligible] = useState(false);
	const [{ wallet }, connect, disconnect] = useConnectWallet();

	console.log(wallet);

	const [walletAddress, setWalletAddress] = useState("");
	// const eligible = Boolean(walletAddress);

	return (
		<Box
			sx={{ position: "relative", whiteSpace: "nowrap", overflow: "hidden" }}
		>
			{/* <Alert severity="error">Whitelist not implemented yet</Alert> */}

			<Box
				sx={{
					"&>*": { fontSize: { xs: "25px !important", md: "3rem !important" } },
				}}
			>
				<Typography fontWeight="bold" variant="h3">
					Check if you are whitelisted.
				</Typography>
				<Typography fontWeight="bold" variant="h3">
					Enter wallet address.
				</Typography>
			</Box>
			{wallet && (
				<Box sx={{ mt: 2 }}>
					{wallet.accounts.map((account) => {
						return (
							<Typography key={account.address}>
								<strong>{account.address}</strong>:{" "}
								<GetWhitelistEligibility addr={account.address} />
							</Typography>
						);
					})}
				</Box>
			)}
			<form
				onSubmit={(e) => {
					e.preventDefault();
					setCheckedEligibility(true);
					setEligible(isWhitelisted(walletAddress));
				}}
			>
				<TextField
					sx={{ my: 3, width: "100%" }}
					value={walletAddress}
					onChange={(e) => {
						setWalletAddress(e.target.value);
						setCheckedEligibility(false);
					}}
				></TextField>
			</form>
			{checkedEligibility && (
				<Typography
					sx={{
						position: { lg: "absolute" },
						whiteSpace: "normal",
						overflow: "hidden",
						wordWrap: "break-word",
					}}
					variant="h5"
				>
					<GetWhitelistEligibility
						addr={walletAddress}
					></GetWhitelistEligibility>
				</Typography>
			)}
			<Button
				sx={{
					mx: "auto",
					fontSize: { xs: 30, md: 45 },
					px: { md: 13, xs: 5 },
					display: "block",
					mt: { xs: 5, lg: 10 },
				}}
				onClick={() => {
					setCheckedEligibility(true);
					setEligible(isWhitelisted(walletAddress));
				}}
			>
				Check
			</Button>
		</Box>
	);
}

function Mint() {
	const [poapClaimed, setPoapClaimed] = useState(false);
	const [mintData] = useMint();
	useEffect(() => {
		() => {
			setPoapClaimed(false);
		};
	}, []);
	return (
		<Stack
			justifyContent="center"
			alignItems="center"
			gap={5}
			direction={{ xs: "column", lg: "row" }}
		>
			<Stack gap={3} alignItems={{ lg: "start", xs: "center" }}>
				<Box
					sx={{
						position: "relative",
						width: { md: 300, lg: 485 },
						maxWidth: "100%",
						alignSelf: "stretch",

						aspectRatio: "1",
					}}
				>
					<Image
						fill
						src={
							poapClaimed
								? "/monthly valley roadmap.png"
								: // : "/brown fly green bg card.png"
								  "/mint successfull.png"
						}
						alt="mint card"
					></Image>
				</Box>
				<Typography
					sx={{ fontSize: { lg: "2.125rem", xs: "25px" } }}
					variant="h4"
					textAlign="center"
					fontWeight="bold"
				>
					{" "}
					1 mint per wallet
				</Typography>
			</Stack>
			<Box
				sx={{
					h4: {
						fontSize: { xs: "25px", md: "2.125rem" },
						textAlign: { xs: "center", lg: "start" },
					},
				}}
			>
				{poapClaimed ? (
					<Stack
						justifyContent="center"
						alignSelf="center"
						alignItems={"center"}
						sx={{ "*": { fontWeight: "bold" } }}
					>
						<Typography variant="h4">Successful claim POAP 1/7.</Typography>
						<Typography variant="h4">
							Click <Link href={"https://google.com"}> here</Link> to view
						</Typography>
					</Stack>
				) : (
					<Stack
						sx={{ "*": { fontWeight: "bold !important" } }}
						gap={{ md: 10, xs: 3 }}
						justifyContent="space-evenly"
					>
						<Stack gap={2}>
							<Typography variant="h4">Mint successful</Typography>
							<Typography variant="h4">
								Click{" "}
								<Link
									sx={{ fontStyle: "italic", color: "blue" }}
									href={`${EXPLORER_URI}/tx/${mintData.txHash}`}
								>
									{" "}
									here
								</Link>{" "}
								to view
							</Typography>
						</Stack>

						<Button
							onClick={tweet}
							sx={{
								alignSelf: "center",
								fontSize: { xs: "20px", lg: "30px" },
								px: { lg: 5, xs: 2 },

								// width: "482px",
								// height: "82px",
							}}
						>
							Share on twitter
						</Button>
						{/* <Typography variant="h4">Enter address to claim a POAP.</Typography>
						<TextField></TextField>
						<Button
							sx={{
								alignSelf: "center",
								fontSize: { xs: "25px", md: "40px" },
								px: { md: 13, xs: 3 },

								// width: "482px",
								// height: "82px",
							}}
							onClick={() => setPoapClaimed(true)}
						>
							Claim POAP
						</Button> */}
					</Stack>
				)}
			</Box>
		</Stack>
	);
}

function tweet(): void {
	// Get the current page URL and title
	const url = encodeURIComponent(window.location.href);
	const title = encodeURIComponent(document.title);

	// Get the image URL
	// const imageUrl =
	// 	"https://static.toiimg.com/thumb/msid-58515713,width-748,height-499,resizemode=4,imgsize-145905/Nice-in-pictures.jpg";
	const imageUrl = "";

	// Open the Twitter sharing window with the current page URL, title, and image URL

	let tweetContent = `
	"Art is a universal language." Just minted my @moth_valley Genesis Pass 🦋 
	91 emerging artists take part in Season 1, get your passes here if you don't want to miss out: https://opensea.io/collection/moth-valley-pass ${imageUrl}`;

	window.open(`https://twitter.com/intent/tweet?text=${tweetContent}`);
}
function isItApril30At12pmESTYet(): boolean {
	return true;
	const now = new Date();
	// Create a Date object for the current time in EST
	const est = new Date(
		now.toLocaleString("en-US", { timeZone: "America/New_York" })
	);

	// Check if it is April 30th and 12PM or later
	return est.getMonth() >= 3 && est.getDate() >= 30 && est.getHours() >= 12;
}
