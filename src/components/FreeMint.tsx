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
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import CloseBtn from "./CloseBtn";

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
				sx={{ width: "min(1495px, 100%)", mx: "auto", height: { md: "850px" } }}
				px={{ xs: 3, md: 15 }}
				py={5}
			>
				<Box sx={{ position: "absolute", top: 50, right: 50 }}>
					<CloseBtn
						onClick={() => {
							if (checkingEligibility) {
								setCheckingEligibility(false);
							} else if (showMint) {
								setShowMint(false);
							} else {
								onClose();
							}
						}}
					></CloseBtn>
				</Box>

				<Box sx={{ maxWidth: "90%", width: "max-content", overflow: "auto" }}>
					<Typography
						sx={{
							whiteSpace: "nowrap",
							// overflow: "auto",
							fontSize: { xs: "30px", md: "3rem" },
						}}
						fontWeight={"bold"}
						variant="h3"
					>
						Mint a Moth Valley Pass
					</Typography>
				</Box>
				<Divider sx={{ border: "2px solid black", my: 5 }}></Divider>
				{checkingEligibility ? (
					<Eligibility></Eligibility>
				) : showMint ? (
					<Mint></Mint>
				) : (
					<Stack
						justifyContent="center"
						gap={10}
						direction={{ xs: "column", lg: "row" }}
					>
						<Stack sx={{ img: {} }} gap={4} alignItems="center">
							<Box
								sx={{
									width: { xs: 300, lg: 485 },
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
								sx={{ textAlign: { md: "start", xs: "center" } }}
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
							<Button
								size="large"
								sx={{
									fontSize: { xs: 30, md: "50px" },
									px: { xs: 5, lg: 13 },
									py: { xs: 0, lg: 3 },
								}}
								onClick={() => setShowMint(true)}
							>
								Mint
							</Button>
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
		<Box p={3}>
			<Typography fontWeight="bold" variant="h3">
				Check if you are whitelisted.
			</Typography>
			<Typography fontWeight="bold" variant="h3">
				Enter wallet address.
			</Typography>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					setCheckedEligibility(true);
					setEligible(Boolean(walletAddress));
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
					fontSize: 45,
					width: 333,
					height: 94,
					display: "block",
					mt: 10,
				}}
				onClick={() => {
					setCheckedEligibility(true);
					setEligible(Boolean(walletAddress));
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
		<Box>
			<Stack justifyContent="center" gap={5} direction="row">
				<Stack gap={3}>
					{poapClaimed ? (
						<Image
							width={485}
							height={485}
							src="/monthly valley roadmap.png"
							alt="mint card"
						></Image>
					) : (
						<Image
							width={485}
							height={485}
							src="/brown fly green bg card.png"
							alt="mint card"
						></Image>
					)}
					<Typography variant="h4" textAlign="center" fontWeight="bold">
						{" "}
						1 mint per wallet
					</Typography>
				</Stack>
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
					<Stack sx={{ "*": { fontWeight: "bold" } }} gap={1}>
						<Typography variant="h4">Mint successful</Typography>
						<Typography variant="h4">
							Click <Link href="https://google.com"> here</Link> to view
						</Typography>
						<Typography variant="h4">Enter address to claim a POAP.</Typography>
						<TextField></TextField>
						<Button
							sx={{
								alignSelf: "center",
								fontSize: "40px",
								width: "482px",
								height: "82px",
							}}
							onClick={() => setPoapClaimed(true)}
						>
							Claim POAP
						</Button>
					</Stack>
				)}
			</Stack>
		</Box>
	);
}
