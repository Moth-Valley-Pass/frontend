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
			<Box px={15} py={5}>
				<Box sx={{ position: "absolute", top: 50, right: 50 }}>
					{
						<IconButton
							onClick={() => {
								if (checkingEligibility) {
									setCheckingEligibility(false);
								} else if (showMint) {
									setShowMint(false);
								} else {
									onClose();
								}
							}}
						>
							<Image
								width={50}
								height={50}
								src="/close.svg"
								alt="Close btn"
							></Image>
						</IconButton>
					}
				</Box>
				<Typography variant="h3">Mint a Moth Valley Pass</Typography>
				<Divider sx={{ my: 5 }}></Divider>
				{checkingEligibility ? (
					<Eligibility></Eligibility>
				) : showMint ? (
					<Mint></Mint>
				) : (
					<Stack gap={10} direction="row">
						<Stack alignItems="center">
							<Image
								width={485}
								height={485}
								alt="Green question mark"
								src={"/green question mark.png"}
							></Image>
							<Typography variant="h5">1 Mint per wallet</Typography>
						</Stack>
						<Stack
							alignSelf="stretch"
							justifyContent="center"
							gap={5}
							alignItems="center"
						>
							<Button onClick={() => setShowMint(true)}>Mint</Button>
							<Button onClick={() => setCheckingEligibility(true)}>
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
			<Typography variant="h4">Check if you are whitelisted.</Typography>
			<Typography variant="h4">Enter wallet address.</Typography>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					setCheckedEligibility(true);
					setEligible(Boolean(walletAddress));
				}}
			>
				<TextField
					value={walletAddress}
					onChange={(e) => {
						setWalletAddress(e.target.value);
					}}
				></TextField>
			</form>
			{checkedEligibility &&
				(eligible ? (
					<Typography variant="h6">You are whitelisted.</Typography>
				) : (
					<Typography variant="h6">You are not whitelisted.</Typography>
				))}
			<Button
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
			<Stack gap={5} direction="row">
				<Stack>
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
					<Typography>1 mint per wallet</Typography>
				</Stack>
				{poapClaimed ? (
					<Stack>
						<Typography>Successful claim POAP 1/7.</Typography>
						<Typography>
							Click <Link href="https://google.com"> here</Link> to view
						</Typography>
					</Stack>
				) : (
					<Stack gap={1}>
						<Typography>Mint successful</Typography>
						<Typography>
							Click <Link href="https://google.com"> here</Link> to view
						</Typography>
						<Typography>Enter address to claim a POAP.</Typography>
						<TextField></TextField>
						<Button onClick={() => setPoapClaimed(true)}>Claim POAP</Button>
					</Stack>
				)}
			</Stack>
		</Box>
	);
}
