const inputBox = document.querySelector("#yens");
const answerParagraph = document.querySelector("#answer");

inputBox.addEventListener('input', report);

function report() {
  const dollars = inputBox.value;
  const yens_converted = dollars * 109.92;
  
  if (isNaN(yens_converted)) {
    answerParagraph.textContent = '?';
  } else {
    answerParagraph.textContent = yens_converted.toFixed(2);
  }
}