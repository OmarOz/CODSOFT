const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");
const ops = ["*", "+", "-", "/", "="];
let eq = "";

const calculate = (val) => {
  if (eq === "" && ops.includes(val)) {
    return;
  } else if (val === "c") {
    eq = "";
  } else if (val === "del") {
    eq = eq.toString().slice(0, -1);
  } else if (val === "=") {
    eq = eq.replace("%", "/100");
    eq = eq.replace("x", "*");
    eq = eval(eq);
  } else {
    eq += val;
  }
  display.value = eq;
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.value));
});
