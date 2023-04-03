import { IconButton, IconButtonProps } from "@mui/material";
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
