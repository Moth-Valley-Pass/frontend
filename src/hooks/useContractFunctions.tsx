import React, { useCallback } from "react";
import { useMint } from "../contexts/MintContext";
import { ethers } from "ethers";
import { CONTRACT_ADDR } from "../CONSTANTS";
import { ABI } from "../data/abi";

export default function useContractFunctions() {
	const [mintData, setMintData] = useMint();

	const onTxHashLogic = useCallback(
		async function (txHash: string, ethers: ethers.BrowserProvider) {
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
					console.error("Failed to get tx receipt....");
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

				console.error("Receipt error:", er);
			}
		},
		[setMintData]
	);

	const publicClaim = useCallback(
		async function (quantity = 1) {
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
			const account = await signer.getAddress();

			setMintData((s) => ({ ...s, signer, contract, account }));

			// here you need to initialize the contract with the signer from the wallet connect... otherwise you can just do READ operations
			// state.isLoading = true;
			// state.loadingText =
			// 	"Sending transaction to the blockchain. please check your wallet for confirmation";

			// check whitelist
			const whitelist = mintData.whitelistFirstComeFirstServe;
			let selectedCandidate: null | (typeof whitelist)[0] = null;
			for (let i = 0; i < whitelist.length; i++) {
				if (
					String(whitelist[i]["Address"]).toLowerCase() ===
					String(account).toLowerCase()
				) {
					selectedCandidate = whitelist[i];
				}
			}
			if (!selectedCandidate) {
				const errorText =
					"Your address " +
					account +
					" is not whitelisted. Please connect with the correct wallet";
				const boxError = true;
				const isLoading = false;
				setMintData((s) => ({ ...s, errorText, boxError, isLoading }));
				return;
			}

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
					errorText = "You do not have enough ETH for this transaction";
				} else {
					errorText = err.message;
				}

				const boxError = true;
				console.error({ errorText });
				setMintData((s) => ({ ...s, boxError, isLoading, errorText }));
			}
		},
		[mintData, onTxHashLogic, setMintData]
	);

	const whiteListBuy = useCallback(
		async function () {
			const txHash = "";
			const boxError = false;
			const errorText = "";
			// const stateEthers = new ethers.providers.Web3Provider(
			// 	window.ethereum,
			// 	"any"
			// );
			const stateEthers = mintData.ethers;

			if (!stateEthers) throw new Error(`State ethers is ${stateEthers}`);

			setMintData((s) => ({
				...s,
				txHash,
				boxError,
				errorText,
				ethers: stateEthers,
			}));

			await stateEthers.send("eth_requestAccounts", []);

			const signer = await stateEthers.getSigner();
			const contract = new ethers.Contract(CONTRACT_ADDR, ABI, signer);
			const account = await signer.getAddress();

			setMintData((s) => ({ ...s, signer, contract, account }));

			//WHITELIST
			const whitelist = mintData.whitelistConfirmed;
			let selectedCandidate: null | (typeof whitelist)[0] = null;
			for (let i = 0; i < whitelist.length; i++) {
				if (
					String(whitelist[i]["Address"]).toLowerCase() ===
					String(account).toLowerCase()
				) {
					selectedCandidate = whitelist[i];
				}
			}
			if (!selectedCandidate) {
				const errorText =
					"Your address " +
					account +
					" is not whitelisted. Please connect with the correct wallet";
				const boxError = true;
				const isLoading = false;
				setMintData((s) => ({ ...s, errorText, boxError, isLoading }));
				return;
			}

			setMintData((s) => ({
				...s,
				isLoading: true,
				loadingText: "Sending transaction to the blockchain...",
			}));

			try {
				const tx = await contract.claim(
					1,
					selectedCandidate["TokenID"],
					selectedCandidate["Proof"]
				);
				if (tx.hash) {
					await onTxHashLogic(tx.hash, stateEthers);
				}
			} catch (err: any) {
				const isLoading = false;
				let boxError = false;
				let errorText = "";
				if (err.message.includes("user rejected")) {
					alert("you canceled the transaction");
					boxError = false;
					errorText = "";
				} else if (err.message.includes("insufficient funds")) {
					errorText = "you do not have enough ETH for this transaction";
				} else if (err.message.includes("wallet limit")) {
					errorText = "over max allowed! your wallet limit has been reached";
				} else {
					errorText = err.message;
				}
				boxError = true;

				setMintData((s) => ({ ...s, isLoading, boxError, errorText }));
			}
		},
		[mintData, onTxHashLogic, setMintData]
	);

	// calls whitelistbuy or publicClaim depending on stage
	const mintNft = useCallback(async () => {
		const contract = mintData.contract;

		if (contract) {
			let res = Number(await contract.getStage());
			if (res === 0) {
				alert("Mint not started");
			} else if (res === 1) {
				whiteListBuy();
			} else if (res === 2) {
				publicClaim();
			} else if (res === 999) {
				alert("Sold out");
			} else {
				alert("Cannot determine mint stage " + res);
			}
			setMintData((d) => ({ ...d, stage: res as typeof d.stage }));
		} else {
			alert("No contract found");
		}
	}, [mintData, setMintData, publicClaim, whiteListBuy]);

	return { publicClaim, whiteListBuy, mintNft };
}
