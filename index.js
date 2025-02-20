const flashcard = document.getElementById("flashcard");
const flipBtn = document.getElementById("flipBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const questionText = document.getElementById("question");
const answerText = document.getElementById("answer");
const progressBar = document.getElementById("myBar");

const flashcards = [
  {
    question: "In what organelle does cellular respiration take place?",
    answer: "Cellular Respiration takes place in the mitochondria",
  },
  {
    question:
      "What is the list of organelles that take part in making proteins?",
    answer: "Ribosomes, ER, Golgi apparatus, Vesicle, Nucleus",
  },
  {
    question: "How is the nucleus involved in making proteins?",
    answer:
      "The nucleus produces the sequence of amino acids that form a protein. The DNA in the nucleus undergoes translation and transcription to create proteins.",
  },
  {
    question: "What does the endoplasmic reticulum do?",
    answer:
      "It manufactures and transports material to other locations in the cell.",
  },
  {
    question:
      "Cats reproduce sexually, are diploid and have 38 chromosomes (n=19). Where do the chromosomes in a cat zygote come from?",
    answer: "19 from a sperm cell, 19 from an egg",
  },
  { question: "If you look at cells under a microscope, in eukaryotes, but not prokaryotes, you would expect to see:", answer: " Endoplasmic reticulum" },
  { question: "What happens in the rough endoplasmic reticulum?", answer: "Because we have different questions and different data in various situations" },
  { question: " Why do we have many definitions of species?", answer: "" },
  { question: "What is a similarity between transcription and DNA replication?", answer: "They both require a polymerase" },
  { question: "Which happens next after gametes are made in the human life cycle?", answer: "Fertilization" },
];

let currentIndex = 0;

// Function to update flashcard content
function updateFlashcard() {
  flashcard.classList.remove("flipped");
  questionText.textContent = flashcards[currentIndex].question;
  answerText.textContent = flashcards[currentIndex].answer;
  updateProgressBar();
}

function updateProgressBar() {
  let progress = ((currentIndex + 1) / flashcards.length) * 100;
  progressBar.style.width = progress + "%";
  progressBar.textContent = Math.round(progress) + "%";
}

// Flip card
flipBtn.addEventListener("click", () => {
  flashcard.classList.toggle("flipped");
});

// flips card when card clicked
flashcard.addEventListener("click", () => {
  flashcard.classList.toggle("flipped");
});


// Next flashcard
nextBtn.addEventListener("click", () => {
  if (currentIndex < flashcards.length - 1) {
    currentIndex++;
    updateFlashcard();
  }
});

// Previous flashcard
prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateFlashcard();
  }
});

function handleKeydown(evt) {
   if (evt.key === "ArrowRight") {  
        if (currentIndex < flashcards.length - 1) {
            currentIndex++;
            updateFlashcard();
        }
    } else if (evt.key === "ArrowLeft") { 
        if (currentIndex > 0) {
            currentIndex--;
            updateFlashcard();
        }
    }
}
function handleSpaceKey(evt) {
    if (evt.key === " ") {  // Spacebar key is " "
      flashcard.classList.toggle("flipped");
    }
  }
  
document.addEventListener("keydown", handleSpaceKey);
document.addEventListener("keydown", handleKeydown);


// Attach event listener to detect key presses
document.addEventListener("keydown", handleKeydown);


// Initialize the first flashcard
updateFlashcard();