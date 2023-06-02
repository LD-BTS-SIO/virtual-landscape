import { AbstractForm } from './AbstractForm.js';

/**
 * Une box avec un text à l'intérieur 
 */
export class Cerf extends AbstractForm {
  // add default values to avoid errors on empty arguments
  constructor(
    x = 0,
    y = 0,
    width = 0,
    height = 0,
    fillColor = '',
    strokeColor = '',
    strokeWidth = 2,
    pesenteur = false,
    ordreConstruction = 100
  ) {
    super(x, y, width, height, fillColor, strokeColor, strokeWidth, pesenteur, ordreConstruction)
  }

   cerf(ctx, dx, dy) {
    let ox = dx
    let oy = dy
   // Dessiner le corps
  // Dessiner le corps
  ctx.fillStyle = "#8b4513";
  ctx.fillRect(ox + 150, oy + 150, 300, 180);
  ctx.fill
  ctx.fillStyle = "#F5F5DC";
  ctx.fillRect(ox + 180, oy + 300, 250, 20);
  ctx.fillStyle = "#F5F5DC";
  ctx.fillRect(ox + 180, oy + 180, 20, 120);
  ctx.fillStyle = "#8b4513";
  ctx.fillRect(ox + 440, oy + 270, 80, 20);
  ctx.beginPath();
  ctx.fillStyle = "#F5F5DC";
  ctx.arc(ox + 520, oy + 280, 20, 0, 2 * Math.PI);
  ctx.fill();


  // Dessiner la tête
  ctx.beginPath();
  ctx.fillStyle = "#8b4513";
  ctx.arc(ox + 150, oy + 160, 50, 0, 2 * Math.PI);
  ctx.fill();
// Dessiner le sourire 
   ctx.beginPath();
  ctx.strokeStyle = "#ffffff";
  ctx.lineWidth = 2;
  ctx.arc(ox + 150, oy + 180, 20, 1.95 * Math.PI, 0.6 * Math.PI);
  ctx.stroke();

  // Dessiner les bois

/*bois droit*/
ctx.beginPath();
ctx.fillStyle = "#D3D3D3";
ctx.moveTo(ox + 160, oy + 120);
ctx.lineTo(ox + 200, oy + 100);
ctx.lineTo(ox + 230, oy + 60);
ctx.lineTo(ox + 250, oy + 50);
ctx.lineTo(ox + 260, oy + 55);
ctx.lineTo(ox + 240, oy + 70);
ctx.lineTo(ox + 210, oy + 100);
ctx.lineTo(ox + 180, oy + 130);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "#D3D3D3";
ctx.moveTo(ox + 220, oy + 60);
ctx.lineTo(ox + 250, oy + 30);
ctx.lineTo(ox + 260, oy + 35);
ctx.lineTo(ox + 230, oy + 65);
ctx.fill();



// bois gauche
ctx.beginPath();
ctx.fillStyle = "#D3D3D3.";
ctx.moveTo(ox + 140, oy + 120);
ctx.lineTo(ox + 100, oy + 100);
ctx.lineTo(ox + 70, oy +  60);
ctx.lineTo(ox + 50, oy + 50);
ctx.lineTo(ox + 40, oy + 55);
ctx.lineTo(ox + 60, oy + 70);
ctx.lineTo(ox + 90, oy + 100);
ctx.lineTo(ox + 120, oy + 130);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "#D3D3D3";
ctx.moveTo(ox + 80, oy + 60);
ctx.lineTo(ox + 50, oy + 30);
ctx.lineTo(ox + 40, oy + 35);
ctx.lineTo(ox + 70, oy + 65);
ctx.fill();





  // Dessiner les yeux
  ctx.beginPath();
  ctx.fillStyle = "#ffffff";
  ctx.arc(ox + 130, oy + 146, 5, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.fillStyle = "#ffffff";
  ctx.arc(ox + 170, oy + 146, 5, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.fillStyle = "#000000";
  ctx.arc(ox + 127, oy + 150, 5, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.fillStyle = "#000000";
  ctx.arc(ox + 167, oy + 150, 5, 0, 2 * Math.PI);
  ctx.fill();

      // Dessiner le nez
      ctx.beginPath();
      ctx.fillStyle = "#000000";
      ctx.arc(ox + 150, oy + 175, 5, 0, 2 * Math.PI);
      ctx.fill();


  // Dessiner les pattes avant
  ctx.beginPath();
  ctx.fillStyle = "#8b4513";
  ctx.fillRect(ox + 150, oy + 320, 20, 160);
  ctx.beginPath();
  ctx.fillStyle = "#000000";
  ctx.fillRect(ox + 150, oy + 480, 20, 10);
  ctx.beginPath();
  ctx.fillStyle = "#8b4513";
  ctx.fillRect(ox + 350, oy + 320, 20, 160);
  ctx.beginPath();
  ctx.fillStyle = "#000000";
  ctx.fillRect(ox + 350, oy + 480, 20, 10);


  // Dessiner les pattes arrière
  ctx.beginPath();
  ctx.fillStyle = "#8b4513";
  ctx.fillRect(ox + 250, oy + 320, 20, 160);
  ctx.beginPath();
  ctx.fillStyle = "#000000";
  ctx.fillRect(ox + 250, oy + 480, 20, 10);

  ctx.beginPath();
  ctx.fillStyle = "#8b4513";
  ctx.fillRect(ox + 430, oy + 320, 20, 160);
  ctx.beginPath();
  ctx.fillStyle = "#000000";
  ctx.fillRect(ox + 430, oy + 480, 20, 10);
   
}

  /**
   * Dessine la forme spécifique à cette classe
   * @param ctx contexte 2D du canvas
   */
  draw(ctx) {
    ctx.save()
    this.cerf(ctx, this.x, this.y)    
    // restores the styles
    ctx.restore()
  }

  /**
   * get array of forms
   * @return {[Cerf,...]}
   */
  static buildForms() {
    // create a new rectangle object using the Immeuble class
    let forms = []
    // ~~(Math.random() * 5) + 5 // max in [5..10]
    forms.push(new Cerf(~~(Math.random() * 2000) , ~~(Math.random() * 1) ,100,100,'blue','pink', 1, true,50))

   



    // retourne un tableau d'objets de type Cerf
    return forms
  }

}
