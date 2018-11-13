const br  = document.createElement('br');
const obj = {
    prop1: 1,
    prop2: 'Sart',
    objFn: () => {
        console.log('myFn');
    },
};

// Permet de vérifier la présence d'un objet
if (obj.hasOwnProperty('prop1')) {
    const div = document.createElement('div');
    const text = document.createTextNode(`Obj property:: ${obj.prop1}`);
    div.appendChild(text);
    document.body.appendChild(div);
}

// boucle à utiliser            : for  const key in object
// Suppression d'une propriété  : delete obj.property
// JSON : JavaScript Object Notation: c'est la representation en chaîne de caractère d'un objet
const ex = '{"name":"Exemple","real name":"BW", "allies":["rob","superman"]}';

// convert a Json to Object
const  exToObject = JSON.parse(ex);
// loop by key
Object.keys(exToObject).forEach((key) => {
    const div = document.createElement('div');
    const text = document.createTextNode(`${key} ==> ${exToObject[key]}`);
    div.appendChild(text);
    document.body.appendChild(div);
});
document.body.appendChild(br);
// loop by values
Object.values(exToObject).forEach(val => {
    const div = document.createElement('div');
    const text = document.createTextNode(`value: ${val}`);
    div.appendChild(text);
    document.body.appendChild(div);
});
