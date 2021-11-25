import { putNumber } from "./calculator/putNumber.js";
import { putOperator } from "./calculator/putOperator.js";
import { putResult } from "./calculator/putResult.js";
import { clearDisplay } from "./calculator/clearDisplay.js";

function Calculator() {
  const $digits = document.querySelector(".digits");
  const $operations = document.querySelector(".operations");
  const $equalSign = document.querySelector("#equal-sign");
  const $modifier = document.querySelector(".modifier");

  $digits.addEventListener("click", putNumber);
  $operations.addEventListener("click", putOperator);
  $equalSign.addEventListener("click", putResult);
  $modifier.addEventListener("click", clearDisplay);
}

new Calculator();
