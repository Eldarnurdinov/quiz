
const question =[
    {
    name: "JSте функциянын канча туру бар?",
    variants: ["1", "2", "3"],
    correctAnswer: "3",
    image: "https://joldo.kg:8453/image/load/e32fdafd9386f2c8c8959d31b153b660"
},
{
    name: "Где hoisting работает с переменными?",
    variants: ["var - function", "let - const"],
    correctAnswer: "var - function",
    image: "https://joldo.kg:8453/image/load/e32fdafd9386f2c8c8959d31b153b660 "
},
{
    name: "Знаете ли вы, каким будет результат этого кода?",
    variants: ["string", "number", "ошибка"],
    correctAnswer: "string",
    image: "./images/div.question__code.png"
},
{
    name: "Знаете ли вы, каким будет результат этого кода?",
    variants: [1, "hello", "NaN"],
    correctAnswer: "1",
    image: "./images/image.png"
},
{
    name: "Знаете ли вы, каким будет результат этого кода?",
    variants: ["undefined", "[] {}" ],
    correctAnswer: "[] {}",
    image: "./images/image1.png"
}
]
let quizIndex = 0
const btnReady = document.querySelector("#ready");

const nextIcon = document.querySelector("#next-arrow");
const prevIcon = document.querySelector("#prev-arrow");
const countSpan = document.querySelector("#count");
const buttons = document.querySelector(".q-btns");

const overlay = document.querySelector(".overlay");
let answerBtns = document.querySelectorAll(".q-btns button");
const btnNext = document.querySelector("#next-id");
const qDiv = document.querySelector(".question");
const qImg = document.querySelector(".q-img");

nextIcon.onclick = () => {
    if(quizIndex === 4)   return
    quizIndex = quizIndex + 1
    console.log(quizIndex);
    showQuiz()
}
prevIcon.onclick = () => {
    if(quizIndex === 0)   return
    quizIndex = quizIndex - 1
    console.log(quizIndex);
    showQuiz()
}


function showQuiz(){
    let qLength = question.length
    countSpan.innerHTML = `${quizIndex + 1} / ${qLength}`
    qDiv.innerText = question[quizIndex].name
    const image = question[quizIndex].image
    if(image){
        qImg.innerHTML = `<img src="${image}" alt="" />`
    }else{
        qImg.innerHTML = ""
    }
    buttons.innerHTML = question[quizIndex].variants.map((v) => {
        console.log(`<button>${v}</button>`);
        return `<button class="btn-blue">${v}</button>`
    }).join("")
    answerBtns = document.querySelectorAll(".q-btns button")
    answerBtns.forEach((item) => {
        item.addEventListener("click", handleAnswer)
    })
}
showQuiz()


btnReady.onclick = () => {
    overlay.style.display = "none";
}

// forEach
answerBtns.forEach((item) => {
    item.addEventListener("click", handleAnswer)
})



function handleAnswer(event){
    const button = event.target
    const quiz = question[quizIndex]
    console.log(button.innerText);
    if(button.innerText === quiz.correctAnswer){
        score++
        button.style.background = " #4FC08D"
    }else{
        button.style.background = "red"
    }
    answerBtns.forEach((item) => {
        item.removeEventListener("click", handleAnswer)
    })
}

btnNext.onclick = () => {
    if(quizIndex === 4)   return
    quizIndex = quizIndex + 1
    console.log(quizIndex);
    showQuiz()
}
btnNext.onclick = () => {
    if(quizIndex === 0)   return
    quizIndex = quizIndex - 1
    console.log(quizIndex);
    showQuiz()
}

let score = 0;
function displayScore() {
    alert(`Твой результат: ${score} из ${question.length}`);
}

btnNext.onclick = () => {
    if (quizIndex === question.length - 1) {
        displayScore();
    } else {
        quizIndex++;
        showQuiz();
    }
};