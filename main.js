const generateRandomNumber = () => Math.floor(Math.random() * 102)

const url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

const getQuote = () => {
    fetch(url).then(function (response) {
            data = response.json();
            return data
        })
        .then(function getQuote(data) {
            let randomNumber = generateRandomNumber();
            const text = document.getElementById('text');
            const author = document.getElementById('author');
            const button = document.getElementById('new-quote');
            
            document.getElementById("text").innerHTML = '"' + data.quotes[randomNumber].quote + '"'
            document.getElementById("author").innerHTML = data.quotes[randomNumber].author
        });
}
getQuote();

document.getElementById("new-quote").addEventListener("click", getQuote);
