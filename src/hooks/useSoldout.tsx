import { useEffect, useState } from "react";
import { useMint } from "../contexts/MintContext";

export default function useSoldout() {
	const [state] = useMint();
	const [soldout, setState] = useState(
		Boolean(state.totalMinted && state.totalMinted >= state.maxSupply)
	);
	useEffect(() => {
		setState(
			Boolean(state.totalMinted && state.totalMinted >= state.maxSupply)
		);
	}, [state.maxSupply, state.totalMinted]);

	return soldout;
}
