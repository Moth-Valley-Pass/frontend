import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Box } from "@mui/material";
import { SxProps } from "@mui/material/styles";
import Draggable from "react-draggable";
import useUndraggable from "./useUndraggable";
import React from "react";
import { ALLOW_DRAGGING } from "./CONSTANTS";

interface IImages {
	style: React.CSSProperties;
	width: number;
	height: number;
	src: string;
	className?: string;
	responsive?: {
		top: number;
		left: number;
		className?: string;
	};
}
// translate-bottom-right
// translate-bottom-left-stones
// translate-bottom-left
// translate-top-right
let images: IImages[] = [
	// {
	// 	width: 40,
	// 	height: 40,
	// 	src: "/rock 2a.png",
	// },
	{
		style: { top: 70, left: 210 },
		width: 40,
		height: 40,
		src: "/rock 1.png",
		className: "translate-bottom-right",
	},
	{
		width: 40,
		height: 40,
		src: "/rock 2b.png",
		className: "translate-bottom-left",

		style: { top: 541, left: 1097 },
		responsive: {
			className: "translate-top-down-stones",
			top: 235,
			left: 1064,
		},
	},
	// next 4 together near the crooked branch
	{
		width: 40,
		height: 40,
		src: "/rock 5.png",
		style: { top: 439, left: 1260 },
		className: "translate-bottom-right",
	},
	{
		width: 40,
		height: 40,
		src: "/rock 4a.png",
		style: { top: 508, left: 1243 },
		className: "translate-top-right",
	},
	{
		width: 40,
		height: 40,
		src: "/rock 3.png",
		style: { top: 488, left: 1368 },
		className: "translate-top-right",
		responsive: {
			top: 111,
			left: 1112,
		},
	},
	{
		width: 40,
		height: 40,
		src: "/rock 4b.png",
		className: "translate-right-left-stones-slow",

		style: { top: 486, left: 1308 },
	},

	{
		width: 40,
		height: 40,
		src: "/rock 2c.png",
		style: { top: 850, left: 1207 },
		className: "translate-top-down-stones",

		// className: "translate-bottom-left-stones",
	},
	// {
	// 	width: 40,
	// 	height: 40,
	// 	src: "/rock 2c.png",
	// 	style: { top: 138, left: 468 },
	// 	className: "translate-bottom-left-stones",
	// },

	// next three together top center
	{
		width: 40,
		height: 40,
		src: "/rock 6a.png",
		style: { top: 231, left: 864 },
		className: "translate-right-left-stones-slow",
	},
	{
		width: 40,
		height: 40,
		src: "/rock 6b.png",
		style: { top: 228, left: 791 },
		className: "translate-bottom-left-stones",
	},
	{
		width: 40,
		height: 40,
		src: "/rock 7a.png",
		style: { top: 184, left: 836 },
		className: "translate-top-right",
	},

	// next two - bottom left from m of moth
	{
		width: 40,
		height: 40,
		src: "/rock 7b.png",
		style: { top: 490, left: 659 },
		className: "translate-top-down-stones",
	},
	{
		width: 40,
		height: 40,
		src: "/rock 7c.png",
		style: { top: 451, left: 605 },
		className: "translate-bottom-right",
	},

	// top right of red pumpkin crooked tree
	{
		width: 40,
		height: 40,
		src: "/rock 7d.png",
		style: { top: 408, left: 402 },
		responsive: { top: 208, left: 845 },
		className: "translate-bottom-right",
		// responsive:{

		// }
	},

	// next 3 go together, left of big grey/brown moth
	{
		width: 40,
		height: 40,
		src: "/rock 8a.png",
		style: { top: 324, left: 393 },
		className: "translate-top-down-stones",
	},
	{
		width: 40,
		height: 40,
		src: "/rock 8b.png",
		style: { top: 243, left: 339 },
		className: "translate-bottom-right",
	},
	{
		width: 40,
		height: 40,
		src: "/rock 8c.png",
		style: { top: 243, left: 402 },
		className: "translate-bottom-left-stones",
	},
];

// images.forEach((img) => {
// 	delete img.className;
// });

