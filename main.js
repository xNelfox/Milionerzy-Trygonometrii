const gameBackground = document.querySelector('.gameBackground');
const mainPage = document.querySelector('.mainPage');
const showPage = document.querySelector('.showPage');
const winningPage = document.querySelector('.winningPage');
const loosingPage = document.querySelector('.loosingPage');
const playBtn = document.querySelector('.playBtn');
const playAgainBtn1 = document.querySelector('.playAgainBtn1');
const playAgainBtn2 = document.querySelector('.playAgainBtn2');
const questionNumber = document.querySelector('#questionNumber');
const n1 = document.querySelector('#n1');
const n2 = document.querySelector('#n2');
const n3 = document.querySelector('#n3');
const n4 = document.querySelector('#n4');
const nq1 = document.querySelector('#nq1');
const nq2 = document.querySelector('#nq2');
const nq3 = document.querySelector('#nq3');
const nq4 = document.querySelector('#nq4');
const nq5 = document.querySelector('#nq5');
const nq6 = document.querySelector('#nq6');
const nq7 = document.querySelector('#nq7');
const nq8 = document.querySelector('#nq8');
const nq9 = document.querySelector('#nq9');
const nq10 = document.querySelector('#nq10');
const nq11 = document.querySelector('#nq11');
const nq12 = document.querySelector('#nq12');

const audio = new Audio('assets/audio/background.mp3');
audio.addEventListener('ended', function() {
    audio.currentTime = 0;
    audio.play();
});

let round = 1;

playBtn.addEventListener('click', startShow);
function startShow() {
    audio.play();
    playBtn.removeEventListener('click', startShow);
    mainPage.style.display = 'none';
    showPage.style.display = 'flex';
}

function question(round) {
    if(round == 1) {
        questionNumber.innerHTML = `CO TO ZNACZY SIN?`;
        n1.innerHTML = `Sinus`;
        n2.innerHTML = `Sinous`;
        n3.innerHTML = `Sotanges`;
        n4.innerHTML = `Sineus`;

        nq1.style.background = `#313335`;
        n1.addEventListener('click', correct);
        n2.addEventListener('click', incorrect);
        n3.addEventListener('click', incorrect);
        n4.addEventListener('click', incorrect);
    }
    if(round == 2) {
        clearEventListener()
        questionNumber.innerHTML = `CO TO ZNACZY COS?`
        n1.innerHTML = `Cotangens`;
        n2.innerHTML = `Cosineus`;
        n3.innerHTML = `Cosinus`;
        n4.innerHTML = `Cosin`;

        nq1.style.background = `#212223`;
        nq2.style.background = `#313335`;
        n1.addEventListener('click', incorrect);
        n2.addEventListener('click', incorrect);
        n3.addEventListener('click', correct);
        n4.addEventListener('click', coincorrectrrect);
    }
    if(round == 3) {
        clearEventListener()
        questionNumber.innerHTML = `CO TO ZNACZY TG?`
        n1.innerHTML = `Tangeus`;
        n2.innerHTML = `Tangens`;
        n3.innerHTML = `Cotangens`;
        n4.innerHTML = `Tangenus`;

        nq2.style.background = `#212223`;
        nq3.style.background = `#313335`;
        n1.addEventListener('click', incorrect);
        n2.addEventListener('click', correct);
        n3.addEventListener('click', incorrect);
        n4.addEventListener('click', incorrect);
    }
    if(round == 4) {
        clearEventListener()
        questionNumber.innerHTML = `CO TO ZNACZY CTG?`
        n1.innerHTML = `Cotanen`;
        n2.innerHTML = `Tangen`;
        n3.innerHTML = `Cotangens`;
        n4.innerHTML = `Cotan`;

        nq3.style.background = `#212223`;
        nq4.style.background = `#313335`;
        n1.addEventListener('click', incorrect);
        n2.addEventListener('click', incorrect);
        n3.addEventListener('click', correct);
        n4.addEventListener('click', incorrect);
    }
    if(round == 5) {
        clearEventListener()
        questionNumber.innerHTML = `PODAJ WZÓR NA SINα`
        n1.innerHTML = `c/a`;
        n2.innerHTML = `a/c`;
        n3.innerHTML = `b/a`;
        n4.innerHTML = `a/b`;

        nq4.style.background = `#212223`;
        nq5.style.background = `#313335`;
        n1.addEventListener('click', incorrect);
        n2.addEventListener('click', correct);
        n3.addEventListener('click', incorrect);
        n4.addEventListener('click', incorrect);
    }
    if(round == 6) {
        clearEventListener()
        questionNumber.innerHTML = `PODAJ WZÓR NA COSα`
        n1.innerHTML = `a/c`;
        n2.innerHTML = `c/b`;
        n3.innerHTML = `b/c`;
        n4.innerHTML = `b/a`;

        nq5.style.background = `#212223`;
        nq6.style.background = `#313335`;
        n1.addEventListener('click', incorrect);
        n2.addEventListener('click', incorrect);
        n3.addEventListener('click', correct);
        n4.addEventListener('click', incorrect);
    }
    if(round == 7) {
        clearEventListener()
        questionNumber.innerHTML = `PODAJ WZÓR NA TGα`
        n1.innerHTML = `b/c`;
        n2.innerHTML = `c/a`;
        n3.innerHTML = `b/a`;
        n4.innerHTML = `a/b`;

        nq6.style.background = `#212223`;
        nq7.style.background = `#313335`;
        n1.addEventListener('click', incorrect);
        n2.addEventListener('click', incorrect);
        n3.addEventListener('click', incorrect);
        n4.addEventListener('click', correct);
    }
    if(round == 8) {
        clearEventListener()
        questionNumber.innerHTML = `PODAJ WZÓR NA CTGα`
        n1.innerHTML = `a/c`;
        n2.innerHTML = `b/a`;
        n3.innerHTML = `a/b`;
        n4.innerHTML = `c/a`;

        nq7.style.background = `#212223`;
        nq8.style.background = `#313335`;
        n1.addEventListener('click', incorrect);
        n2.addEventListener('click', correct);
        n3.addEventListener('click', incorrect);
        n4.addEventListener('click', incorrect);
    }
    if(round == 9) {
        clearEventListener()
        questionNumber.innerHTML = `PODAJ WZÓR NA SINβ`
        n1.innerHTML = `c/a`;
        n2.innerHTML = `c/b`;
        n3.innerHTML = `b/c`;
        n4.innerHTML = `a/b`;

        nq8.style.background = `#212223`;
        nq9.style.background = `#313335`;
        n1.addEventListener('click', incorrect);
        n2.addEventListener('click', incorrect);
        n3.addEventListener('click', correct);
        n4.addEventListener('click', incorrect);
    }
    if(round == 10) {
        clearEventListener()
        questionNumber.innerHTML = `PODAJ WZÓR NA COSβ`
        n1.innerHTML = `c/b`;
        n2.innerHTML = `c/a`;
        n3.innerHTML = `b/c`;
        n4.innerHTML = `a/c`;

        nq9.style.background = `#212223`;
        nq10.style.background = `#313335`;
        n1.addEventListener('click', incorrect);
        n2.addEventListener('click', incorrect);
        n3.addEventListener('click', incorrect);
        n4.addEventListener('click', correct);
    }
    if(round == 11) {
        clearEventListener()
        questionNumber.innerHTML = `PODAJ WZÓR NA TGβ`
        n1.innerHTML = `b/a`;
        n2.innerHTML = `c/b`;
        n3.innerHTML = `a/b`;
        n4.innerHTML = `a/c`;

        nq10.style.background = `#212223`;
        nq11.style.background = `#313335`;
        n1.addEventListener('click', correct);
        n2.addEventListener('click', incorrect);
        n3.addEventListener('click', incorrect);
        n4.addEventListener('click', incorrect);
    }
    if(round == 12) {
        clearEventListener()
        questionNumber.innerHTML = `PODAJ WZÓR NA CTGα`
        n1.innerHTML = `b/c`;
        n2.innerHTML = `b/a`;
        n3.innerHTML = `a/b`;
        n4.innerHTML = `a/c`;

        nq11.style.background = `#212223`;
        nq12.style.background = `#313335`;
        n1.addEventListener('click', incorrect);
        n2.addEventListener('click', incorrect);
        n3.addEventListener('click', correct);
        n4.addEventListener('click', incorrect);
    }
}

