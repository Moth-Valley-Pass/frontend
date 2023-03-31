export default function getTranslateFromMatrix(matrix?: string) {
	const matrixRegex =
		/matrix\((-?\d+\.?\d*),\s*(-?\d+\.?\d*),\s*(-?\d+\.?\d*),\s*(-?\d+\.?\d*),\s*(-?\d+\.?\d*),\s*(-?\d+\.?\d*)\)/;
	const match = matrix && matrix.match(matrixRegex);

	if (match) {
		const left = parseFloat(match[5]);
		const top = parseFloat(match[6]);
		return { left, top };
	}

	return { left: 0, top: 0 };
}
