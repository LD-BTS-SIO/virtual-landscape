## Pour obtenir cela, j’ai tapé comme description : « dessin d'une forêt simple avec des fleurs contenant 5 sangliers, 3 renards et 2 cerfs », comme vous pouvez voir, malgré cette description très précise, j’ai obtenu une image « approximative » mais cela suffit à imaginer un canvas similaire pouvant donner un résultat attendu.

### J'ai donc fait une première création, intitulée le « sanglier », dont voici le code HTML :

[source,html]
----
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
      ctx.fillStyle = "#000000";
      ctx.fillRect(200, 150, 70, 80);
      ctx.fillStyle = "#8b4513";
      ctx.fillRect(270, 200, 60, 20);

      // Dessiner le bout de la queue
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
      // Continuer avec le reste du dessin...
    </script>
  </body>
</html>
----

Et voici le code JavaScript associé pour l'intégrer au paysage :

[source,javascript]
----
import { AbstractForm } from './AbstractForm.js';

export class Sanglier extends AbstractForm {
  // ajouter des valeurs par défaut pour éviter les erreurs sur les arguments vides
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

  sanglier(ctx, dx, dy) {
    // Continuer avec le dessin du sanglier...
  }

  // Fonction pour dessiner la forme spécifique à cette classe
  draw(ctx) {
    ctx.save()
    this.sanglier(ctx, this.x, this.y)
    // restaurer les styles
    ctx.restore()
  }

  // Fonction pour créer un tableau d'objets de type Sanglier
  static buildForms() {
    let forms = [];
    forms.push(new Sanglier(~~(Math.random() * 2000), ~~(Math.random() * 500), 100, 100, 'blue', 'pink', 1, true, 50));
    forms.push(new Sanglier(~~(Math.random() * 2000), ~~(Math.random() * 700), 100, 100, 'blue', 'black', 1, false, 50));
    // Continuer avec d'autres formes si nécessaire...
    return forms;
  }
}
----
