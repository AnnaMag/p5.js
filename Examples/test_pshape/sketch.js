
var shape;
var table;


function setup() {
  createCanvas(640,360);
  shape = new p5.Shape();
  //table = loadTable("assets/mammals.csv", "csv", "header");
  shape.addPaths();
}

function draw() {
  background(GRAY);

}
