import React from "react";
import getTranslateFromMatrix from "./utils/getTranslateFromMatrix";

export default function useUndraggable() {
	const boxRef = React.useRef<HTMLElement>(null);
	React.useEffect(() => {
		const box = boxRef.current!;
		box.querySelectorAll("img").forEach((img) => {
			img.draggable = false;
		});
		function handler(e: MouseEvent) {
			let elem = e.target as HTMLDivElement;
			if (box.contains(elem as any)) {
				const existing = {
					top: elem.style.top ? parseFloat(elem.style.top) : 0,
					left: elem.style.left ? parseFloat(elem.style.left) : 0,
				};
				const translated = getTranslateFromMatrix(
					getComputedStyle(elem).transform
				);
				// console.log((elem as HTMLImageElement).alt, {
				// 	top: existing.top + translated.top,
				// 	left: existing.left + translated.left,
				// });
			} else {
				// console.log("Not contains");
			}
		}
		window.addEventListener("dblclick", handler);
		return () => {
			window.removeEventListener("dblclick", handler);
		};
	});

	return boxRef;
}
