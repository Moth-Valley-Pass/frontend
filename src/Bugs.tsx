import Image from "next/image";
import React, { useEffect, useCallback, useState } from "react";
import { Stack, Box, Button, Typography } from "@mui/material";
import { SxProps } from "@mui/material/styles";
import Draggable from "react-draggable";
import useUndraggable from "./useUndraggable";
import { ALLOW_DRAGGING } from "./CONSTANTS";

let animationNames = [
	"translate-bottom-left",
	"tilted-rotation",
	"scale-down-0-8",
	"scale-down-translate-top-right",
];
interface IImage {
	width: number;
	height: number;
	style: React.CSSProperties;
	src: string;
	className?: string;
}
const images: IImage[] = [
	{
		width: 200,
		height: 200,
		style: { top: "-50px", left: -25, objectFit: "contain" },
		src: "/dark colorful flowerish.png",
		className: "scale-down-translate-top-right",
	},
	{
		width: 639,
		height: 639,
		style: { top: 140, left: -90, objectFit: "contain" },
		className: "translate-bottom-left",
		src: "/crooked tree.png",
	},
	{
		width: 200,
		height: 200,
		style: { top: 110, left: 187, objectFit: "contain" },
		src: "/teapot.png",
		className: "scale-down-0-8",
	},
	{
		width: 403,
		height: 403,
		style: { top: 556.46, left: 62, rotate: "-23deg", objectFit: "contain" },
		src: "/moth goldish.png",
		className: "tilted-rotation gold-moth",
	},
	{
		width: 298,
		height: 298,
		style: { top: 645.46, left: 339, rotate: "5deg", objectFit: "contain" },
		src: "/pumpkin onion.png",
		className: "scale-down-translate-top-right",
	},
	{
		width: 200,
		height: 200,
		style: { top: 814.46, left: 540, rotate: "5deg", objectFit: "contain" },
		src: "/hibiscus.png",
		className: "tilted-rotation",
	},
	{
		width: 440,
		height: 440,
		style: { top: 580.46, left: 624, rotate: "7deg", objectFit: "contain" },
		src: "/purplish moth.png",
		className: "translate-bottom-left",
	},
	{
		width: 285,
		height: 285,
		style: {
			top: 634.46,
			left: 967,
			rotate: "7deg",
			zIndex: 2,
			objectFit: "contain",
		},
		src: "/green pumpkin.png",
		className: "scale-down-0-8",
	},
	{
		width: 446,
		height: 446,
		style: { top: 558.46, left: 1092, rotate: "4deg", objectFit: "contain" },
		src: "/greenish moth.png",
		className: "translate-bottom-left",
	},
	{
		width: 810,
		height: 810,
		style: {
			top: 300.46,
			left: 1088,
			rotate: "-7deg",
			zIndex: 2,
			objectFit: "contain",
		},
		src: "/big fire moth.png",
		className: "tilted-rotation big-fire-moth",
	},
	{
		width: 162,
		height: 162,
		style: {
			top: 422.164,
			left: 1428.22,
			rotate: "-7deg",
			zIndex: 2,
			objectFit: "contain",
		},
		src: "/light emitting flower.png",
		className: "scale-down-0-8",
	},
	{
		width: 759,
		height: 759,
		style: {
			top: 18.459999999999994,
			left: 1102,
			rotate: "18.5deg",
			objectFit: "contain",
		},

		src: "/crooked branch.png",
		className: "translate-bottom-left",
	},
	{
		width: 200,
		height: 200,
		style: {
			top: 282.46,
			left: 1584,
			objectFit: "contain",
		},
		src: "/pumpkin onion lit.png",
		className: "scale-down-translate-top-right",
	},
	{
		width: 376,
		height: 376,
		style: {
			top: -106.54,
			left: 1361,
			rotate: "-25deg",
			objectFit: "contain",
		},
		src: "/colorful 2 next to normal moth.png",
		className: "scale-down-translate-top-right",
	},
	{
		width: 200,
		height: 200,
		style: {
			top: -112.46000000000001,
			left: 1260,
			rotate: "-25deg",
			objectFit: "contain",
		},
		src: "/halloween pumpkin.png",
		className: "tilted-rotation",
	},
	{
		width: 355,
		height: 355,
		style: {
			top: 67.46000000000001,
			left: 1077,
			rotate: "10deg",
			objectFit: "contain",
		},
		src: "/very normal moth.png",
		className: "scale-down-translate-top-right",
	},
	{
		width: 275,
		height: 275,
		style: {
			top: 33.46,
			left: 851,
			rotate: "5.5deg",
			objectFit: "contain",
		},
		src: "/moth pot.png",
		className: "translate-bottom-left",
	},
	{
		width: 200,
		height: 200,
		style: {
			top: 12,
			left: 713,
			zIndex: 2,
			objectFit: "contain",
		},
		src: "/capsicum.png",
		className: "scale-down-translate-top-right",
	},
	{
		width: 275,
		height: 275,
		style: {
			top: -144,
			left: 469,
			rotate: "149.5deg",
			objectFit: "contain",
		},
		src: "/colorful fly.png",
		className: "scale-down-translate-top-right",
	},
	{
		width: 400,
		height: 400,
		style: {
			top: 60,
			left: 390,
			objectFit: "contain",
		},
		src: "/big moth.png",
		className: "scale-down-translate-top-right",
	},
	{
		width: 200,
		height: 200,
		style: {
			top: 354,
			left: 270,
			objectFit: "contain",
		},
		src: "/shiny pumpkin.png",
		className: "tilted-rotation",
	},
	{
		width: 200,
		height: 200,
		style: {
			top: 407,
			left: 813,
			objectFit: "contain",
		},
		src: "/flying flower.png",
		className: "scale-down-0-8",
	},
];
//
/** Moths, flowers, and other big objects */
export default function BugsLargest({ sx }: { sx?: SxProps }) {
	const ref = useUndraggable();
	const [newImages, setNewImages] = useState<IImage[]>(
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
				img.style.left = `${left}px`;
				img.style.top = `${top}px`;
				const widthHeightRatio = img.width / img.height;

				img.width = (innerWidth / 1842) * img.width;
				img.height = img.width / widthHeightRatio;

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
		<Box
			ref={ref}
			sx={{
				height: "100%",
				...sx,
			}}
		>
			<Box
				sx={{
					height: "100%",
					display: { lg: "none", xs: "block" },
				}}
			>
				<BugsLarge />
			</Box>
			<Box
				sx={{
					"&>*": {
						position: "absolute",
					},
					height: "100%",
					display: { xs: "none", lg: "block" },
				}}
			>
				{newImages.map((elem, index) => {
					return (
						<Draggable disabled={!ALLOW_DRAGGING} key={index}>
							<Image
								data-src={elem.src}
								className={elem.className}
								src={elem.src}
								width={elem.width}
								height={elem.height}
								style={elem.style}
								alt={elem.src}
							></Image>
						</Draggable>
					);
				})}
			</Box>
		</Box>
	);
}

