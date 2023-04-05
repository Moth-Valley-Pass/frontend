import React from "react";

export default function getMintDataStatusCleared() {
	return {
		errorText: "",
		isLoading: false,
		loadingText: "",
		txHash: null,
		signer: null,
		dialogError: false,
		walletAddress: null,
		ethers: null,
		boxError: false,
		contract: null,
	};
}
