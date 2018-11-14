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

const quizz = {
    name:'Quizz',
    description:'Answer to the quizz to win a coin',
    questions:[{
        question: 'Name of Wonder Woman in the movie', 
        response: 'Dianna Prince',
    },{
        question: 'Name of Superman in the movie', 
        response: 'Clark Kent',
    },{
        question: 'Name of Wonder Batman in the movie', 
        response: 'Bruce Wayne',
    }], 
    score:0,  
    askAndAnswer(q) {
        const re = new RegExp(q.response, 'gi');
        const response  = prompt(q.question);
        return re.test(response) ?  1 : 0;
    },
    launch(){
        const score = this.questions    
        .map(q => this.askAndAnswer(q))
        .reduce((total, val)=> total += val);
        this.displayScore(score);
    },
    displayScore(score) {
        console.log(this.description + '\n' + 'Your score ' + score);
    }        
};

quizz.launch();
