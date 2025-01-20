window.onload = function () {
	const visualizer = document.getElementById("visualizer");
	const player = document.getElementById("player");
	const container = visualizer.children[0];
	container.style["width"] = "80vw";
	container.style["max-width"] = "1590px";
	container.style["height"] = "50vh";
	container.style["margin"] = "0 auto";
	container.style["overflow"] = "auto hidden";
	visualizer.config = {
		noteHeight: 9,
		noteSpacing: 1,
		noteRGB: '255, 255, 255',
		activeNoteRGB: '255, 0, 0',
		scrollType: 2,
		instruments: [0],
		blackNoteWidth: 20,
		blackNoteHeight: 50,
		whiteNoteWidth: 30,
		whiteNoteHeight: 80,
		pixelsPerTimeStep: 90,
	};
	player.style["width"] = "80vw";
}