var homeBackgroundSprite;
//Start Button
var startButtonSprite;

function initSprites(){
    //Load background for Home
    homeBackgroundSprite = PIXI.Sprite.fromImage("assets/textures/start_background.png");
    homeBackgroundSprite.width = renderer.width;
    homeBackgroundSprite.height = renderer.height;
    
    startButtonSprite = PIXI.Sprite.fromImage("assets/textures/start_button.png");
}