import { subtract } from "./libraries/app";
import './index.scss'

function init() {
    const form = document.querySelector("form");
    form?.addEventListener("submit", submitHandler);
  }

function submitHandler(e: Event) {
  e.preventDefault();
  const num1 = document.querySelector("input[name='a']") as HTMLInputElement;
  const num2 = document.querySelector("input[name='b']") as HTMLInputElement;
  const result = subtract(Number(num1.value), Number(num2.value));
  const resultElement = document.querySelector("#display");
  if (resultElement) {
    resultElement.textContent = result.toString();
  }
}

init();