
function gameBackground(){
    gameBackgroundSprite = PIXI.Sprite.fromImage("assets/textures/game_background.png");
    gameBackgroundSprite.width = renderer.width;
    gameBackgroundSprite.height = renderer.height;
    gameBackgroundSprite.anchor.x = 0.5;
    gameBackgroundSprite.anchor.y = 0.5;
    gameBackgroundSprite.position.x = renderer.width/2;
    gameBackgroundSprite.position.y = renderer.height/2;

    return gameBackgroundSprite;
}

function menuBackground() {
	menuBackgroundSprite = PIXI.Sprite.fromImage("assets/textures/start_background.png");
    menuBackgroundSprite.width = renderer.width;
    menuBackgroundSprite.height = renderer.height;
    menuBackgroundSprite.anchor.x = 0.5;
    menuBackgroundSprite.anchor.y = 0.5;
    menuBackgroundSprite.position.x = renderer.width/2;
    menuBackgroundSprite.position.y = renderer.height/2;

    return menuBackgroundSprite;
}

function scoreboardButton() {
    scoreboardButtonSprite = PIXI.Sprite.fromImage("assets/textures/scoreboard_button.png");
    scoreboardButtonSprite.anchor.x = 0.5;
    scoreboardButtonSprite.anchor.y = 0.5;
    scoreboardButtonSprite.position.x = renderer.width/2;
    scoreboardButtonSprite.position.y = renderer.height/2 + scoreboardButtonSprite.height + 10;

    return scoreboardButtonSprite;
}

function startButton() {
    startButtonSprite = PIXI.Sprite.fromImage("assets/textures/start_button.png");
    startButtonSprite.anchor.x = 0.5;
    startButtonSprite.anchor.y = 0.5;
    startButtonSprite.position.x = renderer.width/2;
    startButtonSprite.position.y = renderer.height/2;

    return startButtonSprite;
}

function newSquare(x, y) {
	square = new PIXI.Sprite(textureSquare);
	// anchor is % not pixels, so 0.5 is center
	square.anchor.x = 0.5;
	square.anchor.y = 0.5;

	square.position.x = x;
	square.position.y = y;

	return square;
}

function newRing(x, y) {
	ring = new PIXI.Sprite(textureRing);
	ring.anchor.x = 0.5;
	ring.anchor.y = 0.5;
	ring.position.x = x;
	ring.position.y = y;

	return ring;
}

function newSmallRing(x, y) {
	ring = new PIXI.Sprite(textureRingSmall);
	ring.anchor.x = 0.5;
	ring.anchor.y = 0.5;
	ring.position.x = x;
	ring.position.y = y;

	return ring;
}
