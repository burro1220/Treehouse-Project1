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
    quote: "Where there is shouting, there is no true knowledge.",
    source: "Leonardo da Vinci",
    tags: 'wisdom'
  },
  {
    quote: "Be not wise in thine own eyes; fear the LORD, and depart from evil.",
    source: "unknown",
    citation: "Proverbs 3:7",
    year: '700 bc',
    tags: 'biblical'
  },
  {
    quote: "Dear children, let us not love with words or speech but with actions and in truth.",
    source: "John the Apostle",
    citation: "1 John 3:18",
    year: 'circa AD 100',
    tags: 'biblical'
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    source: "Confucius",
    year: 'circa 528 bc',
    tags: 'wisdom'
  },
  {
    quote: "Kindness is the language which the deaf can hear and the blind can see.",
    source: "Mark Twain",
    year: 'circa 1890',
    tags: 'author'
  },
  {
    quote: "What good is the warmth of summer, without the cold of winter to give it sweetness.",
    source: "John Steinbeck",
    year: 'circa 1950',
    tags: 'author'
  },
  {
    quote: "Goals on the road to achievement cannot be achieved withut disipline and consistency.",
    source: "Denzel Washington",
    year: 'circa 1996',
    tags: 'actor'
  },
  {
    quote: "Optimism is the faith that leads to achievement.",
    source: "Helen Keller",
    tags: 'women'
  },
  {
    quote: "Knowing what must be done does away with fear.",
    source: "Rosa Parks",
    year: 'circa 1980',
    tags: 'women'
  },
  {
    quote: "It's one of the greates gifts you can give yourself, to forgive. Forgive everybody.",
    source: "Maya Angelou",
    year: 'circa 1995',
    tags: 'women'
  },
];



/***
  FX getRandomQuote takes an array of wuotes and returns random quote by generating
  a random number between 0 and length of array and using that number as a randomIndex
  to return an item from the array
***/
function getRandomQuote(arr){
  let randomIndex = Math.floor(Math.random() * (arr.length));
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


  // if tags exist for random quote add it to finalString
  if (fullString.tags) {
    finalString += '<span class="tags">' + fullString.tags + '</span>';
  };

  // finish off finalString
  finalString += '</p>';

  // set the `innerHTML` of the `quote-box` div to the HTML string
document.getElementById('quote-box').innerHTML = finalString;

};

// set interval to run printQuote every 5 seconds
setInterval(printQuote, 5000);

// add click event listener to loadQuote button and print a new random quote when triggered
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
