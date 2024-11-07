// Soal kuis
const questions = [
    {
        question: "Apa ibu kota Indonesia?",
        options: ["Jakarta", "Bandung", "Surabaya", "Medan"],
        answer: 0
    },
    {
        question: "Siapa presiden pertama Indonesia?",
        options: ["Soekarno", "Soeharto", "Jokowi", "BJ Habibie"],
        answer: 0
    },
    {
        question: "Apa bahasa resmi di Indonesia?",
        options: ["Jawa", "Inggris", "Indonesia", "Sunda"],
        answer: 2
    },
    {
        question: "6 + 7?",
        options: ["10", "18", "19", "13"],
        answer: 3
    },
    {
        question: "Makanan khas Kalimantan timur?",
        options: ["Sokko", "Amplang", "Pisang Keju", "Piscok"],
        answer: 1
    }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

const questionEl = document.getElementById("question");
const optionButtons = document.querySelectorAll(".option");
const nextButton = document.getElementById("next-button");
const scoreEl = document.getElementById("score");

// Memuat soal berikutnya
function loadQuestion() {
    const current = questions[currentQuestion];
    questionEl.innerText = current.question;
    optionButtons.forEach((button, index) => {
        button.innerText = current.options[index];
        button.style.backgroundColor = "#007bff";  // Reset warna tombol
        button.disabled = false;
    });
    answered = false;
    nextButton.disabled = true;
}

// Memilih jawaban
function selectAnswer(index) {
    if (answered) return;  // Mencegah jawaban lebih dari sekali
    const correctAnswer = questions[currentQuestion].answer;
    optionButtons[index].style.backgroundColor = (index === correctAnswer) ? "#28a745" : "#dc3545";
    if (index === correctAnswer) score++;
    scoreEl.innerText = `Skor: ${score}`;
    answered = true;
    nextButton.disabled = false;
}

// Melanjutkan ke soal berikutnya
function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        questionEl.innerText = "Kuis selesai!";
        nextButton.disabled = true;
        optionButtons.forEach(button => button.style.display = "none");
    }
}

// Memulai kuis
loadQuestion();





