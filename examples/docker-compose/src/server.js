const express = require('express');

const app = express();

const books = [];

app.get('/', (req, res) => {
    const name = req.query.name;
    const booksAsHTML = books.map(book => `<li>${book}</li>`).join('');
    const data = `
        <!DOCTYPE html>
        <html>
        <head><title>Express with Docker</title></head>
        <body>
            <h1>Hello, ${name}</h1>
            <p>Below are the books you and your friends have read:</p>
            <ul id="books">
            ${booksAsHTML}
            </ul>
            <p>Add another:</p>
            <input id="book" />
            <button id="btn">Add</button>
            <script>
                document.getElementById('btn').addEventListener('click', function(e) {
                    e.preventDefault();
                    const book = document.getElementById('book').value;
                    const bookElement = document.createElement('li');
                    bookElement.innerText = book;
                    document.getElementById('books').appendChild(bookElement);
                    fetch('/?book='+book, {
                        method: 'POST',
                    });
                    return false;
                });
            </script>
        </body>
        </html>
    `
    return res.send(data);
});

app.post('/', (req, res) => {
    const book = req.query.book;
    books.push(book);
    return res.status(201).send();
});

app.listen(process.env.PORT || 8000);