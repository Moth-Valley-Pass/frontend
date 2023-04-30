export const ALLOW_DRAGGING = false;
export const H1_XS_FONT_SIZE = "30px";
export const OWNER_EMAIL = "marvolo@mothvalley.xyz";
export const APP_URL = "https://www.mothvalley.xyz/";
export const OPENSEA_LINK = "https://opensea.io/collection/moth-valley-pass";

// export const AVAX_TESTNET = "https://api.avax-test.network/ext/bc/C/rpc";

// test data
// export const CONTRACT_ADDR = "0xEF3846d3E91c643AFd3801712D04272930a27894";
// export const NETWORK_NAME = "AVAX TESTNET";
// export const NETWORK_ID = 43113;
// export const RPC_PROVIDER = "https://api.avax-test.network/ext/bc/C/rpc";
// export const EXPLORER_URI = "https://testnet.snowtrace.io/";

export const {
	CONTRACT_ADDR,
	NETWORK_ID,
	NETWORK_NAME,
	RPC_PROVIDER,
	EXPLORER_URI,
} = getConstants();

function getConstants() {
	// dev
	let CONTRACT_ADDR = "0xEF3846d3E91c643AFd3801712D04272930a27894";
	let NETWORK_NAME = "AVAX TESTNET";
	let NETWORK_ID = 43113;
	let RPC_PROVIDER = "https://api.avax-test.network/ext/bc/C/rpc";
	let EXPLORER_URI = "https://testnet.snowtrace.io/";

	const is_prod = true;

	if (is_prod) {
		CONTRACT_ADDR = "0x32A9D664Ef2383Abc1DE30e4ACAb322AE84b4840";
		NETWORK_NAME = "Ethereum mainnet";
		NETWORK_ID = 1;
		RPC_PROVIDER =
			"https://eth-mainnet.g.alchemy.com/v2/qLs3tNrS6vIUQbcNzwlne-ZNlVnqq-63";
		EXPLORER_URI = "https://etherscan.io/";
	}

	return {
		CONTRACT_ADDR,
		NETWORK_NAME,
		NETWORK_ID,
		RPC_PROVIDER,
		EXPLORER_URI,
	};
}
