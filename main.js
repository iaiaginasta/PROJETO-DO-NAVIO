//variaveis
var mar,marImg;
var navio,navioImg;


//carregando imagens
function preload(){
marImg = loadImage ("mar.png");
navioImg = loadImage("navio.png");

}
 

//sprites
function setup(){
  createCanvas(600,600);
    mar = createSprite(300,190,600,10);
    mar.addImage(marImg);

  navio = createSprite(250,90,20,20);
  navio.addImage(navioImg);
  navio.scale = 0.3;
}

function draw() {
  

    drawSprites();

 
}
