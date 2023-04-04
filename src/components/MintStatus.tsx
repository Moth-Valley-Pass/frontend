import React from "react";
import { useMint } from "../contexts/MintContext";
import { Box, Alert, Typography, Stack } from "@mui/material";

export default function MintStatus() {
	const [mintData] = useMint();

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
				{mintData.errorText && (
					<Alert severity="error">Error: {mintData.errorText}</Alert>
				)}
				{getState() && <Alert severity="info">Stage: {getState()}</Alert>}

				{mintData.isLoading && mintData.loadingText && (
					<Alert severity="info">{mintData.loadingText}</Alert>
				)}
				{mintData.txHash && (
					<Alert severity="info">Transaction Hash: {mintData.txHash}</Alert>
				)}
			</Stack>
			<Box sx={{ my: 2, height: "20px" }}>{""}</Box>
		</>
	);
}
