import { subtract } from "./libraries/app";
import './styles/index.scss'

interface Options {
  targetElement: string
}

export default class hits {
  options: Options;

  constructor(options: Options) {
    this.options = {
      targetElement: "form",
    }

    this.options = Object.assign(this.options, options)

    if (document.readyState !== 'loading') {
      this.init()
    } else {
      document.addEventListener('DOMContentLoaded', this.init)
    }
  }

  init() {
    const form:HTMLElement = document.querySelector(this.options.targetElement) as HTMLElement
    form?.addEventListener("submit", this.submitHandler)
  }
  
  submitHandler(e: Event) {
    e.preventDefault()
    const num1 = document.querySelector("input[name='a']") as HTMLInputElement
    const num2 = document.querySelector("input[name='b']") as HTMLInputElement
    const result = subtract(Number(num1.value), Number(num2.value))
    const resultElement = document.querySelector("#display")

    if (resultElement) {
      resultElement.textContent = result.toString()
    }
  }
}