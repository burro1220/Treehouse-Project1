/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***
Create array of quotes.
Would like to import quotes from external file but my syntax fell short.
***/
let quotes = [
  {
    quote: "Here is a quote1.",
    source: "Random Author",
    citation: "Book",
    year: 1977,
    tags: 'Historical'
  },
  {
    quote: "Here is a quote2.",
    source: "Random Author",
    citation: "Book",
    year: 1977,
    tags: 'Historical'
  },
  {
    quote: "Here is a quote3.",
    source: "Random Author",
    citation: "Book",
    year: 1977,
    tags: 'Historical'
  },
  {
    quote: "Here is a quote4.",
    source: "Random Author",
    citation: "Book",
    year: 1977,
    tags: 'Historical'
  },
  {
    quote: "Here is a quote5.",
    source: "Random Author",
    citation: "Book",
    year: 1977,
    tags: 'Historical'
  },
  {
    quote: "Here is a quote6.",
    source: "Random Author",
    citation: "Book",
    year: 1977,
    tags: 'Historical'
  },
  {
    quote: "Here is a quote7.",
    source: "Random Author",
    citation: "Book",
    year: 1977,
    tags: 'Historical'
  },
  {
    quote: "Here is a quote.8",
    source: "Random Author",
    citation: "Book",
    year: 1977,
    tags: 'Historical'
  },
  {
    quote: "Here is a quote9.",
    source: "Random Author",
    citation: "Book",
    year: 1977,
    tags: 'Historical'
  },
  {
    quote: "Here is a quote10.",
    source: "Random Author",
    citation: "Book",
    year: 1977,
    tags: 'Historical'
  },
];



/***
  FX getRandomQuote takes an array of wuotes and returns random quote by generating
  a random number between 0 and length of array and using that number as a randomIndex
  to return an item from the array
***/
function getRandomQuote(arr){
  let randomIndex = Math.floor(Math.random() * (arr.length + 1));
  return arr[randomIndex];
};




//  FX printQuote used to display html on web page
function printQuote() {
  // set fullString as the random quote;
  let fullString = getRandomQuote(quotes);

  // create finalString to represent final string of html to render;
  let finalString = '<p class="quote">';

  // add the random quote and source to fullString
  finalString += fullString.quote + '</p><p class="source">' + fullString.source;

  // if citation exists for that quote add it to finalString
  if (fullString.citation) {
    finalString += '<span class="citation">' + fullString.citation + '</span>';
  };

  // if year exists for random quote add it to finalString
  if (fullString.year) {
    finalString += '<span class="year">' + fullString.year + '</span>';
  };
  // finish off finalString
  finalString += '</p>';

  // set the `innerHTML` of the `quote-box` div to the HTML string
document.getElementById('quote-box').innerHTML = finalString;
console.log(finalString);

}


/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
