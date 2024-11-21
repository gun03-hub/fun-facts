const facts = [
    "I’m 20 years old and enjoy exploring the beauty of mountains.",
    "I dream of visiting the world’s highest peaks someday.",
    "Nature inspires me, and I find peace in scenic mountain views.",
    "I enjoy hiking and aspire to challenge myself with tougher trails.",
    "I’m always on the lookout for new adventures in the great outdoors."
];

// Selecting Elements
const factDisplay = document.getElementById("fact-display");
const generateBtn = document.getElementById("generate-btn");

// Event Listener for Button
generateBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    factDisplay.textContent = facts[randomIndex];
});
