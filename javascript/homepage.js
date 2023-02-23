let hamburgerMenu = document.getElementsByClassName("hamburger-menu-open");
let cross = document.getElementsByClassName("hamburger-menu-close");
let menuInfo = document.getElementsByClassName("sm-menu");
hamburgerMenu[0].addEventListener("click", () => {
  cross[0].style.visibility = "visible";
  hamburgerMenu[0].style.visibility = "hidden";
  menuInfo[0].style.display = "block";
});
cross[0].addEventListener("click", () => {
  cross[0].style.visibility = "hidden";
  hamburgerMenu[0].style.visibility = "visible";
  menuInfo[0].style.display = "none";
});

let smNavDropdown = document.getElementsByClassName("sm-dropdown");
let smNavDropdownCnt = document.getElementsByClassName("sm-dropdown-content");
let smNavArrows = document.getElementsByClassName("navArrow");
for (let i = 0; i < smNavDropdown.length; i++) {
  smNavDropdown[i].addEventListener("click", () => {
    if (smNavDropdownCnt[i].style.display == "block") {
      smNavDropdownCnt[i].style.display = "none";
      smNavArrows[i].style.transform = "rotate(0deg)";
    } else {
      smNavDropdownCnt[i].style.display = "block";
      smNavArrows[i].style.transform = "rotate(180deg)";
    }
  });
}

let buttons = document.getElementsByClassName("prod-btn");
let productList = document.getElementsByClassName("product-list");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    productList[i].style.display = "flex";
    buttons[i].style.backgroundColor = "#c9e990";
    for (let j = 0; j < buttons.length; j++) {
      if (i != j) {
        productList[j].style.display = "none";
        buttons[j].style.backgroundColor = "rgba(0, 0, 0, 0.15)";
      }
    }
  });
}
buttons[0].click();

let questions = document.getElementsByClassName("question");
let answers = document.getElementsByClassName("answer");
let arrows = document.getElementsByClassName("qArrow");
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
