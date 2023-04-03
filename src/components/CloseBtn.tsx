import { Box, IconButton, BoxProps, IconButtonProps } from "@mui/material";
import Image from "next/image";

export default function CloseBtn({ sx, ...props }: IconButtonProps) {
	return (
		<IconButton
			sx={{
				img: {
					width: { md: 50, xs: 25 },
					height: { md: 50, xs: 25 },
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
				top: { xs: 25, md: 50 },
				right: { xs: 25, md: 50 },
				...sx,
			}}
			{...props}
		>
			{children}
		</Box>
	);
}
