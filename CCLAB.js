//cloud color
let dotColor;
//cloud dot size
let dotRad = 50;


function setup(){
    //Create the area, similar to size() in processing
    createCanvas(640, 480);
    //background sky
    background(130, 205, 255);
    

    //declare color for clouds
    dot = color(255, 255, 255, 0);
    noStroke(); //no outline
    angleMode(DEGREES);

    //MAKE GRASS
    fill(80, 156, 50);
    rect(0, height - height/4, width, height/4);

    //make tree trunks
    for(j = 0; j <4; j++){
	push();
	//create tree trunks along our canvas
	translate(random(0, width), height - height/2);
	fill(138, random(30, 100), 1); //shades of brown
	rect(0, random(-10, 50), 25, 150); //various thickness
    
	//tree leaves
	for (i = 0; i < 600; i++){
	    push();
	    //rotate(random(180));
	    fill(random(180, 255), 159 -j*10, j*5); //leaf color
	    ellipse(random(-70, 70 + j*3), random(-70, 70 + j*3), random(10, 20 + j* 4), random(10, 20 + j*4));//random size ovals
	    pop();
	}
	pop();
    }
}

function draw(){
    if(mouseIsPressed){
	let r = 255;
	let g = 255;
	let b = 255;
	let t = random(0,35); //transparency of cloud color

	radius = random(0, 35); //chooses a random ellipse size radius
	dotColor = (r, g, b, t);
	dotRad = random(25, 50);

	fill(r, g, b, t);
	ellipse(mouseX, mouseY, radius, radius);
    }
    
}

