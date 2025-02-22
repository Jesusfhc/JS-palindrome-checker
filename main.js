const checkBTN = document.getElementById('check-btn');
const rDiv = document.getElementById('result');

function palindromo(anwser) {
  let cleanS = anwser.replace(/_|\/|\\|-|#|@|<>|^[H]| |,|\.|\(|\)/g, "")
  let sAnwser = cleanS.trim();
  console.log(sAnwser);
  let nArray = sAnwser.split("");
  console.log(nArray);
  let rArray = nArray.reverse();
  console.log(rArray);
  let palindrome = rArray.join('');
  console.log(palindrome.trim());
  console.log(cleanS.trim())

  if (palindrome.toLowerCase().trim() === cleanS.toLowerCase().trim()) {
    rDiv.innerText = `${anwser} is a palindrome`
  } else {
    rDiv.innerText = `${anwser} is not a palindrome`
  }
}

checkBTN.addEventListener('click', ()=> {

  let anwser = document.getElementById('text-input').value;

  if (anwser === "") {
    alert("Please input a value")
  } else {
    palindromo(anwser)
  }
})
