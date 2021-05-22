const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var hero;

function preload() {
   backGroundimg=loadImage("GamingBackground.png");
  
}

function setup(){
    var canvas = createCanvas(1300,600);
    engine = Engine.create();
    world = engine.world;

    ground=new Ground(400,500,900,15);

    hero=new Hero(120,300,25);

    fly=new Fly(hero.body,{x:120,y:150});

    b1=new Block(300,450,50,50);
    b2=new Block(300,400,50,50);
    b3=new Block(300,350,50,50);
    b4=new Block(300,300,50,50);
    b5=new Block(300,250,50,50);
    b6=new Block(300,200,50,50);

    b7=new Block(400,450,50,50);
    b8=new Block(400,400,50,50);
    b9=new Block(400,350,50,50);
    b10=new Block(400,300,50,50);


    b11=new Block(500,450,50,50);
    b12=new Block(500,400,50,50);
    b13=new Block(500,350,50,50);
    b14=new Block(500,300,50,50);
    b15=new Block(500,250,50,50);
    b16=new Block(500,200,50,50);
    b17=new Block(500,150,50,50);

    b18=new Block(600,450,50,50);
    b19=new Block(600,400,50,50);
    b20=new Block(600,350,50,50);
    b21=new Block(600,300,50,50);
    b22=new Block(600,250,50,50);

    monster = new Monster(750,300,30);
}

function draw(){
   // background(120);
background(backGroundimg);

     Engine.update(engine);

     ground.display();

     hero.display();

     fly.display();

     b1.display();
     b2.display();
     b3.display();
     b4.display();
     b5.display();
     b6.display();
     b7.display();
     b8.display();
     b9.display();
     b10.display();
     b11.display();
     b12.display();
     b13.display();
     b14.display();
     b15.display();
     b16.display();
     b17.display();
     b18.display();
     b19.display();
     b20.display();
     b21.display();
     b22.display();

     monster.display();


} 

function mouseDragged(){
    
    Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});

}