export default function LayerStones({ sx }: { sx?: SxProps }) {
	const ref = useUndraggable();
	const [newImages, setNewImages] = useState<IImages[]>(
		JSON.parse(JSON.stringify(images))
	);
	const [resizedOnce, setResizedOnce] = useState(false);

	const convertLeftTop = useCallback(function (
		left: number,
		top: number,
		width: number,
		height: number
	) {
		const originalWidth = 1842;
		const originalHeight = 1009;

		const proportionalLeft = (left / originalWidth) * width;
		const proportionalTop = (top / originalHeight) * height;

		return {
			left: proportionalLeft,
			top: proportionalTop,
		};
	},
	[]);

	useEffect(() => {
		let handlerTimer: null | ReturnType<typeof setTimeout>;
		if (!resizedOnce) {
			setResizedOnce(true);
			handler(undefined, true);
		}
		function handler(e?: Event, immediate?: boolean) {
			const { innerWidth, innerHeight } = window;
			let newImagesToSet = structuredClone(images).map((img) => {
				const { left, top } = convertLeftTop(
					parseInt(String(img.style.left) || String(0)),
					parseInt(String(img.style.top) || String(0)),
					innerWidth,
					innerHeight
				);

				const widthHeightRatio = img.width / img.height;

				const { width, height } = img;

				img.width = (innerWidth / 1842) * img.width;
				img.height = img.width / widthHeightRatio;

				const ratio = width / ((innerWidth / 1842) * img.width);

				img.style.left = `${left}px`;
				img.style.top = `${top}px`;

				return img;
			});
			if (!immediate) {
				handlerTimer && clearTimeout(handlerTimer);
				handlerTimer = setTimeout(() => {
					setNewImages(newImagesToSet);
				}, 1000);
			} else {
				setNewImages(newImagesToSet);
			}
		}
		window.addEventListener("resize", handler);

		return () => {
			window.removeEventListener("resize", handler);
		};
	}, [convertLeftTop, newImages, resizedOnce]);

	return (
		<>
			<LayerStonesResponsive
				sx={{ display: { xs: "block", lg: "none" }, ...sx }}
			></LayerStonesResponsive>
			<Box
				ref={ref}
				sx={{
					display: { xs: "none", lg: "block" },
					height: "100%",
					"&>*": {
						position: "absolute",
					},
					"*:img": {
						draggable: "false",
					},
					...sx,
				}}
			>
				{newImages.map((img) => {
					return (
						<Draggable disabled={!ALLOW_DRAGGING} key={img.src}>
							<Image
								data-src={img.src}
								className={img.className}
								src={img.src}
								width={img.width}
								style={img.style}
								height={img.height}
								alt={img.src}
							></Image>
						</Draggable>
					);
				})}
			</Box>
		</>
	);
}

function LayerStonesResponsive({ sx }: { sx?: SxProps }) {
	let [newImages, setNewImages] = useState<IImages[]>(
		JSON.parse(JSON.stringify(images))
	);
	let [resizedOnce, setResizedOnce] = useState(false);
	const ref = useUndraggable();

	useEffect(() => {
		let setImagesTimeout: null | ReturnType<typeof setTimeout>;
		if (!resizedOnce) {
			handler();
			setResizedOnce(true);
		}
		function handler() {
			const { innerHeight, innerWidth } = window;
			newImages.forEach((elem, index) => {
				let { responsive } = elem;
				if (!responsive) return;

				const originalImg = images[index];

				delete elem.style?.left;
				delete elem.style?.right;
				delete elem.style?.top;
				delete elem.style?.bottom;
				if (!elem.style) {
					elem.style = {};
				}
				elem.style!.left = `${(innerWidth / 1300) * responsive.left}px`;
				elem.style!.top = `${(innerHeight / 600) * responsive.top}px`;
			});
			setImagesTimeout && clearTimeout(setImagesTimeout);

			setImagesTimeout = setTimeout(() => {
				setNewImages(structuredClone(newImages));
			}, 1000);
		}
		window.addEventListener("resize", handler);
		return () => {
			window.removeEventListener("resize", handler);
			setImagesTimeout && clearTimeout(setImagesTimeout);
		};
	}, [newImages, resizedOnce]);
	return (
		<Box
			ref={ref}
			sx={{
				height: "100%",
				"&>*": {
					position: "absolute",
				},
				"*:img": {
					draggable: "false",
				},
				...sx,
			}}
		>
			{newImages
				.filter((img) => img.responsive)
				.map((img) => {
					return (
						<Draggable disabled={!ALLOW_DRAGGING} key={img.src}>
							<Image
								className={img.responsive?.className || img.className}
								src={img.src}
								width={img.width}
								style={img.style}
								height={img.height}
								alt={img.src}
							></Image>
						</Draggable>
					);
				})}
		</Box>
	);
}
