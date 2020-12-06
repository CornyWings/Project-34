var dog,dogImage, happyDog, database, foodS, foodStock

function preload()
{
  dogImage = loadImage("images/dogImg.png");
  
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  
  
  
  createCanvas(500, 500);
  database = firebase.database();

  dog = createSprite(250,300,50,50);
  dog.addImage(dogImage);

  foodStock=database.ref('Food');
  foodStock.on("value", readStock);
}


function draw() {  

  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    foodS--;
    writeStock(foodS);
    dog.addImage(happyDog);
  }




  drawSprites();
  


}

function readStock(data){
  foodS= data.val();


}

function writeStock(seeds){
  database.ref("Food").update({
    Food: seeds
  });
}



