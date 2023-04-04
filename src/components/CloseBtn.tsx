import { Box, IconButton, BoxProps, IconButtonProps } from "@mui/material";
import Image from "next/image";

export default function CloseBtn({ sx, ...props }: IconButtonProps) {
	return (
		<IconButton
			sx={{
				img: {
					width: { md: 40, xs: 20 },
					height: { md: 40, xs: 20 },
				},
				...sx,
			}}
			{...props}
		>
			<Image width={50} height={50} src="/close.svg" alt="Close btn"></Image>
		</IconButton>
	);
}

export function CloseBtnContainer({ sx, children, ...props }: BoxProps) {
	return (
		<Box
			sx={{
				position: "absolute",
				top: { xs: 20, md: 40 },
				right: { xs: 20, md: 40 },
				...sx,
			}}
			{...props}
		>
			{children}
		</Box>
	);
}
