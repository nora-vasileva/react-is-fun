import React, {Component} from 'react'
import ReactDOM from 'react-dom'

const Book = ({author, title, pages}) => {
    return(
        <section>
            <h2>{title}</h2>
            <p>by: {author}</p>
            <p>Pages: {pages} pages</p>
        </section>
    )
}

const Library = () => {
    return(
        <div>
            <Book title='The Sun also rises' author='Ernest Hemingway' pages={260} />
            <Book title='Whute Teeth' author='Zadie Smith' pages={480} />
            <Book title='Cat`s Cradle' author='Kurt Vonnegut' pages={304} />
        </div>
    )
}

ReactDOM.render(
    <Library />,
    document.getElementById('root')
)