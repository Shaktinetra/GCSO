var car, wall, speed, weight, deformation;

function setup() {
  createCanvas(1600,400);

  speed = random(55, 90);
  weight = random(400, 1500);

  deformation = (0.5 * speed * weight * speed) / 22500;

  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500, 200, 60, height/2);

  car.velocityX = speed;
}

function draw() {
  background(0); 
  
    if (((wall.x - car.x) <= (car.width + wall.width)/2) && ((wall.x - car.x) <= (wall.width/2 + car.width/2))) {
      
      if (deformation > 180) {
        car.velocityX = 0;
        car.shapeColor = "red";
  }
  
    if ((deformation < 180) && (deformation > 100)) {
      car.velocityX = 0;
      car.shapeColor = "yellow";
    }

  if (deformation < 100) {
      car.velocityX = 0;
      car.shapeColor = "green";
    }

}
  drawSprites();

}   
