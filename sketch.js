var eng, world, ground, ball;


function setup(){
createCanvas(400,400)   

eng = Matter.Engine.create()

world = eng.world

ground = Matter.Bodies.rectangle(200,380,400,20, {isStatic:true});

Matter.World.add(world, ground);

ball = Matter.Bodies.circle(200,200,20, {restitution:4});
console.log(ball);
Matter.World.add(world, ball);

}

function draw(){
background(0);
Matter.Engine.update(eng);
rectMode(CENTER);
rect(ground.position.x, ground.position.y, 400,20);

ellipseMode(RADIUS);

ellipse(ball.position.x, ball.position.y, 20, 20);
}