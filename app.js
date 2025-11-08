const textarea = document.getElementById('textarea');
const counter = document.querySelector('.counter');
 
function countingCharacter() {
  const text = textarea.value;
  const length = text.length;
  counter.textContent = length;
}


textarea.addEventListener("keyup", countingCharacter);
