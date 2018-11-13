// Ces sont des paternes qui permettent de trouver des chaînes ou des portions de chaînes de caractères dans une expression

// Déclaration : soit litterale, soit instanciation
const reLitterale = /\w+ing/; // paterene pour trouver tous les mots qui se terminent par  "ing"
const reInstanciation = new RegExp('\w+ing','g');

// les méthodes
    // test () :: booleen 
console.log(reLitterale.test('joking') ? 'found' : 'not found'); // found
    // exec () :: retourne le premier mot contenant le paterne
console.log(reLitterale.exec('joking managing'));
    
// Grouper un ensemble de caractères, mettre des crochets
const vowel = /[aoeiuy]/; // retourne le mot si une des voyelles est présente dans le mot

// Représentation d'une sequence 
const sequenceChar = /[A-Za-z]/; // retourne toutes le mots contenant les lettres en majuscule de A à Z et de a à z
const sequenceNumber = /[0-9]/;

// Lorsque c'est une séquence, on peut mettre une négation grâce au mot clé ^ à mettre au début
const sequenceNegation = /[^0-9]/;  // représente tous les chaînes qui ne contiennent pas de nombre
const sequenceNegation1 = /[^A-Z]/; // représente tous les chaînes qui ne contiennent pas de lettre majuscules

// Combinaison de groupes
const combinedGroup = /[Jj][aeiou]v[aeiou]/; // retourne les mots avec j minuscule ou J majuscule suivi d'une voyelle suivi de v puis suivi d'une autre voyelle
console.log('test 1', combinedGroup.test('javascript')); // true
console.log('test 2', combinedGroup.test('jive')); // true
console.log('test 3', combinedGroup.test('jiave')); // false  car il y a 2 voyelles qui se suivent

/**
 * les propriétés des expressions régulières
 * Les .r sont des objets et ont des propriétés
 * @property {String}  global (flag: g) permet aux patternes de retourner tous les résultats correspondants
 * @property {String}  ignoreCase (flag: i) permet d'être insensible à la casse 
 * @property {String}  multiline (flag: m) permet de regarder sur plusieurs lignes. Par défaut le pattern s'arrête à la fin de la ligne
 */
const caseSensitive = /java/i;
const global = /java/ig;
console.log('i',caseSensitive.test('JaVAscript is a language like c++, JavaEE, java, it permit')); // true
console.log('global', global.exec('JaVAscript is a language like c++, JavaEE, java, it permit')); // [jaVA]

/**
 * les métacaractères ou les caractères spéciaux en regexp
 *
 */
const anyMatch = /./;           // correspond à tout
const anyWordMatch = /\w/;      // correspond à [A-Za-z_]
const anyNonWordMatch = /\W/;   // correspond à [^A-Za-z_]
const anydigit = /\d/;          // correspond à [0-9]
const anyNondigit = /\D/;       // correspond à [^0-9]
const anyWhiteSpaceCharacter =  /\s/; // correspond à [\t\r\n\f]
const anyNonWhiteSpaceCharacter=  /\S/; // correspond à  [^\t\r\n\f]

/**
 * Les modificateurs
 */
const nOccurence = /a{n}/;      // renvoie true si a est repeté n fois
const nAtLeast = /a{n,}/;       // renvoie true si a est répété au moins n fois
const nAtMore = /a{,n}/;        // renvoie true si a est répété au plus n fois
const nBetween = /a{n,m}/;      // renvoie true si a est repétés entre n et m fois
const beginWith = /^test/;      // renvoie true si le mot commence par test
const endWith = /t[aeiouy]+st$/i;        // renvoie true si le mot se termine par test
console.log(endWith.test('ArianeEst')); // false
console.log(endWith.test('Arianetyst')); // true

/**
 * Les méthodes de String qui peuvent prendre en paramètres les ER
 * split()
 * match()
 */
console.log('Split By Space'.split(/\s+/));
console.log('match ','Split By Space or ice can roll the dice and it is nice'.match(/[ce]+/));  // retourne la première ce trouvée
console.log('match with g','Split By Space or ice can roll the dice and it is nice'.match(/[ce]+/g)); // retourne toute les ce