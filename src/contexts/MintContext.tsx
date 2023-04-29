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
import Loader from "../components/Loader";
import { whitelistConfirmed } from "../data/whitelistConfirmed";
import { whitelistFirstComeFirstServe } from "../data/whitelistFirstComeFirstServe";

const initialState = {
	whitelistConfirmed,
	whitelistFirstComeFirstServe,
	totalMinted: 0,
	amount: 1,
	stage: null as null | 0 | 1 | 2 | 999,

	balanceOf: null,
	dialogConfirmation: false,
	tokenID: null,
	contract: null as null | ethers.Contract,
	account: null as string | null,
	contractAddress: CONTRACT_ADDR,
	txHash: null as null | string,
	ethers: null as null | ethers.BrowserProvider,
	signer: null as null | JsonRpcSigner,
	provider: "not_web3",
	isLoading: false,
	loadingText: "loading...",
	boxError: false,
	errorText: null as null | string,
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
	const { contract } = mintData;
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

	useEffect(() => {
		contract?.getStage().then((res) => {
			setMintData((d) => ({ ...d, stage: Number(res) as typeof d.stage }));
		});
	}, [contract]);
	useEffect(() => {
		if (!wallet) {
			setMintData((d) => ({
				...d,
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
			}));
		}
	}, [wallet]);

	return (
		<MintContext.Provider value={mintData}>
			{children}
			{mintData.isLoading && <Loader />}
		</MintContext.Provider>
	);
}
