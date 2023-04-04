import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useMint } from "../contexts/MintContext";
import { ethers } from "ethers";
import { CONTRACT_ADDR } from "../CONSTANTS";
import { ABI } from "../data/abi";
import MintStatus from "./MintStatus";
import { useConnectWallet } from "@web3-onboard/react";
import styleWeb3Account from "../utils/styleWeb3";

export default function MintArtwork() {
	const [minted, setMinted] = useState(false);
	const [mintData, setMintData] = useMint();
	const [{ wallet }, connect, disconnect] = useConnectWallet();

	async function publicClaim(quantity = 1) {
		const state = { ...mintData };

		// const stateEthers = new ethers.BrowserProvider(
		// 	(window as any).ethereum,
		// 	"any"
		// );

		const stateEthers = mintData.ethers;
		if (!stateEthers) return alert("No ethers");

		setMintData((s) => ({
			...s,
			isLoading: true,
			loadingText:
				"Sending transaction to the blockchain. please check your wallet for confirmation",
			txHash: null,
			boxError: false,
			errorText: null,
			ethers: stateEthers,
		}));

		//I thiink on the quantity you pass always 1)

		await stateEthers.send("eth_requestAccounts", []);
		const signer = await stateEthers.getSigner();
		const contract = new ethers.Contract(CONTRACT_ADDR, ABI, signer);

		setMintData((s) => ({ ...s, signer, contract }));

		// here you need to initialize the contract with the signer from the wallet connect... otherwise you can just do READ operations
		// state.isLoading = true;
		// state.loadingText =
		// 	"Sending transaction to the blockchain. please check your wallet for confirmation";
		try {
			const tx = await contract.publicClaim(quantity);
			console.log({ tx });
			if (tx.hash) {
				await onTxHashLogic(tx.hash, stateEthers);
			}
		} catch (err: any) {
			const isLoading = false;
			let errorText = "";
			if (err.message.includes("denied")) {
				errorText = "transaction canceled";
				return;
			} else if (err.message.includes("insufficient funds")) {
				errorText = "you do not have enough ETH for this transaction";
			} else {
				errorText = err.message;
			}

			const boxError = true;
			console.log({ errorText });
			setMintData((s) => ({ ...s, boxError, isLoading, errorText }));
		}
	}

	async function onTxHashLogic(txHash: string, ethers: ethers.BrowserProvider) {
		// const state = mintData as any;

		const loadingText =
			"transaction submitted successfully. waiting for it to be mined...";
		const isLoading = true;

		setMintData((s) => ({ ...s, loadingText, isLoading }));

		const sleep = (milliseconds: number) => {
			return new Promise((resolve) => setTimeout(resolve, milliseconds));
		};
		await sleep(3000);
		await ethers.waitForTransaction(txHash);

		try {
			let receipt = await ethers.getTransactionReceipt(txHash);
			if (receipt === null) {
				console.log("Failed to get tx receipt....");
				await sleep(3000);
			}
			console.log("Success", receipt, txHash);
			const isLoading = false;
			setMintData((s) => ({ ...s, isLoading, txHash }));
		} catch (er: any) {
			const isLoading = false;
			setMintData((s) => ({
				...s,
				isLoading,
				loadingText: "",
				errorText: "Receipt error: " + er.message,
			}));

			console.log("Receipt error:", er);
		}
	}

	return (
		<Box sx={{ maxWidth: "100%" }}>
			<Stack
				justifyContent={"space-between"}
				alignItems={{ xs: "center", lg: "start" }}
				gap={{ xs: 2, md: 5 }}
				sx={{
					".img-container": {
						position: "relative",
						width: 264,
						height: 393,
						maxWidth: "100%",
					},
					".img-container.minted": {
						width: 410,
						height: 410,
					},
				}}
				direction={{ xs: "column", lg: "row" }}
			>
				<Box className="img-container">
					<Image alt="card fly" src="/red fly card.svg" fill></Image>
				</Box>
				<Box className="img-container">
					<Image alt="card fly" src="/black fly card.svg" fill></Image>
				</Box>
				<Typography sx={{ alignSelf: "center" }} variant="h1">
					=
				</Typography>
				<Box sx={{ maxWidth: "100%" }}>
					{minted ? (
						<Box className="img-container minted">
							<Image alt="card fly" src="/fly gown.png" fill></Image>
						</Box>
					) : (
						<Box
							className="img-container minted"
							sx={{ backgroundColor: "grey" }}
						></Box>
					)}
				</Box>
			</Stack>
			<Stack
				alignItems={"center"}
				justifyContent="space-between"
				gap={2}
				direction={{ lg: "row" }}
			>
				<Typography
					textAlign={{ lg: "start", xs: "center" }}
					sx={{ mt: 2 }}
					fontWeight="bold"
					variant="h6"
				>
					{minted ? "Burn success" : "					Click to select cards to burn"}
				</Typography>
				<Box>
					{minted ? (
						<>
							{" "}
							<Typography
								sx={{ textAlign: { lg: "start", xs: "center" } }}
								fontWeight="bold"
								mt={3}
								variant="h6"
							>
								You have revealed an artwork!
							</Typography>
							<Typography
								sx={{ textAlign: { lg: "start", xs: "center" } }}
								fontWeight="bold"
								variant="h6"
							>
								Click <Link href="https://google.com"> here </Link> to view.
							</Typography>
						</>
					) : (
						<Button
							sx={{ fontSize: "20px", my: 2, width: "410px" }}
							onClick={() => {
								if (wallet) {
									publicClaim();
									setMinted(true);
								} else {
									connect();
									styleWeb3Account();
								}
							}}
						>
							{wallet ? "Mint" : "Connect wallet"}
						</Button>
					)}
				</Box>
			</Stack>

			{wallet && <MintStatus />}
		</Box>
	);
}
export function MintArtWorkHeading() {
	return (
		<Box sx={{ maxWidth: "100%", overflow: "auto" }}>
			<Stack
				sx={{
					img: {
						width: { xs: 40, lg: 100 },
						height: { xs: 40, lg: 100 },
					},
					width: "max-content",
				}}
				alignItems="center"
				gap={{ xs: 2, md: 5 }}
				direction="row"
			>
				<Image
					style={{ objectFit: "contain" }}
					width={100}
					height={100}
					alt="a of spades"
					src="/Folder.svg"
				></Image>
				<Typography fontWeight="bold" variant="h1">
					<i> Season 1:</i> Mint Artwork
				</Typography>
			</Stack>
		</Box>
	);
}
