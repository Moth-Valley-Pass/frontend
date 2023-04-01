import { useRef, useEffect } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Box } from "@mui/material";
import { SxProps } from "@mui/material/styles";
import Draggable from "react-draggable";
import useUndraggable from "./useUndraggable";
import React from "react";
import { ALLOW_DRAGGING } from "./CONSTANTS";

interface IImages {
	style?: React.CSSProperties;
	width: number;
	height: number;
	src: string;
	className?: string;
}
// translate-bottom-right
// translate-bottom-left-stones
// translate-bottom-left
// translate-top-right

export default function LayerStones({ sx }: { sx?: SxProps }) {
	const ref = useUndraggable();

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
		},
		{
			width: 40,
			height: 40,
			src: "/rock 4b.png",
			className: "translate-top-down-stones",

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
			className: "translate-top-down-stones",
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
			className: "translate-bottom-right",
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

	return (
		<Box
			ref={ref}
			sx={{
				height: "100%",
				...sx,
				"&>*": {
					position: "absolute",
				},
				"*:img": {
					draggable: "false",
				},
			}}
		>
			{images.map((img) => {
				return (
					<Draggable disabled={!ALLOW_DRAGGING} key={img.src}>
						<Image
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
	);
}
