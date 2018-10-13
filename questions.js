/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
 var tailleString = function (texte) {
   var result = texte.length;
   // .length donne la taille d'une chaine de caractères
     return result;
 }
 var remplaceECar = function (texte) {
   var result = texte.replace('e',' ');
   // .replace remplace un caractère par un autre
     return result;
 }
 var concatString = function (texte1, texte2) {
   var texte1 = 'Le javascript est ';
   var texte2 = 'super';
     return texte1 + texte2;
     // autre méthode ( concaténation ):
     // return texte1.concat(texte2);
 }
 var afficherCar5 = function (texte) {
   var result = texte.charAt(4);
   // .charAt() donne la position d'un caractère
     return result;
 }
 var afficher9Car = function (texte) {
   var result = texte.substring(0,9);
   // var result = texte.slice(0,9);
   // slice : découpe / substring : prélève
     return result;
  // .substring() affiche les n premiers de caractères
 }
 var majusculeString = function (texte) {
   var result = texte.toUpperCase();
   // .tuUpperCase affiche la chaine de caractères en majuscule
     return result;
 }
 var minusculeString = function (texte) {
   var result = texte.toLowerCase();
   // .tuUpperCase affiche la chaine de caractères en minuscule
     return result;
 }
 var SupprEspaceString = function (texte) {
   var result = texte.trim();
   // .trim supprime les espaces au début et à la fin de la chaine de caractères
     return result;
 }
 var IsString = function (texte) {
   var result = typeof(texte) === 'string';
   // si le type du texte est strictement egal a chaine de caractère
     return result;
 }
 var AfficherExtensionString = function (texte) {
   var result = texte.substring(texte.lastIndexOf('j'));
   // autre méthode :
   // var result = texte.substring(texte.lastIndexOf('.')+1, texte.length);
     return result;
   // .substring retiens une sous chaine dans la chaine, .lastIndexOf part de la fin de la chaine et prend tout ce qui est apres le j
 var NombreEspaceString = function (texte) {
   var result = texte.split(' ').length - 1;
     return result;
    // .split divise la chaine de caractère, .length mentionne la longueur de celle ci
 }
 var InverseString = function (texte) {
   var result = texte.split('').reverse().join('');
     return result;
     // .split divise la chaine de caractère, .reverse inverse le sens et .join joint les caractères
 }

 /**
  * Exercices sur les nombres et les caluls mathématiques
  */
 var calculPuissance = function (x, y) {
   var result = Math.pow(x, y);
   // Math.pow calcule un chiffre à la puissance
     return result;
 }
 var valeurAbsolue = function (nombre) {
   var result = Math.abs(nombre);
   // Math.abs renvoie la valeur absolue du nombre
     return result;
 }
 var valeurAbsolueArray = function (array) {
   /* array = tableau des valeurs
 map va prendre les valeurs unes à unes
 et ensuite Math.abs calcul la valeur absolue de chacunes */
   var result = array.map(Math.abs);
     return result;
 }
 var sufaceCercle = function (rayon) {
   var result = Math.round (Math.PI *rayon*rayon);
   // Math.round arrondit le chiffre à l'entier supérieur
   // Math.PI = pi ( sert à calculer la surface d'un cercle )
     return result;
   //  autre méthode :
  // var surface = Math.PI * Math.pow(rayon, 2);
  // var result = Math.round(surface);
  // return result;

 }
 var hypotenuse = function (ab, ac) {
   var result = Math.hypot(ab, ac);
   // Math.hypot sert à calculer l'hypoténuse d'un triangle rectangle
     return result;
 }
 var calculIMC = function (poids, taille) {
   var result = Math.round((poids / (taille * taille)) * 100) / 100;
     return result;
 }
