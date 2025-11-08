const textarea = document.getElementById('textarea');
const counter = document.querySelector('.counter');
 
function countingCharacter() {
  const text = textarea.value;
  const length = text.length;
  counter.textContent = length;
  if (length > 100) {
    counter.style.color = "green";
  }else {
    counter.style.color = "red";
  }
}


textarea.addEventListener("keyup", countingCharacter);
