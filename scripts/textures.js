var textureSquare;
var textureRing;
var textureRingSmall;
var textureRingQuestion;
var textureEqualSign;

function initTextures() {
    var assets = new PIXI.AssetLoader(["assets/textures/square.png", "assets/textures/circular_ring.png", "assets/textures/circular_ring_small.png", "assets/textures/circular_ring_question.png", "assets/textures/equals_sign.png", "assets/textures/game_background.png", "assets/textures/start_background.png", "assets/textures/scoreboard_button.png", "assets/textures/start_button.png"], false);
                                       
    assets.onComplete = function(){
        load();
    };
    
    assets.load();
}

function getTextures() {
 	textureSquare = PIXI.TextureCache["assets/textures/square.png"];
	textureRing = PIXI.TextureCache["assets/textures/circular_ring.png"];
	textureRingSmall = PIXI.TextureCache["assets/textures/circular_ring_small.png"];
	textureRingQuestion = PIXI.TextureCache["assets/textures/circular_ring_question.png"];
	textureEqualSign = PIXI.TextureCache["assets/textures/equals_sign.png"];   
}