lesTypo = [];

fontNames = ['Rockwell', 'GFS Didot', 'EB Garamond', 'Futura', 'Georgia Italic', 'Libertinus Sans', 'Optima', 'Libertinus Serif', 'Times', 'Vollkorn', 'Ubuntu', 'Bauhaus', 'Gentium Plus', 'Alegreya', 'Calluna', 'Chaparral Pro', 'Noto Serif', 'Cormorant', 'American Typewriter', 'Roboto Slab', 'Zapf Chancery', 'Jenson Pro', 'CMU Typewriter Text', 'Courier', 'Lucida Typewriter Std'];

function preload() {
    lesTypo.push(loadFont('assets/RockwellStd.otf'));
    lesTypo.push(loadFont('assets/GFSDidot.ttf'));
    lesTypo.push(loadFont('assets/EBGaramond12-Regular.ttf'));
    lesTypo.push(loadFont('assets/FuturaStd-Book.otf'));
    lesTypo.push(loadFont('assets/Georgia Italic.ttf'));
    lesTypo.push(loadFont('assets/LibertinusSans-Regular.otf'));
    lesTypo.push(loadFont('assets/OptimaLTStd.otf'));
    lesTypo.push(loadFont('assets/LibertinusSerif-Regular.otf'));
    lesTypo.push(loadFont('assets/TimesLTStd-Roman.otf'));
    lesTypo.push(loadFont('assets/Vollkorn-Regular.otf'));
    lesTypo.push(loadFont('assets/Ubuntu-R.ttf'));
    lesTypo.push(loadFont('assets/BauhausStd-Medium.otf'));
    lesTypo.push(loadFont('assets/GentiumPlus-R.ttf'));
    lesTypo.push(loadFont('assets/Alegreya-Regular.ttf'));
    lesTypo.push(loadFont('assets/Calluna-Regular-webfont.ttf'));
    lesTypo.push(loadFont('assets/ChaparralPro-Regular.otf'));
    lesTypo.push(loadFont('assets/NotoSerif-Regular.ttf'));
    lesTypo.push(loadFont('assets/Cormorant-Regular.ttf'));
    lesTypo.push(loadFont('assets/AmericanTypewriterStd-Med.otf'));
    lesTypo.push(loadFont('assets/RobotoSlab-Regular.ttf'));
    lesTypo.push(loadFont('assets/ZapfChanceryStd-Roman.otf'));
    lesTypo.push(loadFont('assets/AJensonPro-Regular.otf'));
    lesTypo.push(loadFont('assets/cmuntt.ttf'));
    lesTypo.push(loadFont('assets/CourierStd.otf'));
    lesTypo.push(loadFont('assets/LucidaTypewriterStd.otf'));
    // lesTypo.push(loadFont('assets/AvenirLTStd-Roman.otf'));
    // lesTypo.push(loadFont('assets/GFSBodoni.ttf'));
    // lesTypo.push(loadFont('assets/HelveticaNeueLTStd-Roman.otf'));
    // lesTypo.push(loadFont('assets/Junicode.ttf'));
    // lesTypo.push(loadFont('assets/Lato-Regular.ttf'));
    // lesTypo.push(loadFont('assets/MyriadPro-Regular.otf'));
    // lesTypo.push(loadFont('assets/OpenSans-Regular.ttf'));
    // lesTypo.push(loadFont('assets/SourceSerifPro-Regular.otf'));
    // lesTypo.push(loadFont('assets/TisaPro-Medi.otf'));
    // lesTypo.push(loadFont('assets/UniversLTStd.otf'));
}

largeur = 600;
x0 = largeur / 2 - 100;
y0 = 330;
x = x0;
y = y0;
longueur = 12 * 7;
etapes = 20;
pas = longueur / etapes;
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
    if (mouseY < 400 && mouseY > 0) {
        strokeWeight(mouseY / 200 + 0.5);
    }
    textSize(200);
    x = x0;
    y = y0;
    stroke('#254093'); // add REVUE HN color

    if (mouseX < largeur && mouseX > 0) {
        etapes = ceil(mouseX / largeur * 40) + 5;
    }

    pas = longueur / etapes;
    letter = 'h';
    for (i = 0; i < etapes - 1; i++) {
        x += pas;
        y -= pas;
        if (i >= etapes / 2 - 1) {
            letter = 'n';
        }
        text(letter, x, y);
    }
    x += pas;
    y -= pas;
    text('h', x0, y0);
    text('n', x, y);
}

typoV = 0;

function mousePressed() {
    typoV++;
    if (typoV >= lesTypo.length) {
        typoV = 0;
    }
    textFont(lesTypo[typoV]);
}