const imagesResponsive: {
	width: number;
	height: number;
	style: React.CSSProperties;
	src: string;
	className?: string;
}[] = [
	{
		width: 380,
		height: 380,
		style: {
			rotate: "-7deg",
			zIndex: 2,
			objectFit: "contain",
			bottom: 180,

			right: -50,
			translate: "25% 25%",
		},
		src: "/big fire moth.png",
		className: "tilted-rotation big-fire-moth",
	},
	{
		width: 380,
		height: 380,
		style: {
			rotate: "-7deg",
			zIndex: 2,
			objectFit: "contain",
			bottom: 180,

			right: -50,
			translate: "25% 25%",
		},
		src: "/big fire moth.png",
		className: "tilted-rotation big-fire-moth",
	},
	{
		width: 339,
		height: 339,
		style: {
			// transform: "translateX(-35%) translateY(15%)",
			top: -180,
			right: 0,
			rotate: "150deg",
			objectFit: "contain",
		},
		className: "translate-bottom-left",
		src: "/colorful fly.png",
	},
	{
		width: 130,
		height: 130,
		style: {
			bottom: 25,
			right: 10,
			zIndex: 2,
			// transform: "translateY(-50%) translateX(-50%)",
			objectFit: "contain",
		},
		src: "/dark colorful flowerish.png",
		className: "scale-down-0-8",
	},
	{
		width: 315,
		height: 315,
		style: {
			top: 57.46000000000001,
			left: -100,
			rotate: "15deg",
			objectFit: "contain",
		},
		src: "/greenish moth.png",
		className: "scale-down-translate-top-right",
	},
	{
		width: 131,
		height: 131,
		style: {
			bottom: 177,
			left: 10,
			rotate: "50deg",
			objectFit: "contain",
		},
		src: "/shiny pumpkin.png",
		className: "scale-down-translate-top-right",
	},
];

function BugsLarge({ sx }: { sx?: SxProps }) {
	return (
		<Box
			sx={{
				width: "100vw",
				position: "relative",
				"&>*": {
					position: "absolute",
				},

				height: "100%",
			}}
		>
			{imagesResponsive.map((elem, index) => {
				return (
					<Image
						key={index}
						className={elem.className}
						src={elem.src}
						width={elem.width}
						height={elem.height}
						style={elem.style}
						alt={elem.src}
					></Image>
				);
			})}
		</Box>
	);
}
