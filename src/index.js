import React from 'react'
import ReactDOM from 'react-dom'
import Library from './Library'

let bookList = [
    {'title': 'Hunger', 'author': 'Roxane Gay', 'pages': 320 },
    {'title': 'The Sun also rises', 'author': 'Ernest Hemingway', 'pages': 260 },
    {'title': 'Whute Teeth', 'author': 'Zadie Smith', 'pages': 480 },
    {'title': 'Cat`s Cradle', 'author': 'Kurt Vonnegut', 'pages': 304 },
];

ReactDOM.render(
    <Library books={bookList} />,
    document.getElementById('root')
)