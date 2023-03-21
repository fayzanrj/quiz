let question;
let next = document.getElementById('next')
let previous = document.getElementById('previous')
let qNo = 0;
let current = document.getElementsByClassName('current')
let currentNo = 1;
let score = document.getElementById('score')
let scored = 0;
let timeout;

let ul = document.getElementsByTagName('li')

for (let i = 0; i < ul.length; i++) {
    ul[i].addEventListener('click', function (ev) {
        if(ev.target.classList.contains('true')){
            scored++;
            ev.target.classList.add('green');

           timeout =  setTimeout(()=>{
            next.click()
        },3000)
        } else {
            let options = document.getElementsByClassName('option');
            for (let i = 0; i < options.length; i++) {
                if (!options[i].classList.contains('true')) {
                    options[i].classList.add('red')
                }
                if (options[i].classList.contains('true')) {
                    options[i].classList.add('green')
                }
            }
            timeout =  setTimeout(()=>{
                next.click()
            },3000)
        }
    })
}


next.addEventListener('click', () => {
    clearTimeout(timeout);
    currentNo++;
    if (currentNo <= current.length) {
        current[currentNo - 1].innerHTML = currentNo;
        let options = document.getElementsByClassName('option');

        for (let i = 0; i < options.length; i++) {
            if (!options[i].classList.contains('true')) {
                options[i].classList.remove('red')
            }
            if (options[i].classList.contains('true')) {
                options[i].classList.remove('green')
            }
        }

        question = document.getElementsByClassName('box')
        qNo++;

        if (qNo < question.length) {
            for (let i = 0; i < question.length; i++) {
                question[i].style.display = 'none';

                if (i == qNo) {
                    question[i].style.display = 'block';
                }
            }

            if (qNo + 1 == question.length) {
                next.setAttribute('disabled', 'true')
            }
        }
    } else {
        score.innerHTML = scored;
        let options = document.getElementsByClassName('option');

        for (let i = 0; i < options.length; i++) {
            if (!options[i].classList.contains('true')) {
                options[i].classList.remove('red')
            }
            if (options[i].classList.contains('true')) {
                options[i].classList.remove('green')
            }
        }

        question = document.getElementsByClassName('box')
        qNo++;

        if (qNo < question.length) {
            for (let i = 0; i < question.length; i++) {
                question[i].style.display = 'none';

                if (i == qNo) {
                    question[i].style.display = 'block';
                }
            }

            if (qNo + 1 == question.length) {
                next.setAttribute('disabled', 'true')
            }
        }
    }
})
