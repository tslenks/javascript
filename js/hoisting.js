/**
 * le Hoisting est un processus qui permet de ramener une valeur au début d'un bloc de code ou elle est utilisée malgré sa position d'appel
 * il existe 2 types: variable Hoisting, function hoisting
 */
hoisting(); // cela fonctionne ==> ok ok function hoisting
function hoisting() {
    console.log('Hoisting accepted');
}
 /** ---variable hoisting, pas applicable dans le cas d'une variable en tant que méthode--- */
hoistingFalse();
var hoistingFalse = function() {
    console.log('hoisting false')
};