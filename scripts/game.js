var stage = new PIXI.Stage(0x000000);
// Renderer is 1024x640
var renderer = new PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight);

// allow renderer to fill screen
// renderer.view.style.display = "block";
// renderer.view.style.width = "100%"
// renderer.view.style.height = "100%"

var square;


function load() {
	// Add the element to body
	document.body.appendChild(renderer.view);

    //initialize textures
	initTextures();
	
	//intialize Sprites
	initSprites();

    //postion background at center
    homeBackgroundSprite.anchor.x = 0.5;
    homeBackgroundSprite.anchor.y = 0.5;
    homeBackgroundSprite.position.x = window.innerWidth/2;
    homeBackgroundSprite.position.y = window.innerHeight/2;
    
    
    //postion start button at center
    
    
    //add the sprites to stage;
    stage.addChild(homeBackgroundSprite);
    stage.addChild(startButtonSprite);
    
	square = newSquare();
	stage.addChild(square);
	
    
    
	// Gets an anim frame, equalviant to render method
	setTimeout(animate, 1000 / 60);
}

function animate() {
	// Recursion to keep rendering
	setTimeout(animate, 1000 / 60);

	square.rotation += 0.1;

	// Render to the stage
	renderer.render(stage);
}

function newSquare() {
	var square = new PIXI.Sprite(textureSquare);
	// anchor is % not pixels, so 0.5 is center
	square.anchor.x = 0.5;
	square.anchor.y = 0.5;

	square.position.x = 0;
	square.position.y = 0;

	return square;
}