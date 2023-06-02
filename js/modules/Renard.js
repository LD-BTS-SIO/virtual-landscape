import { AbstractForm } from './AbstractForm.js';


export class Renard extends AbstractForm {
  // Ici le constructeur prend plusieurs arguments avec des valeurs par défaut. 
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
  ) 
  
  
  

  {
    super(x, y, width, height, fillColor, strokeColor, strokeWidth, pesenteur, ordreConstruction)
  }

   renard(ctx, dx, dy) {
    let ox = dx
    let oy = dy
  // Dessiner le corps
  ctx.fillStyle = "#e3783b";
  ctx.fillRect(ox + 120, oy + 150, 170, 80);
  ctx.fill();
  ctx.fillStyle = "#e3783b";
  ctx.fillRect(ox + 290, oy + 150, 30, 70);
  ctx.fill();
  ctx.fillStyle = "#e3783b";
  ctx.fillRect(ox + 290, oy + 150, 30, 70);
  ctx.fill();
  ctx.fillStyle = "#e3783b";
  ctx.fillRect(ox + 290, oy +  150, 30, 70);
  ctx.fill();
  ctx.fillStyle = "#000000";
  ctx.fillRect(ox + 290, oy + 150, 5, 90);
  ctx.fill();
  ctx.fill();
  ctx.fillStyle = "#000000";
  ctx.fillRect(ox + 320, oy + 150, 5, 86);
  ctx.fill();
  ctx.fillStyle = "#000000";
  ctx.fillRect(ox + 290, oy + 220, 30, 10);
  ctx.fill();
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(ox + 290, oy + 226, 35, 30)


  // Dessiner la tête
  ctx.beginPath();
  ctx.fillStyle = "#e3783b";
  ctx.arc(ox + 100, oy + 160, 50, 0, 2 * Math.PI);
  ctx.fill();

  // Dessiner les oreilles
  ctx.beginPath();
  ctx.fillStyle = "#e3783b";
  ctx.arc(ox + 70, oy + 115, 20, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.fillStyle = "#000000";
  ctx.arc(ox + 70, oy + 115, 10, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.fillStyle = "#e3783b";
  ctx.arc(ox + 130, oy + 115, 20, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.fillStyle = "#000000";
  ctx.arc(ox + 130, oy + 115, 10, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  
  // Dessiner les yeux
  ctx.beginPath();
  ctx.fillStyle = "#000000";
  ctx.arc(ox + 80, oy + 150, 10, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.fillStyle = "#000000";
  ctx.arc(ox + 120, oy + 150, 10, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.fillStyle = "#ffffff";
  ctx.arc(ox + 83, oy + 146, 5, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.fillStyle = "#ffffff";
  ctx.arc(ox + 123, oy + 146, 5, 0, 2 * Math.PI);
  ctx.fill();

  // Dessiner le nez
  ctx.beginPath();
  ctx.fillStyle = "#000000";
  ctx.arc(ox + 100, oy + 175, 5, 0, 2 * Math.PI);
  ctx.fill();

    // Dessiner la bouche
  // Dessiner le sourire 
  ctx.beginPath();
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 2;
  ctx.arc(ox + 100, oy + 180, 20, 1.95 * Math.PI, 0.6 * Math.PI);
  ctx.stroke();


  // Dessiner les pattes avants
  ctx.beginPath();
  ctx.fillStyle = "#e3783b";
  ctx.fillRect(ox + 120, oy + 230, 20, 50);
  ctx.beginPath();
  ctx.fillStyle = "#e3783b";
 ctx.fillRect(ox + 250, oy + 230, 20, 50);
 ctx.beginPath(); 
  ctx.fillStyle = "#000000";
  ctx.fillRect(ox + 120, oy + 268, 20, 20);
  ctx.beginPath();
  ctx.fillStyle = "#000000";
  ctx.fillRect(ox + 250, oy + 268, 20, 20);


   
}

  /**
   * Dessine la forme spécifique à cette classe
   * @param ctx contexte 2D du canvas
   */
  draw(ctx) {
    ctx.save()
    this.renard(ctx, this.x, this.y)    
    // restores the styles
    ctx.restore()
  }

  /**
   * get array of forms
   * @return {[Renard,...]}
   */
  static buildForms() {
    // create a new rectangle object using the Immeuble class
    let forms = []
    // ~~(Math.random() * 5) + 5 // max in [5..10]
    forms.push(new Renard(~~(Math.random() * 2000) , ~~(Math.random() * 500) ,100,100,'blue','pink', 1, true,50))
    forms.push(new Renard(~~(Math.random() * 2000) ,~~(Math.random() * 700) ,100,100,'blue','black', 1, false,50))
   


    

    // retourne un tableau d'objets de type Renard
    return forms
  }

}

