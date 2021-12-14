let body = document.querySelector(`body`);
body.style.background = "blue";
let title = document.createElement(`h3`);
title.innerText = "CALCULATOR";
body.append(title);
let container = document.createElement("div");
container.classList.add("cantainer");
body.append(container);

let display = document.createElement("input");
display.type = "text";
display.id = "display";
display.ondrop = "return false;";
display.onpaste = "return false;";
display.placeholder = "Enter the number";
container.append(display);

let btn = document.createElement("div");
btn.classList.add("btn");
container.append(btn);

let arr = [1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "*", "=", 0, ".", "/"];
for (let ele of arr) {
  let button = document.createElement(`button`);
  button.innerHTML = ele;
  btn.append(button);
}
let clear = document.createElement(`div`);
container.append(clear);
let clrbtn = document.createElement(`button`);
clrbtn.id = "output";
clrbtn.innerHTML = "CLEAR";
clear.append(clrbtn);

let btns = document.querySelectorAll(`button`); //buttons
let oprator = "=";
let number = 0;
for (let btn of btns) {
  //btn all buttons array ka element
  btn.addEventListener("click", function () {
    let btnData = this.innerHTML; //all button btnData
    let olddata = display.value;
    //display ka all btnData
    if (btnData == "+") {
      if (oprator == "=") {
        number = Number.parseFloat(olddata);
        oprator = "+";
        display.value = "";
      }
    } else if (btnData == "-") {
      if (olddata.length == 0) {
        display.value = "-";
      } else if (olddata.length > 0) {
        number = Number.parseFloat(olddata);
        oprator = "-";
        display.value = "";
      }
    } else if (btnData == "*") {
      if (oprator == "=") {
        number = Number.parseFloat(olddata);
        oprator = "*";
        display.value = "";
      }
    } else if (btnData == "/") {
      if (oprator == "=") {
        number = Number.parseFloat(olddata);
        oprator = "/";
        display.value = "";
      }
    } else if (btnData == "=") {
      if (oprator == "+") {
        let number2 = Number.parseFloat(olddata);
        let result = number + number2;
        display.value = result;
        oprator = "=";
      } else if (oprator == "-") {
        let number2 = Number.parseFloat(olddata);
        let result = number - number2;
        display.value = result;
        oprator = "=";
      } else if (oprator == "*") {
        let number2 = Number.parseFloat(olddata);
        let result = number * number2;
        display.value = result;
        oprator = "=";
      } else if (oprator == "/") {
        let number2 = Number.parseFloat(olddata);
        let result = number / number2;
        display.value = result;
        oprator = "=";
      }
    } else if (btnData == "CLEAR") {
      display.value = "";
      number = 0;
      oprator = "=";
    } else if (btnData == ".") {
      if (!olddata.includes(".") && olddata.length > 0) {
        display.value = olddata + btnData;
      }
    } else {
      display.value = olddata + btnData;
    }
  });
}
