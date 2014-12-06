// Renderer is 1024x640
var renderer = new PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight);
var stage;


// allow renderer to fill screen
renderer.view.style.display = "block";
// renderer.view.style.width = "100%"
// renderer.view.style.height = "100%"

var square;
var endsquare;
var bottomleftsquare;
var bottomrightsquare;

function loadMenu() {
	stage = new PIXI.Stage(0x000000);

    // Make start button clickable
    startButtonSprite.interactive = true;
    startButtonSprite.click = function(mouseData) {
    	loadGame();
    }

    //add the sprites to stage;
    stage.addChild(homeBackgroundSprite);
    stage.addChild(startButtonSprite);

	endsquare = newSquare(window.innerWidth - 3, 0);
	square = newSquare(0, 0);
	bottomleftsquare = newSquare(0, window.innerHeight - 3);
	bottomrightsquare = newSquare(window.innerWidth - 3, window.innerHeight - 3);

	stage.addChild(square);
	stage.addChild(endsquare);
	stage.addChild(bottomrightsquare);
	stage.addChild(bottomleftsquare);
}

function loadGame() {
	stage = new PIXI.Stage(0x000000);

	stage.addChild(gameBackgroundSprite);
}

function load() {
	// Add the element to body
    //initialize textures
	initTextures();

	//intialize Sprites
	initSprites();

    loadMenu();

    // Removes the "loading..." text
    document.getElementById("loading").remove();
    document.body.appendChild(renderer.view);
    console.log("Done loading!");

    animate();
}

function animate() {
	// Recursion to keep rendering
	setTimeout(animate, 1000 / 60);

	square.rotation += 0.1;
	endsquare.rotation += 0.1;
	bottomleftsquare.rotation += 0.1;
	bottomrightsquare.rotation += 0.1;

	// Render to the stage
	renderer.render(stage);
}

function newSquare(x, y) {
	var square = new PIXI.Sprite(textureSquare);
	// anchor is % not pixels, so 0.5 is center
	square.anchor.x = 0.5;
	square.anchor.y = 0.5;

	square.position.x = x;
	square.position.y = y;

	return square;
}
