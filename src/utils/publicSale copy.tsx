import { ethers } from "ethers";
import { CONTRACT_ADDR } from "../CONSTANTS";
import { ABI } from "../data/abi";

async function publicClaim(quantity = 1) {
	//I thiink on the quantity you pass always 1)
	const state = {} as any;
	state.txHash = null;
	state.boxError = false;
	state.errorText = null;
	state.ethers = new ethers.BrowserProvider((window as any).ethereum, "any");
	await state.ethers.send("eth_requestAccounts", []);
	state.signer = state.ethers.getSigner();
	state.contract = new ethers.Contract(CONTRACT_ADDR, ABI, state.signer);

	// here you need to initialize the contract with the signer from the wallet connect... otherwise you can just do READ operations
	state.isLoading = true;
	state.loadingText =
		"sending transaction to the blockchain. please check your wallet for confirmation";
	try {
		const tx = await state.contract.publicClaim(quantity);
		if (tx.hash) {
			await onTxHashLogic(tx.hash);
		}
	} catch (err: any) {
		state.isLoading = false;
		if (err.message.includes("denied")) {
			state.errorText = "transaction canceled";
			return;
		} else if (err.message.includes("insufficient funds")) {
			state.errorText = "you do not have enough ETH for this transaction";
		} else {
			state.errorText = err.message;
		}
		state.boxError = true;
	}
}
async function onTxHashLogic(txHash: string) {
	const state = {} as any;
	state.loadingText =
		"transaction submitted successfully. waiting for it to be mined...";
	state.isLoading = true;
	const sleep = (milliseconds: number) => {
		return new Promise((resolve) => setTimeout(resolve, milliseconds));
	};
	await sleep(3000);
	await state.ethers.waitForTransaction(txHash);

	try {
		state.txHash = txHash;
		let receipt = await state.ethers.getTransactionReceipt(txHash);
		if (receipt === null) {
			console.log("Failed to get tx receipt....");
			await sleep(3000);
		}
		state.isLoading = false;
	} catch (er) {
		state.isLoading = false;
		console.log("Receipt error:", er);
	}
}
