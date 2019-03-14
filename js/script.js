// An array of Objects with the quote and source as properties
const quotes = [
    {
        quote: "Why so serious?",
        source: "The Joker",
        year: 2008,
        citation: "The Dark Knight"

    },
    {
        quote: "Fear is the path to the dark side...fear leads to anger, anger leads to hate, hate leads to suffering",
        source: "Master Yoda",
        year: 1999,
        citation: "Star Wars: The Phantom Menace"

    },
    {
        quote: "Keep your friends close, but your enemies closer",
        source: "Al Pacino",
        year: 1974,
        citation: "The Godfather II"

    },
    {
        quote: "I'm your father",
        source: "Darth Vader",
        year: 1980,
        citation: "Star Wars: Empire Strikes Back"

    },
    {
        quote: "Hasta la vista, baby!",
        source: "Terminator",
        year: 1991,
        citation: "Terminator 2: Judgement Day"

    }
];

//getRandomQuote function selects and returns a random quote object
function getRandomQuote() {
    const quoteIndex = Math.floor(Math.random() * quotes.length);  // selects a random quote
    return quotes[quoteIndex];  // returns the random quote
}

//printQuote function
function printQuote() {
    const result = getRandomQuote(); // Calls and stores the getRandomQuote in a variable
    let message = `
        
            <p class="quote">${result.quote}</p>
            <p class="source">${result.source}<span class="citation">${result.citation}</span><span class="year">${result.year}</span></p>
     
    `;
    document.getElementById('quote-box').innerHTML = message;
    
}


// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

