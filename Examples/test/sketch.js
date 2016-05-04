var flock;

var text;

var w;

function setup() {
  createCanvas(640,360);

  w = new Walker();
}
  //createP("boids");

  //flock = new Flock();
  // Add an initial set of boids into the system
  //for (var i = 0; i < 100; i++) {
//    var b = new Boid(width/2,height/2);
//    flock.addBoid(b);
  //}

function draw() {
  background(51);
  //flock.run();
  w.walk();
  w.display();

}

function Walker() {

    this.pos = createVector(width/2, height/2);

    this.walk = function() {
        this.vel = createVector(random(-5, 5), random(-5, 5))
        this.pos = this.pos.add(this.vel);
    }
    this.display = function() {
        fill(255);
        ellipse(this.pos.x, this.pos.y, 48, 48);
    }
}

// Boid class
// Methods for Separation, Cohesion, Alignment added

function Boid(x,y) {
//  this.acceleration = createVector(0,0);
  this.velocity = createVector(random(-1,1),random(-1,1));
  this.position = createVector(x,y);
  this.r = 3.0;
 // this.maxspeed = 3;    // Maximum speed
 // this.maxforce = 0.05; // Maximum steering force
}
