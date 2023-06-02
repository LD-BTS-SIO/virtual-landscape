# Pour obtenir cela, j’ai tapé comme description : « dessin d'une forêt simple avec des fleurs contenant 5 sangliers, 3 renards et 2 cerfs », comme vous pouvez vois, malgré cette description très précise, j’ai obtenue une image « approximative » mais cela suffit à imaginer un canva similaire pouvant donner un résultat attendu.

## J'ai donc fais une première création, intitulée le « sanglier » , dont voici le code html :

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8"/>
    <title>Dessin d'un sanglier avec Canvas 2D</title>
  </head>
  <body>
    <canvas id="canvas" width="400" height="400"></canvas>
    <script>
      const canvas = document.getElementById("canvas");
      const ctx = canvas.getContext("2d");

      // Dessiner le corps
      ctx.fillStyle = "#8b4513";
      ctx.fillRect(100, 150, 120, 80);
      ctx.fill
      ctx.fillStyle = "#000000";
      ctx.fillRect(200, 150, 70, 80);
      ctx.fillStyle = "#8b4513";
      ctx.fillRect(270, 200, 60, 20);
  
      

      //Dessiner le bout de la queue
      ctx.beginPath();
      ctx.fillStyle = "#000000";
      ctx.arc(320, 210, 20, 0, 2 * Math.PI);
      ctx.fill();

      // Dessiner la tête
      ctx.beginPath();
      ctx.fillStyle = "#8b4513";
      ctx.arc(100, 160, 50, 0, 2 * Math.PI);
      ctx.fill();

      // Dessiner les oreilles
      ctx.beginPath();
      ctx.fillStyle = "#000000";
      ctx.arc(70, 115, 10, 0, 2 * Math.PI);
      ctx.fill();
      ctx.beginPath();
      ctx.fillStyle = "#ff69b4";
      ctx.arc(70, 115, 5, 0, 2 * Math.PI);
      ctx.fill();
      ctx.beginPath();
      ctx.fillStyle = "#000000";
      ctx.arc(130, 115, 10, 0, 2 * Math.PI);
      ctx.fill();
      ctx.beginPath();
      ctx.fillStyle = "#ff69b4";
      ctx.arc(130, 115, 5, 0, 2 * Math.PI);
      ctx.fill();

      // Dessiner les yeux
      ctx.beginPath();
      ctx.fillStyle = "#ffffff";
      ctx.arc(83, 146, 5, 0, 2 * Math.PI);
      ctx.fill();
      ctx.beginPath();
      ctx.fillStyle = "#ffffff";
      ctx.arc(123, 146, 5, 0, 2 * Math.PI);
      ctx.fill();
      ctx.beginPath();
      ctx.fillStyle = "#000000";
      ctx.arc(80, 150, 5, 0, 2 * Math.PI);
      ctx.fill();
      ctx.beginPath();
      ctx.fillStyle = "#000000";
      ctx.arc(120, 150, 5, 0, 2 * Math.PI);
      ctx.fill();

      // Dessiner le nez
      ctx.beginPath();
      ctx.fillStyle = "#ff69b4";
      ctx.arc(100, 175, 10, 0, 2 * Math.PI);
      ctx.fill();
      ctx.beginPath();
      ctx.fillStyle = "#000000";
      ctx.arc(94, 175, 3, 0, 2 * Math.PI);
      ctx.fill();
      ctx.beginPath();
      ctx.fillStyle = "#000000";
      ctx.arc(106, 175, 3, 0, 2 * Math.PI);
      ctx.fill();
      ctx.beginPath();

      // Dessiner les défenses
      ctx.beginPath();
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 2;
      ctx.moveTo(110, 170);
      ctx.lineTo(120, 160);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(80, 160);
      ctx.lineTo(90, 170);
      ctx.stroke();

      // Dessiner le sourire 
      ctx.beginPath();
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 2;
      ctx.arc(100, 180, 20, 1.95 * Math.PI, 0.6 * Math.PI);
      ctx.stroke();

      // Dessiner les pattes avant
      ctx.beginPath();
      ctx.fillStyle = "#8b4513";
      ctx.fillRect(90, 210, 20, 50);
      ctx.beginPath();
      ctx.fillStyle = "#000000";
      ctx.fillRect(90, 250, 20, 10);
      ctx.beginPath();
      ctx.fillStyle = "#8b4513";
      ctx.fillRect(130, 210, 20, 50);
      ctx.beginPath();
      ctx.fillStyle = "#000000";
      ctx.fillRect(130, 250, 20, 10);

      // Dessiner les pattes arrière
      ctx.beginPath();
      ctx.fillStyle = "#8b4513";
      ctx.fillRect(160, 210, 20, 50);
      ctx.beginPath();
      ctx.fillStyle = "#000000";
      ctx.fillRect(160, 250, 20, 10);
      ctx.beginPath();
      ctx.fillStyle = "#8b4513";
      ctx.fillRect(200, 210, 20, 50);
      ctx.beginPath();
      ctx.fillStyle = "#000000";
      ctx.fillRect(200, 250, 20, 10);
      ctx.beginPath();
    </script>
  </body>
