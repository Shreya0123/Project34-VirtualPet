//Create variables here
var dog, happyDog, database, foodS, foodStock, dogImg, dogImg2;
var db,dbref, position;
function preload()
{
  dogImg = loadImage("images/dogImg.png");
  dogImg2 = loadImage("images/dogImg1.png");
	//load images here
}

function setup() {
  db = firebase.database();
  dbref = db.ref("Food");
  dbref.on("value", readStock);

	createCanvas(500, 500);
  dog = createSprite(250,250);
  dog.addImage(dogImg);
  dog.scale = 0.1;
  
}


function draw() {  
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    happyDog.addImage(dogImg2);
  }
  drawSprites();
  //add styles here
  text("Coco loves milk! Press the UP arrow to feed him milk and make him happy!");
  textSize(1);

}

function readStock(data){
  foodS = data.val();
}
 
function writeStock(x){
  db.ref('/').update({
    Food:x
  })
}
