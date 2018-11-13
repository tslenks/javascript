
/***
 *  0xAD: nombre hexadécimal (commencant par 0x)
 *  1e3 = 1000, 1e+3 1E+3
 *  2.5e-3 = 0.0025
 *  (5).toExponential = 5eO
 *  (+,-)Infinity is a special error value for js to tell it is too big or 1/0 = Infinity
 *  number.toString(wantedBase) wantedBase(10, 16, 8, 2 decimal, hexa, oct, binaire)
 * !!val to telling the negation of the negation
 */

 // To interact with the interface
 /*var answer = prompt('Have You done this before ?');
 document.body.append('Answer is ::' + answer);
 document.body.append('<br/><br/>');*/

 //tab manipulation
 pizzas = ["a","b","c","d", "e"];
 // return new array with the 3rd index and the fourth index
 // the 5th (0 -> 4) is not included
 // document.body.append('Result is ::' + pizzas.slice(2,4));

 var quiz = [
    ["What is Superman's real name?","Clarke Kent"],
    ["What is Wonderwoman's real name?","Dianna Prince"],
    ["What is Batman's real name?","Bruce Wayne"]
];

/*let score = 0;
let goodAnswer='';
let sep = '';
quiz.map(qr => {
    var answer = prompt(qr[0]);
    if(answer === qr[1]){
        goodAnswer += sep+qr[1];
        sep=", ";
        score ++;
    }else{
        alert('wrong');
    }
});
document.body.append('** Quiz score ::' + goodAnswer + score);*/

// if a variable is not declared in a function, so it is interpreted as a global variable
/**
 * function test() {
 *  c = 6;
 * }
 * console.log(c) ==> 6 // because c is not declared as a scope function
 */

 // A function that passed as function parameter is a "callback"     function
 /**
  * function pizza(topping, callback) {
        console.log("This is a " + topping + " pizza");
        callback();
    }

    or we can give the calback function definition directly in the function
    function pizza(topping, function(){
        console.log("The pizza has been delivered.");
    }) {
        // ins        
    }

//Use of callback

function pizza(string, callback){
    document.body.append("waiting for delivering.");
    callback();
}

pizza("Ham & Pineapple",function(){
    setTimeout(() => {
        document.body.append("The pizza has been delivered.");
    }, 3000);
});

function mean(values, callback) {
var total = 0;
for(var i=0, max = values.length; i < max; i++) {
if (typeof callback === "function") {
total += callback(values[i]);
} else {
total += values[i];
}
}
return total/max;
}

var sales = [ 100, 230, 55];
totalAfterTaxSales = sales
    .map( function(amount) {
        return amount * 1.15; // add 15% sales tax
    })
    .reduce( function(prev,current){
        return prev + current;
    });
    >> 442.75
 */
// The trick here is to not assigned any value in the function so that it becomes a globla variable
// even if it is in a function
/*function ask(question) {
    return  prompt(question);
}

function gameOver(){
    document.body.append('** Quiz scoress ::  ' + goodAnswer + " Total score ::"+ score);
}

function play(quiz){
    sep='';
    goodAnswer='';
    for(i = 0; i < quiz.length; i++) {
        qr = quiz[i];
        question =  qr[0];
        answer = ask(question);        
        checkAnswear(question);
    }
    gameOver();
}

function checkAnswear(question) {
    if(answer === qr[1]){
        goodAnswer += sep+qr[1];
        sep=", ";
        score ++;
    }else{
        alert('wrong');
    }
}*/



// But in the other hand, we can nested the ask and checkAsnwear into the play method to have access
// to the function variable if we ever put a keyword to variable like var,let,const
//==>
function play(quiz){
    sep='';
    goodAnswer='';
    quiz.forEach(elt => {
       const answer = ask(elt[0]);
       checkAnswear(answer, elt[1])
    });
    gameOver();

    function ask(question) {
        return  prompt(question);
    }

    function checkAnswear(answer, rightResponse) {
        if(answer === rightResponse){
            goodAnswer += sep + rightResponse;
            sep=", ";
            score +=1;
        }else{
            goodAnswer = 'all answers are wrong';
            alert('wrong');
        }
    }
}

function gameOver(){
    document.body.append('** Quiz scoress ::  ' + goodAnswer + " Total score ::" + score + "\n");
}

var score = 0;
// play(quiz);


// map et foreach sont presques les mêmes méthodes mais map() retourne un tableau avec un nouveau traitement