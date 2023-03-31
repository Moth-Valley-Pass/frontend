import Image from "next/image";

import { Stack, Box, Button, Typography } from "@mui/material";
import { SxProps } from "@mui/material/styles";

/** Moths, flowers, and other big objects */
export default function Layer2({ sx }: { sx?: SxProps }) {
	return (
		<Box
			sx={{
				height: "100%",
				...sx,
				"&>*": {
					position: "absolute",
				},
			}}
		>
			<Image
				width={200}
				height={200}
				alt="red flower"
				style={{ top: "-50px", left: -25, objectFit: "contain" }}
				src="/dark colorful flowerish.png"
			></Image>
			<Image
				width={639}
				height={639}
				style={{ top: "140px", left: -101, objectFit: "contain" }}
				alt="crooked tree"
				src="/crooked tree.png"
			></Image>
			<Image
				width={200}
				height={200}
				style={{ top: "170px", left: 184, objectFit: "contain" }}
				alt="teapot"
				src="/teapot.png"
			></Image>
			<Image
				width={403}
				height={403}
				style={{ top: 562.46, rotate: "-23deg", objectFit: "contain" }}
				alt="tree"
				src="/moth goldish.png"
			></Image>
			<Image
				width={298}
				height={298}
				style={{
					top: 606.46,
					left: 300,
					rotate: "5deg",
					objectFit: "contain",
				}}
				alt="pumpkin onion"
				src="/pumpkin onion.png"
			></Image>
			<Image
				width={200}
				height={200}
				style={{
					top: 756.46,
					left: 450,
					rotate: "5deg",
					objectFit: "contain",
				}}
				alt="hibiscus"
				src="/hibiscus.png"
			></Image>
			<Image
				width={440}
				height={440}
				style={{
					top: 656.46,
					left: 550,
					rotate: "7deg",
					objectFit: "contain",
				}}
				alt="Purplish moth"
				src="/purplish moth.png"
			></Image>
			<Image
				width={285}
				height={285}
				style={{
					top: 656.46,
					left: 950,
					rotate: "7deg",
					objectFit: "contain",
				}}
				alt="Green pumpkin"
				src="/green pumpkin.png"
			></Image>
			<Image
				width={580}
				height={580}
				style={{
					top: 406.46,
					left: 1150,
					rotate: "4deg",
					objectFit: "contain",
				}}
				alt="Greenish moth"
				src="/greenish moth.png"
			></Image>
			<Image
				width={580}
				height={580}
				style={{
					top: 106.46,
					right: 50,
					rotate: "18.5deg",
					objectFit: "contain",
				}}
				alt="Crooked branch"
				src="/crooked branch.png"
			></Image>
			<Image
				width={200}
				height={200}
				style={{
					top: 106.46,
					right: 50,
					objectFit: "contain",
				}}
				alt="pumpkin onion lit"
				src="/pumpkin onion lit.png"
			></Image>
			<Image
				width={376}
				height={376}
				style={{
					top: 55.46,
					right: 250,
					rotate: "-25deg",
					objectFit: "contain",
				}}
				alt="colorful fly"
				src="/colorful 2 next to normal moth.png"
			></Image>
			<Image
				width={200}
				height={200}
				style={{
					top: -55.46,
					right: 550,
					rotate: "-25deg",
					objectFit: "contain",
				}}
				alt="halloween pumpkin"
				src="/halloween pumpkin.png"
			></Image>
			<Image
				width={355}
				height={355}
				style={{
					top: 55.46,
					right: 620,
					rotate: "10deg",
					objectFit: "contain",
				}}
				alt="very normal moth"
				src="/very normal moth.png"
			></Image>
			<Image
				width={275}
				height={275}
				style={{
					top: 40.46,
					right: 820,
					rotate: "5.5deg",
					objectFit: "contain",
				}}
				alt="moth pot"
				src="/moth pot.png"
			></Image>
			<Image
				width={200}
				height={200}
				style={{
					top: 30,
					zIndex: 2,
					left: 650,
					// rotate: "149.5deg",
					objectFit: "contain",
				}}
				alt="Capsicum"
				src="/capsicum.png"
			></Image>
			<Image
				width={275}
				height={275}
				style={{
					top: -100,
					left: 500,
					rotate: "149.5deg",
					objectFit: "contain",
				}}
				alt="colorful fly"
				src="/colorful fly.png"
			></Image>
			<Image
				width={400}
				height={400}
				style={{
					top: 50,
					left: 300,
					objectFit: "contain",
				}}
				alt="big moth"
				src="/big moth.png"
			></Image>
			<Image
				width={200}
				height={200}
				style={{
					top: 350,
					left: 250,
					objectFit: "contain",
				}}
				alt="big moth"
				src="/shiny pumpkin.png"
			></Image>
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
			></Image>
		</Box>
	);
}
