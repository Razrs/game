var stage = new PIXI.Stage(0x000000);
// Renderer is 640x480
var renderer = new PIXI.autoDetectRenderer(640, 480);


function load() {
	// Add the element to body
	document.body.appendChild(renderer.view);

	// Gets an anim frame, equaliant to render method
	requestAnimFrame(animate);

	function animate() {
		// Recursion to keep rendering
		requestAnimFrame(animate);

		// Render to the stage
		renderer.render(stage);
	}
}