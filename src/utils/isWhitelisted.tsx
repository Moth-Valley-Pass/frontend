import { whitelist } from "../data/whitelist";
import { whitelistConfirmed } from "../data/whitelistConfirmed";
import { whitelistFirstComeFirstServe } from "../data/whitelistFirstComeFirstServe";

export function isWhitelisted(addr: string) {
	return (
		Boolean(whitelistConfirmed.find((item) => item.Address === addr)) ||
		Boolean(whitelistFirstComeFirstServe.find((item) => item.Address === addr))
	);
}

export function GetWhitelistEligibility({ addr }: { addr: string }) {
	const Apr30Confirmed = Boolean(
		whitelistConfirmed.find((item) => item.Address === addr)
	);

	const May1Confirmed = Boolean(
		whitelistFirstComeFirstServe.find((item) => item.Address === addr)
	);

	if (Apr30Confirmed) {
		return (
			<>
				You are <i>whitelisted!</i> You have a guaranteed mint spot starting
				30/4 12PM EST.
			</>
		);
	} else if (May1Confirmed) {
		return (
			<>
				You are <i>whitelisted!</i> You have a FCFS mint spot starting 1/5 12PM
				EST.
			</>
		);
	} else {
		return (
			<>
				You are <i>not whitelisted</i>
			</>
		);
	}
}
