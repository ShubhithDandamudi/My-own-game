
var Ground,InvisibleGround,GroundImg
var Hero,HeroImg,HeroTurnedImg;
var HeroHit;
var CityImg,ForestImg,CountrysideImg;
var MalariaImg

function preload()
{
  HeroImg = loadImage("Images/Hero/Hero.png");
  GroundImg = loadImage("Images/Background/Mountains.png");
  HeroTurnedImg = loadImage("Images/Hero/Hero turned.png");
  HeroHit = loadAnimation("Images/Hero/Hero1.png","Images/Hero/Hero2.png","Images/Hero/Hero3.png","Images/Hero/Hero4.png","Images/Hero/Hero5.png","Images/Hero/Hero6.png","Images/Hero/Hero7.png","Images/Hero/Hero8.png");
  CityImg = loadImage("Images/Background/City.png");
  ForestImg = loadImage("Images/Background/Forest.png");
  CountrysideImg = loadImage("Images/Background/Countryside.png");
  MalariaImg = loadImg("Images/Villains/Makaria man.png");
  
  
}

function setup() {
	createCanvas(displayWidth - 50,displayHeight - 50);
	
  Ground = createSprite(width/2,height/2);
  Ground.addImage(GroundImg);


  InvisibleGround = createSprite(width/2,height - 20,width,10);
  InvisibleGround.visible = false;
	
 // Ground.velocityX = -3;

	Hero = createSprite(50,height/2);
  Hero.addImage("main",HeroImg);
  Hero.addImage("mainturned",HeroTurnedImg);
  Hero.addAnimation("jump",HeroHit);
	Hero.scale = 0.5;


  
}


function draw() {
  rectMode(CENTER);
  background(GroundImg);

  Hero.velocityY = Hero.velocityY + 0.5
  Hero.collide(InvisibleGround);

  /*if(Ground.x<0){
    Ground.x = Ground.width/2;
  }

*/

if(Hero.x <0){
  Hero.x = width-10;
}

if(Hero.x > width){
  Hero.x = 10;
}


  if(keyDown(UP_ARROW) && Hero.y > height - 150 ){

    Hero.velocityY = -15
     }

  if(keyDown("Space")){
   Hero.changeAnimation("jump",HeroHit);

 }
else{
 
  if(keyDown(LEFT_ARROW)){
    Hero.x = Hero.x - 3;
    Hero.changeImage("mainturned",HeroTurnedImg);
  }

  if(keyDown(RIGHT_ARROW)){
    Hero.x = Hero.x + 3;
    Hero.changeImage("main",HeroImg);
  }
 
  }
  
  
  drawSprites();
 
}




function Attackers(){
    if(frameCount % 70 ===0){
      attacker = createSprite(width,random(20,height-100));
      attacker.velocityX = random(2,8);
      
      attacker.lifetime = width/attacker.velocityX;
      var rand = Math.round(random(1,4));
      switch(rand){

      }
    }
}
