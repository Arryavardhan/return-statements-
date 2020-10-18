var s1
var s2
function setup() {
  createCanvas(800,400);
  s1 = createSprite (400,200,50,50)
s2 = createSprite (200,200,50,50)
}

function draw() {
  background(0);  
  drawSprites();
  s2.y = World.mouseY
  s2.x = World.mouseX
  s1.shapeColor=("white")
  s2.shapeColor=("white")
  s1.debug=true
  s2.debug=true
if (s2.x-s1.x<s1.width/2+s2.width/2 && s1.x-s2.x<s1.width/2+s2.width/2 && s2.y-s1.y<s1.height/2+s2.height/2 && s1.y-s2.y<s1.height/2+s2.height/2) {
  s1.shapeColor=("red")
  s2.shapeColor=("red")
}
else {
  s1.shapeColor=("white")
  s2.shapeColor=("white")
}
}
