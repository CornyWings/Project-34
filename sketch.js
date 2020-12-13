var dog,dogImage, happyDog, database, foodS, foodStock, food;

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

  dog.scale= 0.1;

  foodStock=database.ref('Food');
  foodStock.on("value", readStock);
}


function draw() {  

  background(255);

  if(keyWentDown(UP_ARROW)){
    food--;
    if(food){
      writeStock(food);
    }
   
    dog.addImage(happyDog);
  }




  drawSprites();
  text("number of food remaining : "+ foodS, 150, 100 );
  console.log(foodS);


}

function readStock(data){
  foodS= data.val();
  food= foodS;


}

function writeStock(seeds){
  database.ref("Food").set({
    Food: seeds
  });
}



