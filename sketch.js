
var hit = false;
var width, height;

const poly = []; // stores the vertices for our polygon.

function polySet() {
	poly[0] = createVector(0.3*width, 0.3*height);
  poly[1] = createVector(0.6*width, 0.4*height);
  poly[2] = createVector(0.5*width, 0.6*height);	
	
	
	// entangled polygon
	/*
	poly[0] = createVector(0.3*width, 0.3*height);
  poly[1] = createVector(0.6*width, 0.4*height);
  poly[2] = createVector(0.5*width, 0.6*height);
  poly[3] = createVector(0.3*width, 0.1*height);	
	*/
}

function setup() {
  width = windowWidth; height = windowHeight;
	createCanvas(width, height);
  collideDebug(true); // enable debug mode

  // Set x,y positions as vecs:
  polySet();
}


function draw() {
    background(255);

    // Draw the polygon by iterating over the 4 created vectors{x, y} stored in poly[]:
    beginShape();
    for (const { x, y } of poly)  vertex(x, y);
    endShape(CLOSE);

    circle(mouseX, mouseY, 45);

    hit = collideCirclePoly(mouseX, mouseY, 45, poly);

    // Enable the hit detection if the circle is wholly inside the polygon:
    // hit = collideCirclePoly(mouseX, mouseY, 45, poly, true);

    // Use vectors as input:
    // const mouse = createVector(mouseX, mouseY);

    // hit = collideCirclePolyVector(mouse, 45, poly);
    // Or:
    // hit = collideCirclePolyVector(mouseX, mouseY, 45, poly, true);

    stroke(hit ? color('red') : 0);
    print('colliding?', hit);
}

