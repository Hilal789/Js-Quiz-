let btn = document.querySelector("button");
let showQ = document.querySelector(".question");
const submitBtn = document.getElementById("Submit");
// const pre = document.querySelector("#pre");
//let mainContainer= document.getElementById('question');
fetch("question.json")
  .then((req) => req.json())
  .then((data) => {
    ShowQuestion(data);
  });

let questionIndex = 0;
let correctCount = 0;
function ShowQuestion(data) {
  const show = () => {
    let Question = data[questionIndex];
    // console.log(Question.question);

    // const questionContainer = document.createElement('div');

    showQ.innerHTML = `
        <h2>Q ${questionIndex + 1}) ${Question.question}</h2>
        <label><input type="radio" name="option" value = "A">${
          Question.options[0]
        }</label><br>
        <label><input type="radio" name="option" value = "B">${
          Question.options[1]
        }</label><br>
         <label><input type="radio"  name="option" value = "C">${
           Question.options[2]
         }</label><br>
          <label><input type="radio" name="option" value = "D">${
            Question.options[3]
          }</label><br>
    `;

    //showQ.appendChild(questionContainer);
  };

  document.getElementById("next").addEventListener("click", () => {
    questionIndex++;
    if (questionIndex < data.length) show();
    else alert("End of the quiz");
  });

  document.getElementById("pre").addEventListener("click", () => {
    questionIndex--;
    if (questionIndex < data.length) show();
    else alert("End of the quiz");
  });

  submitBtn.addEventListener("click", () => {
    let selectedAnswer = document.querySelector('input[type="radio"]:checked');

    if (!selectedAnswer) {
      alert("Choose an option");
    } else {
      // alert(data[questionIndex].correctOption)
      if (selectedAnswer.value === data[questionIndex].correctOption) {
        // alert("correct")
        selectedAnswer.parentElement.style.background = "green";
      } else {
        // alert("incorrect")
        selectedAnswer.parentElement.style.background = "red";
      }
    }
  });

  // if(!selectedAnswer){
  //     submitBtn.style.display= 'none'
  // }else{
  //       submitBtn.style.display= 'block'
  // }

  show();
}
