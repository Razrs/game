var homeBackgroundSprite;
var startButtonSprite;
var gameBackgroundSprite;

function initSprites(){
    //Load background for Home
    homeBackgroundSprite = PIXI.Sprite.fromImage("assets/textures/start_background.png");
    homeBackgroundSprite.width = renderer.width;
    homeBackgroundSprite.height = renderer.height;
    homeBackgroundSprite.anchor.x = 0.5;
    homeBackgroundSprite.anchor.y = 0.5;
    homeBackgroundSprite.position.x = renderer.width/2;
    homeBackgroundSprite.position.y = renderer.height/2;
    
    startButtonSprite = PIXI.Sprite.fromImage("assets/textures/start_button.png");
    startButtonSprite.anchor.x = 0.5;
    startButtonSprite.anchor.y = 0.5;
    startButtonSprite.position.x = renderer.width/2;
    startButtonSprite.position.y = renderer.height/2;

    //Load background for game
    gameBackgroundSprite = PIXI.Sprite.fromImage("assets/textures/game_background.png");
    gameBackgroundSprite.width = renderer.width;
    gameBackgroundSprite.height = renderer.height;
    gameBackgroundSprite.anchor.x = 0.5;
    gameBackgroundSprite.anchor.y = 0.5;
    gameBackgroundSprite.position.x = renderer.width/2;
    gameBackgroundSprite.position.y = renderer.height/2;
}