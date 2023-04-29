import React from "react";
import { useMint } from "../contexts/MintContext";
import { Link, Box, Alert, Typography, Stack } from "@mui/material";
import {
	EXPLORER_URI,
	NETWORK_ID,
	AVAX_TESTNET,
	NETWORK_NAME,
} from "../CONSTANTS";
import { useConnectWallet } from "@web3-onboard/react";
import { useSetChain } from "@web3-onboard/react";

export default function MintStatus() {
	const [mintData] = useMint();
	const [{ wallet }] = useConnectWallet();
	const [
		{
			connectedChain, // the current chain the user's wallet is
		},
	] = useSetChain();

	function getState() {
		switch (mintData.stage) {
			case 0:
				return "Mint not started";
				break;
			case 1:
				return "Whitelist claim";
				break;
			case 2:
				return "Public claim";
				break;
			case 999:
				return "Sold out";
				break;
			default:
				return null;
		}
	}
	console.log("Stage", mintData.stage, mintData);

	return (
		<>
			{" "}
			<Stack
				gap={1}
				sx={{
					mb: 3,
					p: 2,
					borderRadius: "3px solid black",
					border: "2px solid black",
				}}
			>
				{Number(connectedChain?.id) !== NETWORK_ID && (
					<Alert severity="error">
						Error: Please connect to {NETWORK_NAME}
					</Alert>
				)}
				{mintData.errorText && (
					<Alert severity="error">Error: {mintData.errorText}</Alert>
				)}
				{getState() && <Alert severity="info">Stage: {getState()}</Alert>}

				{mintData.isLoading && mintData.loadingText && (
					<Alert severity="info">{mintData.loadingText}</Alert>
				)}
				{mintData.txHash && (
					<Alert severity="info">
						Transaction Hash:{" "}
						<Link href={`${EXPLORER_URI}/tx/${mintData.txHash}`}>
							{" "}
							{mintData.txHash}
						</Link>
					</Alert>
				)}
			</Stack>
			<Box sx={{ my: 2, height: "20px" }}>{""}</Box>
		</>
	);
}
