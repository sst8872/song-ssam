let pos     = 0,
    correct = 0;


function _(x) {
    return document.getElementById(x);
}


function renderQuestion() {
    const test = _('test');
    const test_status = _('test_status');
    if(pos >= questions.length){
        test.innerHTML = `<h2>You got ${correct} of ${questions.length} questions correct</h2>`;
        test_status.innerHTML = 'Test Completed';
        // Restart a study
        pos = 0;
        correct = 0;
        // Ending game
        return false;
    }
    test_status.innerHTML = `Question ${pos + 1} of ${questions.length}`;
    let question = questions[pos][0],
        chA      = questions[pos][1],
        chB      = questions[pos][2],
        chC      = questions[pos][3];
    test.innerHTML = `<h3>${question}</h3>`;
    test.innerHTML += `<input type='radio' name='choices' value='A'>${chA}<br>`;
    test.innerHTML += `<input type='radio' name='choices' value='B'>${chB}<br>`;
    test.innerHTML += `<input type='radio' name='choices' value='C'>${chC}<br><br>`;
    test.innerHTML += `<button onclick='checkAnswer()'>Submit Answer</button>`;
}

function checkAnswer(){
    let choice = '';
    const choices = document.getElementsByName('choices');
    for(let i = 0; i < choices.length; i++) {
        if(choices[i].checked) {
            choice = choices[i].value;
        }
    }
    if(choice === questions[pos][4]) {
        correct++;
    }
    pos++;
    renderQuestion();
}


window.addEventListener('load', renderQuestion, false);