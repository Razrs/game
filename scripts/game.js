var stage = new PIXI.Stage(0x000000);
// Renderer is 640x480
var renderer = new PIXI.autoDetectRenderer(640, 480);


function load() {
	// Add the element to body
	document.body.appendChild(renderer.view);

	initTextures();

	var square = newSquare();
	stage.addChild(square);

	// Gets an anim frame, equalviant to render method
	requestAnimFrame(animate);

	function animate() {
		// Recursion to keep rendering
		requestAnimFrame(animate);

		square.rotation += 0.1;

		// Render to the stage
		renderer.render(stage);
	}
}

function newSquare() {
	var square = new PIXI.Sprite(textureSquare);
	square.anchor.x = 0;
	square.anchor.y = 0;
	square.position.x = 0;
	square.position.y = 0;

	return square;
}