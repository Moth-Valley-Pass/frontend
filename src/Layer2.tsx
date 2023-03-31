import Image from "next/image";
import React from "react";
import { Stack, Box, Button, Typography } from "@mui/material";
import { SxProps } from "@mui/material/styles";
import Draggable from "react-draggable";
import useUndraggable from "./useUndraggable";

/** Moths, flowers, and other big objects */
export default function Layer2({ sx }: { sx?: SxProps }) {
	const ref = useUndraggable();
	const images = [
		<Image
			width={200}
			height={200}
			alt="red flower"
			style={{ top: "-50px", left: -25, objectFit: "contain" }}
			src="/dark colorful flowerish.png"
		></Image>,
		<Image
			width={639}
			height={639}
			style={{ top: 98, left: -21, objectFit: "contain" }}
			alt="crooked tree"
			src="/crooked tree.png"
		></Image>,
		<Image
			width={200}
			height={200}
			style={{ top: 110, left: 187, objectFit: "contain" }}
			alt="teapot"
			src="/teapot.png"
		></Image>,
		<Image
			width={403}
			height={403}
			style={{ top: 552.46, left: 118, rotate: "-23deg", objectFit: "contain" }}
			alt="moth goldish"
			src="/moth goldish.png"
		></Image>,
		<Image
			width={298}
			height={298}
			style={{
				top: 644.46,
				left: 385,
				rotate: "5deg",
				objectFit: "contain",
			}}
			alt="pumpkin onion"
			src="/pumpkin onion.png"
		></Image>,
		<Image
			width={200}
			height={200}
			style={{
				top: 833.46,
				left: 498,
				rotate: "5deg",
				objectFit: "contain",
			}}
			alt="hibiscus"
			src="/hibiscus.png"
		></Image>,
		<Image
			width={440}
			height={440}
			style={{
				top: 580.46,
				left: 624,
				rotate: "7deg",
				objectFit: "contain",
			}}
			alt="Purplish moth"
			src="/purplish moth.png"
		></Image>,
		<Image
			width={285}
			height={285}
			style={{
				top: 634.46,
				left: 967,
				rotate: "7deg",
				objectFit: "contain",
			}}
			alt="Green pumpkin"
			src="/green pumpkin.png"
		></Image>,
		<Image
			width={580}
			height={580}
			style={{
				top: 402.46,
				left: 1214,
				rotate: "4deg",
				objectFit: "contain",
			}}
			alt="Greenish moth"
			src="/greenish moth.png"
		></Image>,
		<Image
			width={759}
			height={759}
			style={{
				top: 18.459999999999994,
				left: 1102,
				rotate: "18.5deg",
				objectFit: "contain",
			}}
			alt="Crooked branch"
			src="/crooked branch.png"
		></Image>,
		<Image
			width={200}
			height={200}
			style={{
				top: 282.46,
				left: 1584,
				objectFit: "contain",
			}}
			alt="pumpkin onion lit"
			src="/pumpkin onion lit.png"
		></Image>,
		<Image
			width={376}
			height={376}
			style={{
				top: -106.54,
				left: 1361,
				rotate: "-25deg",
				objectFit: "contain",
			}}
			alt="colorful 2 next to"
			src="/colorful 2 next to normal moth.png"
		></Image>,
		<Image
			width={200}
			height={200}
			style={{
				top: -112.46000000000001,
				left: 1260,
				rotate: "-25deg",
				objectFit: "contain",
			}}
			alt="halloween pumpkin"
			src="/halloween pumpkin.png"
		></Image>,
		<Image
			width={355}
			height={355}
			style={{
				top: 67.46000000000001,
				left: 1077,
				rotate: "10deg",
				objectFit: "contain",
			}}
			alt="very normal moth"
			src="/very normal moth.png"
		></Image>,
		<Image
			width={275}
			height={275}
			style={{
				top: 33.46,
				left: 851,
				rotate: "5.5deg",
				objectFit: "contain",
			}}
			alt="moth pot"
			src="/moth pot.png"
		></Image>,
		<Image
			width={200}
			height={200}
			style={{
				top: 12,
				left: 713,
				zIndex: 2,

				// rotate: "149.5deg",
				objectFit: "contain",
			}}
			alt="Capsicum"
			src="/capsicum.png"
		></Image>,
		<Image
			width={275}
			height={275}
			style={{
				top: -144,
				left: 469,
				rotate: "149.5deg",
				objectFit: "contain",
			}}
			alt="colorful fly"
			src="/colorful fly.png"
		></Image>,
		<Image
			width={400}
			height={400}
			style={{
				top: 60,
				left: 390,
				objectFit: "contain",
			}}
			alt="big moth"
			src="/big moth.png"
		></Image>,
		<Image
			width={200}
			height={200}
			style={{
				top: 332,
				left: 324,
				objectFit: "contain",
			}}
			alt="shiny pumpkin"
			src="/shiny pumpkin.png"
		></Image>,
		<Image
			width={200}
			height={200}
			style={{
				top: "50%",
				left: "50%",
				translate: "-50% -50%wwwwwwa",
				objectFit: "contain",
			}}
			alt="flying flower"
			src="/flying flower.png"
		></Image>,
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
			}}
		>
			{images.map((elem, index) => {
				return <Draggable key={index}>{elem}</Draggable>;
			})}
		</Box>
	);
}
