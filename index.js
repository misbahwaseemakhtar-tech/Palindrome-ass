
var checkBtn = document.getElementById('check-btn');
var textInput = document.getElementById('text-input');
var resultDiv = document.getElementById('result');


checkBtn.onclick = function() {
   
    var word = textInput.value.toLowerCase();

    if (word === "") {
        resultDiv.innerText = "Please enter a word.";
        resultDiv.style.color = "#58e44b";
        return;
    }

   
    var reverseWord = word.split('').reverse().join('');

    
    if (word === reverseWord) {
        resultDiv.innerText = word + " is a Palindrome!";
        resultDiv.style.color = "#094b8d";
    } else {
        resultDiv.innerText = word + " is not a Palindrome.";
        resultDiv.style.color = "#f73a25"; 
    }
};