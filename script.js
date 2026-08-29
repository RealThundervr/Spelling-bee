const words = [
"apple",
"banana",
"elephant",
"computer",
"school",
"butterfly",
"mountain",
"rainbow",
"football",
"keyboard"
];

let currentWord = "";
let score = 0;

const answer = document.getElementById("answer");
const result = document.getElementById("result");
const scoreText = document.getElementById("score");

function newWord() {
currentWord = words[Math.floor(Math.random() * words.length)];

answer.value = "";
result.textContent = "";

speakWord();
}

function speakWord() {
const speech = new SpeechSynthesisUtterance(currentWord);
speech.rate = 0.8;
speechSynthesis.speak(speech);
}

document.getElementById("speakButton").addEventListener("click", speakWord);

document.getElementById("checkButton").addEventListener("click", () => {
const userAnswer = answer.value.trim().toLowerCase();

if (userAnswer === currentWord) {
result.textContent = "✅ Correct! Great job!";
score++;
scoreText.textContent = score;
} else {
result.textContent = "❌ Nope! The word was: " + currentWord;
}
});

document.getElementById("nextButton").addEventListener("click", newWord);

answer.addEventListener("keydown", (event) => {
if (event.key === "Enter") {
document.getElementById("checkButton").click();
}
});

newWord();
