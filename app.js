const quotes = document.getElementById("quote");
const authors = document.getElementById("author");
const button = document.getElementById("button");
const tweetMe = document.getElementById("twitter");
let realData = "";
let quoteData = "";

const tweetIt = () => {
    let tweetPost = `https://twitter.com/intent/tweet?text=${quoteData.text} ~ ${quoteData.author}`;
    window.open(tweetPost);
};

const getNewQuotes = () => {
    let rnum = Math.floor(Math.random() * 2000);
    quoteData = realData[rnum];
    quotes.innerHTML = `<h1>${quoteData.text}</h1>`;
    authors.innerHTML = `<h4>${quoteData.author}</h4>`;
    quoteData.author == null
        ? (authors.innerText = "unknown")
        : (authors.innerText = `${quoteData.author}`);
};

const getQuotes = async () => {
    const api = "https://type.fit/api/quotes";
    try {
        let data = await fetch(api);
        realData = await data.json();
        getNewQuotes();
    } catch (error) { }
};

getQuotes();
tweetMe.addEventListener("click", tweetIt);
button.addEventListener("click", getNewQuotes);