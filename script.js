var questionsBank, score, dice, quenstionsContinue;

score = 0;
quenstionsContinue = true;

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
}

function questionMaker(qObj) {
    console.log(qObj.quest);
    
    shuffle(qObj.options);
    
    for (var i = 0; i < qObj.options.length; i++) {
        console.log(i + ': ' + qObj.options[i]);
    }
    var answer = prompt('Qual a resposta certa?');

    if (qObj.options[answer] === qObj.correct){
        console.log('Certa resposta');
        score++;
        console.log('Pontuação: ' + score);
        console.log('------------------------------------');
    }else if (answer === 'exit') {
        quenstionsContinue = false;
        console.log('------------------------------------');
        console.log('Final do jogo! Sua pontuação foi de: ' + score);
    }else {
        console.log('Errou!');
        console.log('Pontuação: ' + score);
        console.log('------------------------------------');
    }
};



var quest1 = {
    quest: 'Quem descobriu o Brasil?',
    options: ['Pedro Alvares Cabral', 'Dom Pedro II', 'Araquem de Assis'],
    correct: 'Pedro Alvares Cabral'

};

var quest2 = {
    quest: 'Qual a cor do cavalo branco de Napoleão?',
    options: ['Azul', 'Verde', 'Branco'],
    correct: 'Branco'

};


var quest3 = {
    quest: 'Quem criou o JavaScript?',
    options: ['Steve Jobs', 'Linus Torvalds', 'Brendan Eich'],
    correct: 'Brendan Eich'

};


var quest4 = {
    quest: 'Quem criou o PHP?',
    options: ['Rasmus Lerdorf', 'Brendan Eich', 'Guido van Rossum'],
    correct: 'Rasmus Lerdorf'

};


questionsBank = [quest1, quest2, quest3, quest4];

(function game() {
    while (quenstionsContinue){
    dice = Math.floor(Math.random() * questionsBank.length);
    questionMaker(questionsBank[dice]);    
    }
})();


