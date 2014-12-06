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

	scoreboardButtonSprite.interactive = true;
	scoreboardButtonSprite.click = function(mouseData) {
		loadScoreboard();
	}

    //add the sprites to stage;
    stage.addChild(homeBackgroundSprite);
    stage.addChild(startButtonSprite);
	stage.addChild(scoreboardButtonSprite);

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

function loadScoreboard() {
	stage = new PIXI.Stage(0x7ec0ee)
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
	square.rotation += 0.1;
	endsquare.rotation += 0.1;
	bottomleftsquare.rotation += 0.1;
	bottomrightsquare.rotation += 0.1;

	// Render to the stage
	renderer.render(stage);

	requestAnimFrame(animate);
}
