const quizDB = [
  {
    question: "Q1: What is the full form of HTML?",
    a: "Hello to My Land",
    b: "Het Text Markup Language",
    c: "HyperText Makeup Language",
    d: "HyperText Markup Language",
    ans: "ans4",
  },
  {
    question: " Q2: Which tag is used to create a check box?",
    a: "<checkbox>",
    b: "<Input type='checkbox'>",
    c: " <type='checkbox'",
    d: "None of the above",
    ans: "ans2",
  },
  {
    question: "Q3: Which attribute set the text direction?",
    a: "dir",
    b: "lang",
    c: "direction",
    d: "sub",
    ans: "ans1",
  },
  {
    question: "Q4: From which tag descriptive list starts?",
    a: "<LL>",
    b: "<DL>",
    c: "<LDL>",
    d: "<DD>",
    ans: "ans2",
  },
  {
    question: "Q5: In which year HTML was released?",
    a: "1990",
    b: "1980",
    c: "1993",
    d: "1989",
    ans: "ans3",
  },
  {
    question: "Q6: Which type of language is Javascript?",
    a: " Programming",
    b: "Scripting",
    c: "Markup",
    d: "None of These",
    ans: "ans2",
  },
  {
    question: "Q7: Which tag is used to write the javascript code?",
    a: " <script></script>",
    b: "<sp></sp>",
    c: "<javascript></javascript>",
    d: "<java></java>",
    ans: "ans1",
  },
  {
    question:
      "Q8: Which of the following function of String object causes a string to be italic, as if it were in an <i> tag?",
    a: "  fontsize()",
    b: " fontcolor()",
    c: " fixed()",
    d: " italics()",
    ans: "ans4",
  },
  {
    question: "Q9: Javascript is ideal to ?",
    a: " increase the download time for the client",
    b: " minimize storage requirements on the web server",
    c: " make computations in HTML simpler",
    d: "None of These",
    ans: "ans2",
  },
  {
    question: "Q10: A function definition expression is known as?",
    a: " Function calls",
    b: "Function calling",
    c: "Function literal",
    d: "Function definiation",
    ans: "ans3",
  },
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");

const answers = document.querySelectorAll(".answer");
const showScore = document.querySelector("#showScore");

let questionCount = 0;
let score = 0;
const loadQuestion = () => {
  const questionList = quizDB[questionCount];
  question.innerText = questionList.question;
  option1.innerText = questionList.a;
  option2.innerText = questionList.b;
  option3.innerText = questionList.c;
  option4.innerText = questionList.d;
};
loadQuestion();
const getcheckAnswer = () => {
  let answer;
  answers.forEach((currAnsElem) => {
    if (currAnsElem.checked) {
      answer = currAnsElem.id;
    }
  });
  return answer;
};

const deslelectAll = () => {
  answers.forEach((currAnsElem) => (currAnsElem.checked = false));
};

submit.addEventListener("click", () => {
  const checkedAnswer = getcheckAnswer();
  console.log(checkedAnswer);

  if (checkedAnswer === quizDB[questionCount].ans) {
    score++;
  }
  questionCount++;

  deslelectAll();

  if (questionCount < quizDB.length) {
    loadQuestion();
  } else {
    showScore.innerHTML = `
    <h3>Your Score ${score}/${quizDB.length} ✌️</h3>
    <button class ="btn" onclick="location.reload()">Play Again</button>`;
    showScore.classList.remove("scoreArea");
  }
});
