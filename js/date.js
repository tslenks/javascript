// Instanciation d'une nouvelle date
const date = new Date();
console.log(date);              // Fri Oct 12 2018 11:57:27 GMT+0300 (heure normale d’Afrique de l’Est)
console.log(date.toString());   // Fri Oct 12 2018 11:57:27 GMT+0300 (heure normale d’Afrique de l’Est)

// on peut mettre plusieurs types de paramètres à ce constructeur pour initialiser une date
const christmas = new Date('2014 12 25');
console.log(christmas.toString());      // Thu Dec 25 2014 00:00:00 GMT+0300 (heure normale d’Afrique de l’Est)
console.log(christmas.toDateString());  // Thu Dec 25 2014

const d1 = new Date('16 December 2014'); // tant que l'interpreteur peut comprendre que c'est un mois, il va le convertir en date
console.log('d1', d1);

const d2 = new Date('Saturday, July 18, 2018'); // tant que l'interpreteur peut comprendre que c'est un mois, il va le convertir en date
console.log('d2', d2.toString()); // Ici le jour est faux car la date est normalement le mercredi donc  c'est ce jour qui sera affiché

/* Une autre forme du constructeur est le suivant
 * const d3 = new Date(year, month, day, hour, minutes, seconds, millisecons);
 * On peut ommettre les paramètres de droite suivant les opérations qu'on veut
 * NE PAS OUBLIER:: le MOIS commence par 0
 */
const d3 = new Date(2018, 9, 12);
console.log('d3', d3.toString()); // Fri Oct 12 2018 00:00:00 GMT+0300 (heure normale d’Afrique de l’Est)

/**
 * Utiliser les dates avec les timestamp (nombre entier représentant en millisecond une date calculé depuis le 1er Janvier 1970 (The Epoch))
 */
const d4 = new Date(1414018800000);
console.log('d4', d4.toString()); // Thu Oct 23 2014 02:00:00 GMT+0300 (heure normale d’Afrique de l’Est)

/**
 * les méthodes pour permettre de manipuler les dates
 * UTC  Coordinated Universal Time :: standard that is defined by the scientific community
 * GMT Greenwich Mean Time
 * (0: Sunday, 6 Saturday)
 */
console.log('day', d4.getDay());            // 4   
console.log('utcDay', d4.getUTCDay());      // 3
console.log('utcDate', d4.getUTCDate());    // 22
console.log('date', d4.getDate());          // 23
console.log('getTime', d4.getTime());       // 1414018800000 convertis la date en timestamp
                                            // cela permet de facilement comparer les dates ou de pouvoir ajouter des dates
console.log('getTimeCalculate', new Date(d4.getTime() - 6 * 1000 * 60 * 60 * 24));
// Les paramètres sont comme suit
    // 1000 : ms
    // 60 : 60 s
    // 60 min
    // 24 heure

// Pour connaître la difference entre la zone locale et l'UTC, la différence est en minute
console.log('UTCDecalage', new Date().getTimezoneOffset()); // -180 min<=> - 3h

// ========================
// Pour les setter methodes, c'est la même chose que pour les getters
const d5 = new Date();
/*d5.setDate(14);
d5.setFullYear(2018);
d5.setMonth(3);*/
d5.setTime(1447200000000);
console.log('d5', d5);