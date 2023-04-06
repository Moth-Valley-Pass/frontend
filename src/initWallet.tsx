import trezorModule from "@web3-onboard/trezor";
import ledgerModule from "@web3-onboard/ledger";
import walletConnectModule from "@web3-onboard/walletconnect";
import injectedModule from "@web3-onboard/injected-wallets";
import { init } from "@web3-onboard/react";
import { APP_URL, NETWORK_ID, NETWORK_NAME, RPC_PROVIDER } from "./CONSTANTS";
import { OWNER_EMAIL } from "./CONSTANTS";

const rpcUrl = RPC_PROVIDER;
const injected = injectedModule();

const walletConnect = walletConnectModule({
	bridge: "https://bridge.walletconnect.org/",
	qrcodeModalOptions: {
		mobileLinks: [
			"metamask",
			"trust",
			"rainbow",
			"argent",
			"imtoken",
			"pillar",
		],
	},
});

// const infuraKey = "<INFURA_KEY>";

// initialize Onboard
init({
	wallets: [
		injected,
		walletConnect,
		trezorModule({
			email: OWNER_EMAIL,
			appUrl: APP_URL,
		}),
		ledgerModule(),
	],
	chains: [
		{
			id: `0x${NETWORK_ID}`,
			token: "AJAX",
			label: NETWORK_NAME,
			rpcUrl,
		},
	],
	appMetadata: {
		name: "Moth Valley Pass",
		icon: "/favicon.ico",
		description: "Mint awesome NFTs",
		recommendedInjectedWallets: [
			{ name: "MetaMask", url: "https://metamask.io/" },
		],
	},
});

export default function initWallet() {}
