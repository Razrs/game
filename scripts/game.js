// Renderer is 1024x640
var renderer = new PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight);
var stage;

// allow renderer to fill screen
renderer.view.style.display = "block";
// renderer.view.style.width = "100%"
// renderer.view.style.height = "100%"

var update;

function loadMenu() {
	stage = new PIXI.Stage(0x000000);

	scoreboardButtonSprite = scoreboardButton();
    startButtonSprite = startButton();

    // Make start button clickable

	scoreboardButtonSprite.interactive = true;
	scoreboardButtonSprite.click = function(mouseData) {
		stage.removeChildren();
		loadScoreboard();
	};
    
    startButtonSprite.interactive = true;
    startButtonSprite.click = function(mouseData) {
    	stage.removeChildren();
	 	loadGame();
    };

    //add the sprites to stage;
    stage.addChild(menuBackground());
    stage.addChild(startButtonSprite);
	stage.addChild(scoreboardButtonSprite);

	topleftsquare = newSquare(0, 0);
	toprightsquare = newSquare(renderer.width - 3, 0);
	bottomleftsquare = newSquare(0, renderer.height - 3);
	bottomrightsquare = newSquare(renderer.width - 3, renderer.height - 3);

	stage.addChild(topleftsquare);
	stage.addChild(toprightsquare);
	stage.addChild(bottomrightsquare);
	stage.addChild(bottomleftsquare);

	update = function() {
		topleftsquare.rotation += 0.1;
		toprightsquare.rotation += 0.1;
		bottomleftsquare.rotation += 0.1;
		bottomrightsquare.rotation += 0.1;
	};
}

function loadGame() {
	stage = new PIXI.Stage(0x000000);

	fourthWidth = renderer.width / 4;

	ringLeft = newRing(fourthWidth, renderer.height / 2);

	stage.addChild(gameBackground());
	stage.addChild(ringLeft);

	update = function() {
		// ringLeft.rotation += 0.1;
	}
}

function loadScoreboard() {
	stage = new PIXI.Stage(0x7ec0ee);
}

function animate() {
	update();

	// Render to the stage
	renderer.render(stage);

	requestAnimFrame(animate);
}

function load() {
    getTextures();
    
    loadMenu();

    // Removes the "loading..." text
    document.getElementById("loading").remove();
    document.body.appendChild(renderer.view);
    console.log("Done loading!");

    animate();
}

function keyboard(keyCode) {
	var key = {};
	key.code = keyCode;
	key.isDown = false;
	key.isUp = true;
	key.press = undefined;
	key.release = undefined;
	//The `downHandler`
	key.downHandler = function(event) {
		if (event.keyCode === key.code) {
			if (key.isUp && key.press) {
				key.press();
			}
			key.isDown = true;
			key.isUp = false;
		}
		event.preventDefault();
	};
	//The `upHandler`
	key.upHandler = function(event) {
		if (event.keyCode === key.code) {
			if (key.isDown && key.release){
				key.release();
			}
			key.isDown = false;
			key.isUp = true;
		}
		event.preventDefault();
	};
	//Attach event listeners
	window.addEventListener(
		"keydown", key.downHandler.bind(key), false
	);
	window.addEventListener(
		"keyup", key.upHandler.bind(key), false
	);
	return key;
}

