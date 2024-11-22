// Array of motivational quotes
const quotes = [
    "You are stronger than you think.",
    "Every day is a new beginning.",
    "Believe in yourself and all that you are.",
    "You are worthy of everything good that comes your way.",
    "Small progress is still progress."
];

// Function to change the background color, quote, and animate the transition
function changeMood(mood) {
    const body = document.body;
    const quoteElement = document.getElementById("quote");
    
    // Add a smooth transition for background color and quote
    body.style.transition = "background 1.5s ease, color 1s ease";

    // Based on the mood, change background color and quote
    if (mood === 'calm') {
        body.style.background = "linear-gradient(to right, #A8C0FF, #3A8DFF)";
        body.style.color = "#FFFFFF";
        quoteElement.innerText = quotes[0];
        animateQuote();
    } else if (mood === 'cheerful') {
        body.style.background = "linear-gradient(to right, #FFD700, #FF8C00)";
        body.style.color = "#000000";
        quoteElement.innerText = quotes[1];
        animateQuote();
    } else if (mood === 'focus') {
        body.style.background = "linear-gradient(to right, #90EE90, #32CD32)";
        body.style.color = "#000000";
        quoteElement.innerText = quotes[2];
        animateQuote();
    } else {
        // Default mood
        body.style.background = "linear-gradient(to right, #f3f7fa, #e0f7fa)";
        body.style.color = "#000000";
        quoteElement.innerText = quotes[3];
        animateQuote();
    }
}

// Animate the quote text to make it more visually engaging
function animateQuote() {
    const quoteElement = document.getElementById("quote");
    quoteElement.style.animation = "fadeIn 2s ease-in-out";
    
    // Reset the animation to allow it to replay
    setTimeout(() => {
        quoteElement.style.animation = "none";
    }, 2000);
}
