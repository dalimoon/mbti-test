import {questions} from './data.js'

const progressValueEl = document.querySelector('.progress .value')
const numberEl = document.querySelector('.number')
const questionEl = document.querySelector('.question') 
const choice1 = document.querySelector('.choice1')
const choice2 = document.querySelector('.choice2')

let currentNumber = 0
let mbti = ''

function renderQuestion() {
  const question = questions[currentNumber]
  numberEl.innerHTML = question.number
  questionEl.innerHTML = question.question
  choice1.innerHTML = question.choices[0].text
  choice2.innerHTML = question.choices[1].text
  progressValueEl.style.width = (currentNumber +1) * 10 + '%'
}
function nextQuestion(choiceNumber) {
  if (currentNumber === questions.length - 1) {
    showResultPage()
    return
  }
  const question = questions[currentNumber]
  mbti = mbti + question.choices[choiceNumber].value
  // mbti = 'infj'
  currentNumber = currentNumber + 1
  renderQuestion()
}

function showResultPage() {
  location.href = 'results.html?mbti=' + mbti //주소에 어떤 정보를 담아서 전달하는 방법: 쿼리스트링
}

choice1.addEventListener('click', function () {
  nextQuestion(0)
})
choice2.addEventListener('click', function () {
  nextQuestion(1)
})


  renderQuestion()