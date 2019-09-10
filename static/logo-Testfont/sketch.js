
lesTypo = [];

function preload() {
  lesTypo.push(loadFont('assets/Futura.ttc'));
}   

largeur = 600;
x0 = largeur/2-100;
y0 =330;
x = x0;
y = y0;
longueur = 12*7;
etapes = 20;
pas = longueur/etapes;
letter = 'h';


function setup() {
  createCanvas(largeur, 400);
  fill(255);
  stroke(0);
  strokeWeight(0.5);
   textFont(lesTypo[0]);
}



function draw() {
	background(255);

	if(mouseY<400 && mouseY>0){
 strokeWeight(mouseY/200+0.5);
}
  textSize(200);
  x = x0;
y = y0;

if(mouseX<largeur && mouseX>0){
	etapes = ceil(mouseX/largeur*40)+5;
}
pas = longueur/etapes;
letter = 'h';
  for(i=0; i<etapes-1;i++){
  	x+=pas;
  	y-=pas;	
  	if(i>=etapes/2-1){
  		letter = 'n';
  	}
  	text(letter, x, y);
  }
  x+=pas;
  	y-=pas;
	text('h', x0, y0);
	text('n', x, y);
}


typoV = 0;
function mousePressed() {
	r = random(100)+150;
	g = random(100)+150;
	b = random(100)+150;
	// stroke(r, g, b);
	//fill(r, g, b);
	typoV++;
	if(typoV>=lesTypo.length){
	 typoV = 0;
	}
	textFont(lesTypo[typoV]);
  // if (typoV === 1) {
  //  	textFont(typo1);
  // }else if(typoV === 2){
  // 	textFont(typo2);
  // }else if(typoV === 3){
  // 	textFont(typo3);
  // }

}

