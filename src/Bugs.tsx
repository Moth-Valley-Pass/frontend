import Image from "next/image";
import React from "react";
import { Stack, Box, Button, Typography } from "@mui/material";
import { SxProps } from "@mui/material/styles";
import Draggable from "react-draggable";
import useUndraggable from "./useUndraggable";
import { ALLOW_DRAGGING } from "./CONSTANTS";

/** Moths, flowers, and other big objects */
export default function Layer2({ sx }: { sx?: SxProps }) {
	const ref = useUndraggable();
	const images = [
		<Image
			width={200}
			key={1}
			height={200}
			alt="red flower"
			style={{ top: "-50px", left: -25, objectFit: "contain" }}
			src="/dark colorful flowerish.png"
		></Image>,
		<Image
			key={2}
			width={639}
			height={639}
			style={{ top: 140, left: -90, objectFit: "contain" }}
			alt="crooked tree"
			src="/crooked tree.png"
		></Image>,
		<Image
			key={3}
			width={200}
			height={200}
			style={{ top: 110, left: 187, objectFit: "contain" }}
			alt="teapot"
			src="/teapot.png"
		></Image>,
		<Image
			key={4}
			width={403}
			height={403}
			style={{ top: 556.46, left: 62, rotate: "-23deg", objectFit: "contain" }}
			alt="moth goldish"
			src="/moth goldish.png"
		></Image>,
		<Image
			key={5}
			width={298}
			height={298}
			style={{
				top: 645.46,
				left: 339,
				rotate: "5deg",
				objectFit: "contain",
			}}
			alt="pumpkin onion"
			src="/pumpkin onion.png"
		></Image>,
		<Image
			key={6}
			width={200}
			height={200}
			style={{
				top: 814.46,
				left: 540,
				rotate: "5deg",
				objectFit: "contain",
			}}
			alt="hibiscus"
			src="/hibiscus.png"
		></Image>,
		<Image
			key={8}
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
			key={9}
			width={285}
			height={285}
			style={{
				top: 634.46,
				left: 967,
				rotate: "7deg",
				zIndex: 2,
				objectFit: "contain",
			}}
			alt="Green pumpkin"
			src="/green pumpkin.png"
		></Image>,
		<Image
			key={10}
			width={446}
			height={446}
			style={{
				top: 558.46,
				left: 1092,
				rotate: "4deg",
				objectFit: "contain",
			}}
			alt="Greenish moth"
			src="/greenish moth.png"
		></Image>,
		<Image
			key={10}
			width={810}
			height={810}
			style={{
				top: 300.46,
				left: 1088,
				rotate: "-7deg",
				zIndex: 2,
				objectFit: "contain",
			}}
			alt="Big fire moth"
			src="/big fire moth.png"
		></Image>,
		<Image
			key={11}
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
			key={12}
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
			key={13}
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
			key={14}
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
			key={15}
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
			key={16}
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
			key={17}
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
			key={18}
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
			key={19}
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
			key={20}
			width={200}
			height={200}
			style={{
				top: 354,
				left: 270,
				objectFit: "contain",
			}}
			alt="shiny pumpkin"
			src="/shiny pumpkin.png"
		></Image>,
		<Image
			key={21}
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
				return (
					<Draggable disabled={!ALLOW_DRAGGING} key={index}>
						{elem}
					</Draggable>
				);
			})}
		</Box>
	);
}
