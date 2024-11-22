function changeMood(mood) {
    const quote = document.getElementById('quote');
    if (mood === 'calm') {
        quote.innerText = "Take a deep breath. Everything will be okay.";
        document.body.style.backgroundColor = "#e0f7fa";
    } else if (mood === 'cheerful') {
        quote.innerText = "Smiles are contagious. Spread the positivity!";
        document.body.style.backgroundColor = "#fff9c4";
    } else if (mood === 'focus') {
        quote.innerText = "Stay focused. Success is on the way.";
        document.body.style.backgroundColor = "#c5e1a5";
    }
}