function correct(event) {
    const clickedAnswer = event.target.innerHTML;
    let correctAnswer;

    if (round == 1) {
        correctAnswer = "Sinus";
    } else if (round == 2) {
        correctAnswer = "Cosinus";
    } else if (round == 3) {
        correctAnswer = "Tangens";
    } else if (round == 4) {
        correctAnswer = "Cotangens";
    } else if (round == 5) {
        correctAnswer = "a/c";
    } else if (round == 6) {
        correctAnswer = "b/c";
    } else if (round == 7) {
        correctAnswer = "a/b";
    } else if (round == 8) {
        correctAnswer = "b/a";
    } else if (round == 9) {
        correctAnswer = "b/c";
    } else if (round == 10) {
        correctAnswer = "a/c";
    } else if (round == 11) {
        correctAnswer = "b/a";
    } else if (round == 12) {
        correctAnswer = "a/b";
        
        showPage.style.display = `none`;
        winningPage.style.display = `block`;
        
        playAgainBtn2.addEventListener('click', () => {
            location.reload();
        });
    }
    
    if (clickedAnswer === correctAnswer) {
        round++;
        question(round);
    }
}

function incorrect() {
    showPage.style.display = `none`;
    loosingPage.style.display = `block`;
    
    playAgainBtn1.addEventListener('click', () => {
        location.reload();
    });
}

function clearEventListener() {
    n1.removeEventListener('click', incorrect);
    n2.removeEventListener('click', incorrect);
    n3.removeEventListener('click', incorrect);
    n4.removeEventListener('click', incorrect);

    n1.removeEventListener('click', correct);
    n2.removeEventListener('click', correct);
    n3.removeEventListener('click', correct);
    n4.removeEventListener('click', correct);
}
question(round);
