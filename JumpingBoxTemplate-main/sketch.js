var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1= new surface(100,200,20,20)
    surface1Color = "red"
    surface2= new surface(100,300,20,20)
    surface2Color = "blue"
    surface3= new surface(100,400,20,20)
    surface3Color = "green"
    surface4= new surface(100,500,20,20)
    surface4Color = "yellow"



    //create box sprite and give velocity
    createSprite(random(20,750))
    boxSprite(Velocity) = 2
    boxSpriteColor = "white"




}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprite()
    spriteBounceOff(edges)



    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box) && box.bounceOff(surface1)){
     boxSpriteColor = "red"
    }
    if(surface1.isTouching(box) && box.bounceOff(surface2)){
        boxSpriteColor = "blue"
    }
    if(surface1.isTouching(box) && box.bounceOff(surface3)){
        boxSpriteColor = "green"
    }
    if(surface1.isTouching(box) && box.bounceOff(surface4)){
        boxSpriteColor = "yellow"
    }
}
