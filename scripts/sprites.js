var homeBackgroundSprite;
//Start Button
var startButtonSprite;

function initSprites(){
    //Load background for Home
    homeBackgroundSprite = PIXI.Sprite.fromImage("assets/textures/start_background.png");
    homeBackgroundSprite.width = renderer.width;
    homeBackgroundSprite.height = renderer.height;
    homeBackgroundSprite.anchor.x = 0.5;
    homeBackgroundSprite.anchor.y = 0.5;
    
    startButtonSprite = PIXI.Sprite.fromImage("assets/textures/start_button.png");
}