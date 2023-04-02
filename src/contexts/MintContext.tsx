import React, { useContext, useEffect } from "react";
import { useState } from "react";
ethers;
import { JsonRpcApiProvider, JsonRpcSigner, Provider, ethers } from "ethers";
import {
	CONTRACT_ADDR,
	EXPLORER_URI,
	NETWORK_ID,
	// OPENSEA_LINK,
} from "../CONSTANTS";
import { ABI } from "../data/abi";
import { Web3OnboardProvider, useConnectWallet } from "@web3-onboard/react";
import { whitelist } from "../data/whitelist";

const initialState = {
	whitelist: whitelist,
	totalMinted: 0,
	amount: 1,
	stage: null as null | number,

	balanceOf: null,
	dialogConfirmation: false,
	tokenID: null,
	contract: null as null | ethers.Contract,
	account: null as string | null,
	contractAddress: CONTRACT_ADDR,
	txHash: "",
	ethers: null as null | ethers.BrowserProvider,
	signer: null as null | JsonRpcSigner,
	provider: "not_web3",
	isLoading: false,
	loadingText: "loading...",
	boxError: false,
	errorText: "",
	dialogAdoptMany: false,
	dialogError: false,
	walletAddress: null,
	pricePerNFTWei: 10000000000000000,
	maxSupply: 3333,
	maxFlashSale: null,
	explorerURI: EXPLORER_URI,
	// openseaLink: OPENSEA_LINK,
	ownedNFTs: [],
	id: "",
};

const MintContext = React.createContext(initialState);

let setMintData: React.Dispatch<React.SetStateAction<typeof initialState>>;
export function useMint(): [typeof initialState, typeof setMintData] {
	return [useContext(MintContext), setMintData];
}

export default function MintProvider({ children }: { children: any }) {
	let mintData: typeof initialState;

	[mintData, setMintData] = useState(initialState);
	const [{ wallet }] = useConnectWallet();

	useEffect(() => {
		const stateEthers = wallet
			? new ethers.BrowserProvider(wallet.provider, NETWORK_ID)
			: null;
		const contract = stateEthers
			? new ethers.Contract(CONTRACT_ADDR, ABI, stateEthers)
			: null;
		setMintData((s) => ({ ...s, ethers: stateEthers, contract }));
	}, [wallet, wallet?.provider]);

	return (
		<MintContext.Provider value={mintData}>{children}</MintContext.Provider>
	);
}
