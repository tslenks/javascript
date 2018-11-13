// En js les fonctions mathématiques sont souvent très utilisées
Math.abs(-12);  // absolu

// Arrondit à l'entier suivant
Math.ceil(1.2);  //  2
Math.ceil(-4.2); // -4

// Arrondit à l'entier inférieure
Math.floor(4.2); // 4
Math.floor(-4.2); // -5

// Arrondit à la valeur supérieure ou inférieure selon la décimale
Math.round(4.5); // 5
Math.round(4.4999);  // 4

// Exponentielle
Math.exp(1); // constant d'Euler 2.7182...
Math.exp(0); // 1

// Puissance (nombre, puissance)
Math.pow(3, 2);
Math.pow(27, 1/3); // 9

// Logarithme
Math.log(-2); // NAN
Math.log(0); // - infinité
Math.log(1); // 0

// Retourne la maximale des nombres passés en paramètres
Math.max(1,2,3);
Math.min(1,2,3); // pour la valeur min

/** Random:  retourne des valeurs aléatoires
 * si aucune valeur n'est ajoutée (Math.random()), retourne une valeur aléatoire entre 0 et 1 avec des décimales
 * Pour avoir un nombre supérieur à 0, il faut donc multiplier ce random par ce nombre, ce qui est logique 
 *  Pour avoir un nombre entier, il faut ajouter l'arrondissement floor car ce sera toujours un nombre inférieur
 */
Math.random(); // 0.0 <= v <= 1
6 * Math.random(); // 0.0 <= v <= 6.0
Math.floor(6 * Math.random()); // 0 <= v <= 6

