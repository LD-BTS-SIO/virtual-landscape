import {AbstractForm} from './AbstractForm.js';

/**
 * Dessine un arbre
 */
export class Arbres extends AbstractForm {

  // you create new Rectangles by calling this as a function
  // these are the arguments you pass in
  // add default values to avoid errors on empty arguments
  constructor(
    x = 0,
    y = 0,
    width = 0,
    height = 0,
    fillColor = '',
    strokeColor = '',
    strokeWidth = 2,
    pesanteur = false,
    ordreConstruction = 100
  ) {
    super(x, y, width, height, fillColor, strokeColor, strokeWidth, pesanteur, ordreConstruction)
  }

  /**
   * Dessine la forme spécifique à cette classe
   * @param ctx contexte 2D du canvas
   */
  draw(ctx) {
    // saves the current styles set elsewhere
    // to avoid overwriting them
    ctx.save()

    // set the styles for this shape
    ctx.fillStyle = this.fillColor
    ctx.lineWidth = this.strokeWidth

    // create the *path*
    ctx.beginPath()
    ctx.strokeStyle = this.strokeColor
   
    // Dessin du tronc
    let troncWidth = this.width / 5;
    let troncHeight = this.height * 0.7;
    let troncX = this.x + (this.width - troncWidth) / 2;
    let troncY = this.y + this.height - troncHeight;
    ctx.rect(troncX, troncY, troncWidth, troncHeight);
    ctx.fillRect(troncX, troncY, troncWidth, troncHeight);
    
    // Dessin des feuilles
    ctx.fillStyle = "green";
    ctx.beginPath();
    let cercleX = this.x + this.width / 2;
    let cercleY = this.y + this.height * 0.3;
    let cercleRadius = this.width / 3;
    ctx.arc(cercleX, cercleY, cercleRadius, 0, 2 * Math.PI);
    ctx.fill();
    
    // draw the path to screen
    ctx.stroke()

    // restores the styles from earlier
    // preventing the colors used here
    // from polluting other drawings
    ctx.restore()
  }

  /**
   * get array of forms
   * @return {[Arbres,...]}
   */
  static buildForms() {
    let widthCase = 100;
    let max = Math.floor(Math.random() * 25) + 3
    let forms = []
    for (let i = 0; i < max; i++) {
      forms.push(new Arbres(
        Math.floor(Math.random() * window.innerWidth),
        Math.floor(Math.random() * 400) + 10,
        Math.floor(Math.random() * (widthCase) + 20),
        Math.floor(Math.random() * (widthCase * 2) + 30),
        'brown',
        'black',
        1,
        true
      ));
    }
    return forms
  }
}
