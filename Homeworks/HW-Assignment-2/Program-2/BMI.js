const KILOGRAMS_PER_POUND = 0.453592;
const METERS_PER_INCH = 0.0254;

const feetBox = document.querySelector('#feet');
const inchesBox = document.querySelector('#inches');
const weightBox = document.querySelector('#weight');
const answerSpan = document.querySelector('#answer');
const answerSpan2 = document.querySelector('#answer2');

feetBox.addEventListener('input', updateBMI);
inchesBox.addEventListener('input', updateBMI);
weightBox.addEventListener('input', updateBMI);

function updateBMI() {
  const pounds = +weightBox.value;
  const feetConverted = +feetBox.value*12.00;
  const inches = (+inchesBox.value)+feetConverted;
  const kilograms = pounds * KILOGRAMS_PER_POUND;
  const meters = inches * METERS_PER_INCH;
  const bmi = kilograms / (meters * meters);
  answerSpan.textContent = bmi.toFixed(2);
  
  if(bmi < 18.5){
    answerSpan2.textContent = "You are considered underweight";
  }
  else if (bmi >= 18.5 && bmi <=24.9) {
    answerSpan2.textContent = "You are considered normal";
  }
  else if (bmi >= 25.0 && bmi <=29.9) {
    answerSpan2.textContent = "You are considered overweight";
  }
  else{
    answerSpan2.textContent = "You are considered obese";
  }
  
}