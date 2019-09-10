
lesTypo = [];

function preload() {
   lesTypo.push(loadFont('Alegreya-Regular.ttf'));
   lesTypo.push(loadFont('AlegreyaSans-Regular.otf'));
   lesTypo.push(loadFont('ArnoPro-Regular.otf'));
   lesTypo.push(loadFont('Calluna-Regular-webfont.ttf'));
   lesTypo.push(loadFont('CallunaSans-Regular.ttf'));
   lesTypo.push(loadFont('ChaparralPro-Regular.otf'));
   lesTypo.push(loadFont('Cousine-Regular.ttf'));
   lesTypo.push(loadFont('EBGaramond12-Regular.ttf'));
   lesTypo.push(loadFont('FiraCode-Regular.otf'));
   lesTypo.push(loadFont('FiraMono-Regular.otf'));
   lesTypo.push(loadFont('FiraSans-Regular.otf'));
   lesTypo.push(loadFont('FuturaStd-Book.otf'));
   lesTypo.push(loadFont('GentiumPlus-R.ttf'));
   lesTypo.push(loadFont('Georgia.ttf'));
   lesTypo.push(loadFont('GFSBaskerville.otf'));
   lesTypo.push(loadFont('GFSBodoni.ttf'));
   lesTypo.push(loadFont('GFSDidot.ttf'));
   lesTypo.push(loadFont('GillSansStd.otf'));
   lesTypo.push(loadFont('Junicode.ttf'));
   lesTypo.push(loadFont('Lato-Regular.ttf'));
   lesTypo.push(loadFont('LibertinusMono-Regular.otf'));
   lesTypo.push(loadFont('LibertinusSans-Regular.otf'));
   lesTypo.push(loadFont('LibertinusSerif-Regular.otf'));
   lesTypo.push(loadFont('NotoSans-Regular.ttf'));
   lesTypo.push(loadFont('NotoSerif-Regular.ttf'));
   lesTypo.push(loadFont('OpenSans-Regular.ttf'));
   lesTypo.push(loadFont('Roboto-Regular.ttf'));
   lesTypo.push(loadFont('RobotoSlab-Regular.ttf'));
   lesTypo.push(loadFont('RockwellStd.otf'));
   lesTypo.push(loadFont('SourceCodePro-Regular.otf'));
   lesTypo.push(loadFont('SourceSansPro-Regular.ttf'));
   lesTypo.push(loadFont('SourceSerifPro-Regular.otf'));
   lesTypo.push(loadFont('TisaPro-Medi.otf'));
   lesTypo.push(loadFont('Ubuntu-R.ttf'));
   lesTypo.push(loadFont('Vollkorn-Regular.otf'));
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
    // if(i/2== floor(i/2)){
    //  letter = 'n';
    // }else{
    //  letter = 'h';
    // }
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
  //    textFont(typo1);
  // }else if(typoV === 2){
  //    textFont(typo2);
  // }else if(typoV === 3){
  //    textFont(typo3);
  // }

}

