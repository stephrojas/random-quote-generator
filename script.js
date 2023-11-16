const quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "Your time is limited, don't waste it living someone else's life. – Steve Jobs", 
    // Add more quotes here
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

document.getElementById('new-quote').addEventListener('click', function() {
    const quote = getRandomQuote();
    document.getElementById('quote').textContent = quote;
});