</html>




Résultat :

Voici le code javascript associé pour l'intégrer au paysage :

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
   ctx.fillRect(ox + 200, oy +  150, 70, 80);
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
   ctx.moveTo(ox + 80, oy +  160);
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



2ème création : Le renard

Le code html associé :

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8"/>
    <style>
      canvas {
        background-color: #f2f2f2;
      }
    </style>
    <script>
      window.onload = function() {
        // Récupérer le canvas
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");

        // Dessiner le corps
        ctx.fillStyle = "#e3783b";
        ctx.fillRect(120, 150, 170, 80);
        ctx.fill();
        ctx.fillStyle = "#e3783b";
        ctx.fillRect(290, 150, 30, 70);
        ctx.fill();
        ctx.fillStyle = "#e3783b";
        ctx.fillRect(290, 150, 30, 70);
        ctx.fill();
        ctx.fillStyle = "#e3783b";
        ctx.fillRect(290, 150, 30, 70);
        ctx.fill();
        ctx.fillStyle = "#000000";
        ctx.fillRect(290, 150, 5, 90);
        ctx.fill();
        ctx.fill();
        ctx.fillStyle = "#000000";
        ctx.fillRect(320, 150, 5, 86);
        ctx.fill();
        ctx.fillStyle = "#000000";
        ctx.fillRect(290, 220, 30, 10);
        ctx.fill();
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(290, 226, 35, 30)
      

        // Dessiner la tête
        ctx.beginPath();
        ctx.fillStyle = "#e3783b";
        ctx.arc(100, 160, 50, 0, 2 * Math.PI);
        ctx.fill();

        // Dessiner les oreilles
        ctx.beginPath();
        ctx.fillStyle = "#e3783b";
        ctx.arc(70, 115, 20, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = "#000000";
        ctx.arc(70, 115, 10, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = "#e3783b";
        ctx.arc(130, 115, 20, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = "#000000";
        ctx.arc(130, 115, 10, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        
        // Dessiner les yeux
        ctx.beginPath();
        ctx.fillStyle = "#000000";
        ctx.arc(80, 150, 10, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = "#000000";
        ctx.arc(120, 150, 10, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = "#ffffff";
        ctx.arc(83, 146, 5, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = "#ffffff";
        ctx.arc(123, 146, 5, 0, 2 * Math.PI);
        ctx.fill();

        // Dessiner le nez
        ctx.beginPath();
        ctx.fillStyle = "#000000";
        ctx.arc(100, 175, 5, 0, 2 * Math.PI);
        ctx.fill();

    
       // Dessiner le sourire 
       ctx.beginPath();
       ctx.strokeStyle = "#000000";
       ctx.lineWidth = 2;
       ctx.arc(100, 180, 20, 1.95 * Math.PI, 0.6 * Math.PI);
       ctx.stroke();

        // Dessiner les pattes avants
        ctx.beginPath();
        ctx.fillStyle = "#e3783b";
        ctx.fillRect(120, 230, 20, 50);
        ctx.beginPath();
        ctx.fillStyle = "#e3783b";
       ctx.fillRect(250, 230, 20, 50);
       ctx.beginPath(); 
        ctx.fillStyle = "#000000";
        ctx.fillRect(120, 268, 20, 20);
        ctx.beginPath();
        ctx.fillStyle = "#000000";
        ctx.fillRect(250, 268, 20, 20);
      

        
      }
    </script>
  </head>
  <body>
    <canvas id="canvas" width="600" height="400"></canvas>
  </body>
</html>



Résultat :

Code JavaScript :

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
  ctx.fillRect(ox + 290, oy +  150, 30, 70);
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




Troisième création : Le cerf :
code html :
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8"/>
    <title>Dessin d'un cerf avec Canvas 2D</title>
  </head>
  <body>
    <canvas id="canvas" width="800" height="800"></canvas>
    <script>
      const canvas = document.getElementById("canvas");
      const ctx = canvas.getContext("2d");

      // Dessiner le corps
      ctx.fillStyle = "#8b4513";
      ctx.fillRect(150, 150, 300, 180);
      ctx.fill
      ctx.fillStyle = "#F5F5DC";
      ctx.fillRect(180, 300, 250, 20);
      ctx.fillStyle = "#F5F5DC";
      ctx.fillRect(180, 180, 20, 120);
      ctx.fillStyle = "#8b4513";
      ctx.fillRect(440, 270, 80, 20);
      ctx.beginPath();
      ctx.fillStyle = "#F5F5DC";
      ctx.arc(520, 280, 20, 0, 2 * Math.PI);
      ctx.fill();

      // Dessiner la tête
      ctx.beginPath();
      ctx.fillStyle = "#8b4513";
      ctx.arc(150, 160, 50, 0, 2 * Math.PI);
      ctx.fill();
    // Dessiner le sourire 
       ctx.beginPath();
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 2;
      ctx.arc(150, 180, 20, 1.95 * Math.PI, 0.6 * Math.PI);
      ctx.stroke();

      // Dessiner les bois

/*bois droit*/
ctx.beginPath();
ctx.fillStyle = "#D3D3D3";
ctx.moveTo(160, 120);
ctx.lineTo(200, 100);
ctx.lineTo(230, 60);
ctx.lineTo(250, 50);
ctx.lineTo(260, 55);
ctx.lineTo(240, 70);
ctx.lineTo(210, 100);
ctx.lineTo(180, 130);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "#D3D3D3";
ctx.moveTo(220, 60);
ctx.lineTo(250, 30);
ctx.lineTo(260, 35);
ctx.lineTo(230, 65);
ctx.fill();


// bois gauche
ctx.beginPath();
ctx.fillStyle = "#D3D3D3.";
ctx.moveTo(140, 120);
ctx.lineTo(100, 100);
ctx.lineTo(70, 60);
ctx.lineTo(50, 50);
ctx.lineTo(40, 55);
ctx.lineTo(60, 70);
ctx.lineTo(90, 100);
ctx.lineTo(120, 130);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "#D3D3D3";
ctx.moveTo(80, 60);
ctx.lineTo(50, 30);
ctx.lineTo(40, 35);
ctx.lineTo(70, 65);
ctx.fill();




      // Dessiner les yeux
      ctx.beginPath();
      ctx.fillStyle = "#ffffff";
      ctx.arc(130, 146, 5, 0, 2 * Math.PI);
      ctx.fill();
      ctx.beginPath();
      ctx.fillStyle = "#ffffff";
      ctx.arc(170, 146, 5, 0, 2 * Math.PI);
      ctx.fill();
      ctx.beginPath();
      ctx.fillStyle = "#000000";
      ctx.arc(127, 150, 5, 0, 2 * Math.PI);
      ctx.fill();
      ctx.beginPath();
      ctx.fillStyle = "#000000";
      ctx.arc(167, 150, 5, 0, 2 * Math.PI);
      ctx.fill();

      // Dessiner le nez
      ctx.beginPath();
      ctx.fillStyle = "#000000";
      ctx.arc(150, 175, 5, 0, 2 * Math.PI);
      ctx.fill();

      // Dessiner les pattes avant
      ctx.beginPath();
      ctx.fillStyle = "#8b4513";
      ctx.fillRect(150, 320, 20, 160);
      ctx.beginPath();
      ctx.fillStyle = "#000000";
      ctx.fillRect(150, 480, 20, 10);
      ctx.beginPath();
      ctx.fillStyle = "#8b4513";
      ctx.fillRect(350, 320, 20, 160);
      ctx.beginPath();
      ctx.fillStyle = "#000000";
      ctx.fillRect(350, 480, 20, 10);

      // Dessiner les pattes arrière
      ctx.beginPath();
      ctx.fillStyle = "#8b4513";
      ctx.fillRect(250, 320, 20, 160);
      ctx.beginPath();
      ctx.fillStyle = "#000000";
      ctx.fillRect(250, 480, 20, 10);

      ctx.beginPath();
      ctx.fillStyle = "#8b4513";
      ctx.fillRect(430, 320, 20, 160);
      ctx.beginPath();
      ctx.fillStyle = "#000000";
      ctx.fillRect(430, 480, 20, 10);
    </script>
  </body>
</html>



Résultat :

Code JavaScript :

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
ctx.lineTo(ox + 70, oy +  60);
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



Quatrième création : Génération aléatoire des arbres :

Code JavaScript:

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
      ))
    }
    return forms
  }

Résultat : 

Voici un résultat final possible de ceci, avec toutes les créations rassemblées :

 

FIN

ANNEXE:   Voici les explications «canva» permettant la réalisation de ce projet :






API Canvas 2D (ou CanvasRenderingContext2D) :  interface de programmation en JavaScript pour dessiner des graphiques et des animations en 2D sur une page web. 
-Elle permet de dessiner des formes, des images, du texte, des gradients et des motifs en utilisant des méthodes comme fillRect(), drawImage(), fillText(), etc. 
-Elle offre également la possibilité de modifier des propriétés telles que la couleur, l'épaisseur du trait, le style de ligne, la transparence et bien plus encore. L'API Canvas 2D est largement utilisée pour créer des jeux, des visualisations de données et des applications interactives sur le web.



DOM:    Le Document Object Model ou DOM (pour modèle objet de document) est une interface de programmation pour les documents HTML, XML et SVG. Il fournit une représentation structurée du document sous forme d'un arbre et définit la façon dont la structure peut être manipulée par les programmes, en termes de style et de contenu. Le DOM représente le document comme un ensemble de nœuds et d'objets possédant des propriétés et des méthodes. Les nœuds peuvent également avoir des gestionnaires d'événements qui se déclenchent lorsqu'un événement se produit. Cela permet de manipuler des pages web grâce à des scripts et/ou des langages de programmation. Les nœuds peuvent être associés à des gestionnaires d'événements. Une fois qu'un événement est déclenché, les gestionnaires d'événements sont exécutés.



Canvas: L'élément <canvas>a seulement deux attributs :width et height (« largeur » et « hauteur »). Ces deux attributs sont optionnels et peuvent aussi être fixés à travers le DOM. Quand les attributs width et height ne sont pas spécifiés, le canvas sera initialement large de 300 pixels et haut de 150 pixels. Les dimensions du canvas peuvent être modifiés par du CSS, mais l'image sera dessinée selon les valeurs width et height du canvas et ensuite étirée pour afficher dans l'espace donné par le CSS.

Exemple :
 <canvas id="stockGraph" width="150" height="150">
  current stock price: $3.15 + 0.15
</canvas>

<canvas id="clock" width="150" height="150">
  <img src="images/clock.png" width="150" height="150" alt="une horloge"/>
</canvas>



CanvasRenderingContext2D.beginPath() :  méthode de l'API Canvas 2D permet de commencer un nouveau chemin en vidant la liste des sous-chemins. Appelez cette méthode quand vous voulez créer un nouveau chemin. 

CanvasRenderingContext2D.arc() :   méthode  de l'API Canvas 2D permet d'ajouter un arc de cercle au tracé, en le centrant aux positions _(x, y)* et avec un rayon r qui démarre à angleDépart et qui finit à angleFin, dans la direction de sensAntiHoraire (par défaut en sens horaire).

     CanvasRenderingContext2D.moveTo() :  méthode de l'API Canvas 2D déplace le point de départ d'un nouveau sous-chemin vers les coordonnées (x, y).


CanvasRenderingContext2D.stroke() : méthode de l'API Canvas 2D qui dessine le chemin actuel ou donné avec le style de trait actuel utilisant la règle d'enroulement non nulle.
CanvasRenderingContext2D.save() : méthode de l'API Canvas 2D API qui  enregistre l'état complet du canvas en plaçant l'état courant dans une stack.

 CanvasRenderingContext2D.fillRect() : méthode de l'API 2D des Canvas dessine un rectangle plein aux coordonnées (x, y), aux dimensions déterminées par largeur et hauteur et au style déterminé par l'attribut fillStyle.

CanvasRenderingContext2D.fillStyle :   propriété de l'API Canvas 2D qui spécifie la couleur ou style à utiliser à l'intérieur des formes. La valeur par défaut est #000 (black)

arc(x,y,r,startangle,endangle) : créer un arc/une courbe. Pour créer un cercle avec arc() : Définissez l'angle de départ sur 0 et l'angle de fin sur 2*Math.PI. Les paramètres x et y définissent les coordonnées x et y du centre du cercle. Le paramètre r définit le rayon du cercle.
createLinearGradient( x,y,x1,y1 ) - crée un dégradé linéaire
createRadialGradient( x,y,r,x1,y1,r1 ) - crée un dégradé radial/circulaire



Tracer une ligne
Pour tracer une ligne droite sur un canevas, utilisez les méthodes suivantes :
moveTo( x,y ) - définit le point de départ de la ligne
lineTo( x,y ) - définit le point final de la ligne
Pour tracer réellement la ligne, vous devez utiliser l'une des méthodes "ink", comme stroke().


