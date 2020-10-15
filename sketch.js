// Fonction pour mettre une image en fond
var img;
function preload() {
  img = loadImage("https://upload.wikimedia.org/wikipedia/commons/e/ee/GEO_Globe_Image.jpg");
}
// Mise en place du code
function setup() {
  createCanvas(900, 900);
  // Positionnement de l'image
  image(img, 0, 0);
  // Distance entre le point (0,0) et (900,900) du canva
  max_distance = dist(0, 0, width, height);
}

  // Creation d'une fonction fleur
function fleur(ellipseX1,ellipseX2,ellipseY1,ellipseY2,taille) {
  ellipse(mouseX, mouseY, taille);
  ellipse(ellipseX1, ellipseY1, taille);
  ellipse(ellipseX1, ellipseY2, taille);
  ellipse(ellipseX2, ellipseY2, taille);
  ellipse(ellipseX2, ellipseY1, taille);
}
  // Creation de la fonction maison
function maison(squareX, squareY) {
  square(squareX, squareY, 50);
  triangle(mouseX+50, mouseY+50, mouseX+75, mouseY+25, mouseX+100, mouseY+50);
}

// Dessin
function draw() {
  let couleur_particules = color(random(255), random(255), random(255));
  // Paramètres des fonctions maison et fleur
  let ellipseX1 = mouseX+25;
  let ellipseY1 = mouseY+25;
  let ellipseX2 = mouseX-25;
  let ellipseY2 = mouseY-25;
  let squareX = mouseX+50;
  let squareY = mouseY+50;
  let taille = random(90);

  frameRate(5);
  background(img);

  // Appel des fonctions fleur et maison
  fill(255);
  fleur(ellipseX1,ellipseX2,ellipseY1,ellipseY2,taille);
  fill(0);
  maison(squareX, squareY);

  // Effet disco via LoopFor
  if (mouseIsPressed) {
    for (let i = 0; i <= width; i += 10) {
        for (let j = 0; j <= height; j += 10) {
          let size = dist(mouseX, mouseY, i, j);
          size = (size / max_distance) * 40;
          fill(couleur_particules);
          ellipse(i, j, size, size);
        }
   }
 };
}
