import { useState, useEffect } from "react";

interface WindowSize {
	width: number | 0;
	height: number | 0;
}

export function useWindowSize(): WindowSize {
	const [windowSize, setWindowSize] = useState<WindowSize>({
		width: 0,
		height: 0,
	});

	useEffect(() => {
		function handleResize() {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}

		window.addEventListener("resize", handleResize);
		handleResize();

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return windowSize;
}

export default useWindowSize;
