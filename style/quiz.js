alert ("Welcome")
alert("Fasting challenge")

var weeks = ["Treasures, Temptation, Prodigal Son, Samaritan Woman, Paralyzed Man, Man Born Blind, Palm Sunday"]

console.log("Treasures")
console.log("Temptation")
console.log("Prodigal Son")
console.log("Samaritan Woman")
console.log("Paralyzed Man")
console.log("Man Born Blind")
console.log("Palm Sunday")



const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}


const questions = [
  {
    question: 'What is First week ?',
    answers: [
      { text: 'Treasures', correct: true },
      { text: 'Temptation', correct: false },
      {text: 'Paralyzed Man', correct: false },
      {text: 'Man Born Blind', correct: false },
    ]
  },



  {
    question: 'What is Second week ?',
    answers: [
      { text: 'Treasures', correct: false },
      { text: 'Temptation', correct: true },
      {text: 'Man Born Blind', correct: false },
      {text: 'Paralyzed Man', correct: false },

    ]
  },




  {
    question: 'What is Third week ?',
    answers: [
        {text: 'Paralyzed Man', correct: false },
        { text: 'Temptation', correct: false },
      { text: 'Prodigal Son', correct: true },
      {text: 'Man Born Blind', correct: false },
    ]
  },



  {
    question: 'What is Forth week ?',
    answers: [
      { text: 'Treasures', correct: false },
      { text: 'Samaritan Woman', correct: true },
      {text: 'Paralyzed Man', correct: false },
      {text: 'Man Born Blind', correct: false },
    ]
  },




  {
    question: 'What is the Fifth week ?',
    answers: [
      { text: 'Treasures', correct: false },
      { text: 'Temptation', correct: false },
      {text: 'Paralyzed Man', correct: true },
      {text: 'Man Born Blind', correct: false },
    ]
  },




  {
    question: 'What is the Sixth week ?',
    answers: [
      { text: 'Samaritan Woman', correct: false },
      { text: 'Temptation', correct: false },
      {text: 'Treasures', correct: false },
      {text: 'Man Born Blind', correct: true },
    ]
  },



  {
    question: 'What is the seventh week ?',
    answers: [
      { text: 'Treasures', correct: false },
      { text: 'Temptation', correct: false },
      {text: 'Palm Sunday', correct: true },
      {text: 'Man Born Blind', correct: false },
    ]
  },


]