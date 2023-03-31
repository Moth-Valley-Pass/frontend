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
}

export default function LayerStones({ sx }: { sx?: SxProps }) {
	const ref = useUndraggable();

	let images: IImages[] = [
		{
			style: { top: 70, left: 210 },
			width: 40,
			height: 40,
			src: "/rock 1.png",
		},
		{
			width: 40,
			height: 40,
			src: "/rock 2a.png",
		},
		{
			width: 40,
			height: 40,
			src: "/rock 2b.png",
			style: { top: 541, left: 1097 },
		},
		{
			width: 40,
			height: 40,
			src: "/rock 2c.png",
			style: { top: 850, left: 1207 },
		},
		{
			width: 40,
			height: 40,
			src: "/rock 2c.png",
			style: { top: 138, left: 468 },
		},
		{
			width: 40,
			height: 40,
			src: "/rock 3.png",
			style: { top: 488, left: 1368 },
		},
		{
			width: 40,
			height: 40,
			src: "/rock 4a.png",
			style: { top: 508, left: 1243 },
		},
		{
			width: 40,
			height: 40,
			src: "/rock 4b.png",
			style: { top: 486, left: 1308 },
		},
		{
			width: 40,
			height: 40,
			src: "/rock 5.png",
			style: { top: 439, left: 1260 },
		},
		{
			width: 40,
			height: 40,
			src: "/rock 6a.png",
			style: { top: 231, left: 864 },
		},
		{
			width: 40,
			height: 40,
			src: "/rock 6b.png",
			style: { top: 228, left: 791 },
		},
		{
			width: 40,
			height: 40,
			src: "/rock 7a.png",
			style: { top: 184, left: 836 },
		},
		{
			width: 40,
			height: 40,
			src: "/rock 7b.png",
			style: { top: 490, left: 659 },
		},
		{
			width: 40,
			height: 40,
			src: "/rock 7c.png",
			style: { top: 451, left: 605 },
		},
		{
			width: 40,
			height: 40,
			src: "/rock 7d.png",
			style: { top: 408, left: 402 },
		},
		{
			width: 40,
			height: 40,
			src: "/rock 8a.png",
			style: { top: 324, left: 393 },
		},
		{
			width: 40,
			height: 40,
			src: "/rock 8b.png",
			style: { top: 243, left: 339 },
		},
		{
			width: 40,
			height: 40,
			src: "/rock 8c.png",
			style: { top: 243, left: 402 },
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
