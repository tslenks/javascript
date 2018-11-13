/* La méthode sort() trie les données par ordre alphabétique, 
- pour des String, c'est ok 
- pour les nombres, ils sont convertis comme des strings et donne des faux resultats, pour éviter ça, cette méthode a un callback qui permet de
traiter les eléments d'un array
*/
const list = [1, 2, 11, 4, 14, 3, 7, 3, 8];

/** ca marche ici mais si le nombre est trop grand, il y aura des overflow et va tronquer les nombres */
function sortNumber(a, b) {
    return a - b; // ascendant, (b-a) for descendant
}

/** ca marche et prend en compte les overflow */
function sortNumberWithOverflowCheck(a, b) {
    if (a < b) {
        return -1;
    } else if( a === b) {
        return 0;
    } else if (a > b) {
        return 1;
    }
}

document.body.append(`** After sorted ::  ${list.sort(sortNumberWithOverflowCheck).join('--')} \n`);