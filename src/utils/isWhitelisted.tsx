import { whitelist } from "../data/whitelist";

export function isWhitelisted(addr: string) {
	return Boolean(whitelist.find((item) => item.Address === addr));
}
