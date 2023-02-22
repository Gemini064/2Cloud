let questions = document.getElementsByClassName("question");
let answers = document.getElementsByClassName("answer");
let arrows = document.getElementsByClassName("fa-angle-down");
for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", () => {
    if (answers[i].style.display == "block") {
      answers[i].style.display = "none";
      arrows[i].style.transform = "rotate(0deg)";
    } else {
      answers[i].style.display = "block";
      arrows[i].style.transform = "rotate(180deg)";
      for (let j = 0; j < questions.length; j++) {
        if (i != j) {
          answers[j].style.display = "none";
          arrows[j].style.transform = "rotate(0deg)";
        }
      }
    }
  });
}
