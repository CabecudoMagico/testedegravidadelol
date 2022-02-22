
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine
var world

var porta
var ohbolinhadegorfe
var bolaquadradadokiko
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    
	var propriedadesdaporta = {
		isStatic:true
	}
	var propriedadesdabolinhadegorfe = {
		restitution:0.5, 
		friction:0.02, 
		frictionAir:0
	}
	var propriedadesdabolaquadradadokiko = {
		restitution:0.7, 
		friction:0.05, 
		frictionAir:2
	}
	//Crie os Corpos Aqui.
    porta = Bodies.rectangle(0,580,2000,20,propriedadesdaporta);
	ohbolinhadegorfe = Bodies.circle(100,100,20,propriedadesdabolinhadegorfe);
	bolaquadradadokiko = Bodies.rectangle(0,200,50,50,propriedadesdabolaquadradadokiko)
    World.add(world,porta);
    World.add(world,ohbolinhadegorfe);
	World.add(world,bolaquadradadokiko);
}


function draw() {
background(0);
Engine.update(engine); 
rectMode(CENTER);
  rect(porta.position.x,porta.position.y,2000,20);

  ellipse(ohbolinhadegorfe.position.x,ohbolinhadegorfe.position.y,20);
  rect(bolaquadradadokiko.position.x,bolaquadradadokiko.position.y,50,50);
}



