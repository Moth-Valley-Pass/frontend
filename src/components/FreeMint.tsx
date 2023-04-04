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
import { isWhitelisted } from "../utils/isWhitelisted";

export default function FreeMint({
	open,
	onClose,
}: {
	open: boolean;
	onClose: () => any;
}) {
	const [checkingEligibility, setCheckingEligibility] = useState(false);
	const [showMint, setShowMint] = useState(false);
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
							// if (checkingEligibility) {
							// 	setCheckingEligibility(false);
							// } else if (showMint) {
							// 	setShowMint(false);
							// } else {
							// 	onClose();
							// }
							onClose();
							setCheckingEligibility(false);
							setShowMint(false);
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
					<Eligibility></Eligibility>
				) : showMint ? (
					<Mint></Mint>
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
							{/* <Button
								size="large"
								sx={{
									fontSize: { xs: 30, md: "50px" },
									px: { xs: 5, lg: 13 },
									py: { xs: 0, lg: 3 },
								}}
								onClick={() => setShowMint(true)}
							>
								Mint
							</Button> */}
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
			</Box>
		</Dialog>
	);
}

function Eligibility() {
	const [checkedEligibility, setCheckedEligibility] = useState(false);
	const [eligible, setEligible] = useState(false);
	const [walletAddress, setWalletAddress] = useState("");
	// const eligible = Boolean(walletAddress);
	return (
		<Box>
			<Alert severity="error">Whitelist not implemented yet</Alert>

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
					}}
				></TextField>
			</form>
			{checkedEligibility &&
				(eligible ? (
					<Typography variant="h5">
						You are <i> whitelisted.</i>
					</Typography>
				) : (
					<Typography variant="h5">
						You are <i>not whitelisted.</i>
					</Typography>
				))}
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
								: "/brown fly green bg card.png"
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
							Click <Link href="https://google.com"> here</Link> to view
						</Typography>
					</Stack>
				) : (
					<Stack sx={{ "*": { fontWeight: "bold !important" } }} gap={2}>
						<Typography variant="h4">Mint successful</Typography>
						<Typography variant="h4">
							Click <Link href="https://google.com"> here</Link> to view
						</Typography>
						<Typography variant="h4">Enter address to claim a POAP.</Typography>
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
						</Button>
					</Stack>
				)}
			</Box>
		</Stack>
	);
}
