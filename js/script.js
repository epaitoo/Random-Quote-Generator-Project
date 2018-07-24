// An array of Objects with the quote and source as properties
var quotes = [
    {
        quote: "In the end, it’s not the years in your life that count. It’s the life in your years",
        source: "Abraham Lincoln",

    },
    {
        quote: "Don’t gain the world and lose your soul, wisdom is better than silver or gold",
        source: "Bob Marley",

    },
    {
        quote: "Lighten up, just enjoy life, smile more, laugh more, and don’t get so worked up about things",
        source: "Kenneth Branagh",

    },
    {
        quote: "Don’t cry because it’s over, smile because it happened",
        source: "Ludwig Jacobowski",

    },
    {
        quote: "I tell you, in this world being a little crazy helps to keep you sane",
        source: "Seneca",

    }
];


// getRandomQuote function selects and returns a random quote object
function getRandomQuote() {
    var quoteIndex = Math.floor(Math.random() * quotes.length);  // selects a random quote
    return quotes[quoteIndex];  // returns the random quote
}

//printQuote function
function printQuote(message) {
    var result = getRandomQuote(); // Calls and stores the getRandomQuote in a variable
    var message = "<p class='quote'>" + result.quote + "</p>" +"<p class='source'>" + result.source + "</p>";
    document.getElementById('quote-box').innerHTML = message;
    
}



// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

