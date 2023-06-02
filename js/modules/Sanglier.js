import { AbstractForm } from './AbstractForm.js';


export class Sanglier extends AbstractForm {
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

   sanglier(ctx, dx, dy) {
    let ox = dx
    let oy = dy
   // Dessiner le corps
   ctx.fillStyle = "#8b4513";
   ctx.fillRect(ox + 100, oy + 150, 120, 80);
   ctx.fill
   ctx.fillStyle = "#000000";
   ctx.fillRect(ox + 200, oy +  150, 70, 80);
   ctx.fillStyle = "#8b4513";
   ctx.fillRect(ox + 270, oy + 200, 60, 20);

   

   //Dessiner le bout de la queue
   ctx.beginPath();
   ctx.fillStyle = "#000000";
   ctx.arc(ox + 320, oy + 210, 20, 0, 2 * Math.PI);
   ctx.fill();

   // Dessiner la tête
   ctx.beginPath();
   ctx.fillStyle = "#8b4513";
   ctx.arc(ox + 100, oy + 160, 50, 0, 2 * Math.PI);
   ctx.fill();

   // Dessiner les oreilles
   ctx.beginPath();
   ctx.fillStyle = "#000000";
   ctx.arc(ox + 70, oy + 115, 10, 0, 2 * Math.PI);
   ctx.fill();
   ctx.beginPath();
   ctx.fillStyle = "#ff69b4";
   ctx.arc(ox + 70, oy + 115, 5, 0, 2 * Math.PI);
   ctx.fill();
   ctx.beginPath();
   ctx.fillStyle = "#000000";
   ctx.arc(ox + 130, oy + 115, 10, 0, 2 * Math.PI);
   ctx.fill();
   ctx.beginPath();
   ctx.fillStyle = "#ff69b4";
   ctx.arc(ox + 130, oy + 115, 5, 0, 2 * Math.PI);
   ctx.fill();

   // Dessiner les yeux
   ctx.beginPath();
   ctx.fillStyle = "#ffffff";
   ctx.arc(ox + 83, oy + 146, 5, 0, 2 * Math.PI);
   ctx.fill();
   ctx.beginPath();
   ctx.fillStyle = "#ffffff";
   ctx.arc(ox + 123, oy + 146, 5, 0, 2 * Math.PI);
   ctx.fill();
   ctx.beginPath();
   ctx.fillStyle = "#000000";
   ctx.arc(ox + 80, oy + 150, 5, 0, 2 * Math.PI);
   ctx.fill();
   ctx.beginPath();
   ctx.fillStyle = "#000000";
   ctx.arc(ox + 120, oy + 150, 5, 0, 2 * Math.PI);
   ctx.fill();

   // Dessiner le nez
   ctx.beginPath();
   ctx.fillStyle = "#ff69b4";
   ctx.arc(ox + 100, oy + 175, 10, 0, 2 * Math.PI);
   ctx.fill();
   ctx.beginPath();
   ctx.fillStyle = "#000000";
   ctx.arc(ox + 94, oy + 175, 3, 0, 2 * Math.PI);
   ctx.fill();
   ctx.beginPath();
   ctx.fillStyle = "#000000";
   ctx.arc(ox + 106, oy + 175, 3, 0, 2 * Math.PI);
   ctx.fill();
   ctx.beginPath();

   // Dessiner les défenses
   ctx.beginPath();
   ctx.strokeStyle = "#ffffff";
   ctx.lineWidth = 2;
   ctx.moveTo(ox + 110, oy + 170);
   ctx.lineTo(ox + 120, oy + 160);
   ctx.stroke();
   ctx.beginPath();
   ctx.moveTo(ox + 80, oy +  160);
   ctx.lineTo(ox + 90, oy + 170);
   ctx.stroke();

   // Dessiner le sourire 
   ctx.beginPath();
   ctx.strokeStyle = "#ffffff";
   ctx.lineWidth = 2;
   ctx.arc(ox + 100, oy + 180, 20, 1.95 * Math.PI, 0.6 * Math.PI);
   ctx.stroke();

   // Dessiner les pattes avant
   ctx.beginPath();
   ctx.fillStyle = "#8b4513";
   ctx.fillRect(ox + 90, oy + 210, 20, 50);
   ctx.beginPath();
   ctx.fillStyle = "#000000";
   ctx.fillRect(ox + 90, oy + 250, 20, 10);
   ctx.beginPath();
   ctx.fillStyle = "#8b4513";
   ctx.fillRect(ox + 130, oy + 210, 20, 50);
   ctx.beginPath();
   ctx.fillStyle = "#000000";
   ctx.fillRect(ox + 130, oy + 250, 20, 10);

   // Dessiner les pattes arrière
   ctx.beginPath();
   ctx.fillStyle = "#8b4513";
   ctx.fillRect(ox + 160, oy + 210, 20, 50);
   ctx.beginPath();
   ctx.fillStyle = "#000000";
   ctx.fillRect(ox + 160, oy + 250, 20, 10);
   ctx.beginPath();
   ctx.fillStyle = "#8b4513";
   ctx.fillRect(ox + 200, oy + 210, 20, 50);
   ctx.beginPath();
   ctx.fillStyle = "#000000";
   ctx.fillRect(ox + 200, oy + 250, 20, 10);
   ctx.beginPath();

   
}

  /**
   * Dessine la forme spécifique à cette classe
   * @param ctx contexte 2D du canvas
   */
  draw(ctx) {
    ctx.save()
    this.sanglier(ctx, this.x, this.y)    
    // restores the styles
    ctx.restore()
  }

  /**
   * get array of forms
   * @return {[Sanglier,...]}
   */
  static buildForms() {
    // create a new rectangle object using the Immeuble class
    let forms = []
    // ~~(Math.random() * 5) + 5 // max in [5..10]
    forms.push(new Sanglier(~~(Math.random() * 2000) , ~~(Math.random() * 500) ,100,100,'blue','pink', 1, true,50))
    forms.push(new Sanglier(~~(Math.random() * 2000) ,~~(Math.random() * 700) ,100,100,'blue','black', 1, false,50))
   



    // retourne un tableau d'objets de type Sanglier
    return forms
  }

}
