const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var slingShot, stoneImg;
var score = 0;
var hr;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    stand1 = new Ground(520, 300, 280, 15);
    stand2 = new Ground(800, 190, 200, 15);

    stone = new Stone(50, 200);
    
    box2 = new Box(400,285,40,40);
    box1 = new Box(560,285,40,40);
    box3 = new Box(440,285,40,40);
    box4 = new Box(480,285,40,40);
    box5 = new Box(520,285,40,40);
    box6 = new Box(600,285,40,40);
    box7 = new Box(640,285,40,40);
    
    box8 = new Box(440,235,40,40);
    box9 = new Box(480,235,40,40);
    box10 = new Box(520,235,40,40);
    box11 = new Box(560,235,40,40);
    box12 = new Box(600,235,40,40);

    box13 = new Box(480,200,40,40);
    box14 = new Box(520,200,40,40);
    box15 = new Box(560,200,40,40);

    box16 = new Box(520,180,40,40);

    box17 = new Box(720,180,40,40);
    box18 = new Box(760,180,40,40);
    box19 = new Box(800,180,40,40);
    box20 = new Box(840,180,40,40);
    box21 = new Box(880,180,40,40);

    box22 = new Box(760,130,40,40);
    box23 = new Box(800,130,40,40);
    box24 = new Box(840,130,40,40);

    box25 = new Box(800,100,40,40);
  

    slingshot = new SlingShot(stone.body,{x:200, y:100});
}

function draw(){
    timeDate();
    if(hr > 18){
    background("black");
    }
    else{
    background("green");
    }
    
    Engine.update(engine);
    strokeWeight(4);
   
    ground.display();
    stand1.display();
    stand2.display();
    
    fill("lightBlue");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();

    fill("lightPink");
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();

    fill("lightGreen");
    box13.display();
    box14.display();
    box15.display();

    fill("darkGray");
    box16.display();

    fill("lightBlue");
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();

    fill("lightGreen");
    box22.display();
    box23.display();
    box24.display();

    fill("lightPink");
    box25.display();

    text("SCORE :"+score, 750, 40);

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();
    box22.score();
    box23.score();
    box24.score();
    box25.score();
    

    stone.display();
    
   // slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed()
{
    if(keyCode === 32)
    {
        slingshot.attach(stone.body);
    }
}

async function timeDate(){

    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJson = await response.json();
    var td = responseJson.datetime;
    hr = td.slice(11,13);
}