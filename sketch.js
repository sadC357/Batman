const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;
var drops=[];
var rand;
var maxDrops=200;

function setup(){
   engine=Engine.create();
   world=engine.world;
   createCanvas(400,400);
   umbrella=new Umbrella(200,200);
   if (frameCount%150===0) {
      for (var i=0;i<maxDrops;i++) {
         drops.push(new Drop(random(0,400),random(0,400)));
      }
   }
}

function draw(){
   Engine.update(engine);
   background(255);
   umbrella.display();
   for (var i=0;i<maxDrops;i++) {
      drops[i].display();
      drops[i].update(); 
   }
}   

