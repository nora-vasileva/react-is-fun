import React, {Component} from 'react'
import ReactDOM from 'react-dom'

let bookList = [
    {'title': 'Hunger', 'author': 'Roxane Gay', 'pages': 320 },
    {'title': 'The Sun also rises', 'author': 'Ernest Hemingway', 'pages': 260 },
    {'title': 'Whute Teeth', 'author': 'Zadie Smith', 'pages': 480 },
    {'title': 'Cat`s Cradle', 'author': 'Kurt Vonnegut', 'pages': 304 },
];

const Book = ({author, title, pages}) => {
    return(
        <section>
            <h2>{title}</h2>
            <p>by: {author}</p>
            <p>Pages: {pages} pages</p>
        </section>
    )
}

class Library extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
        this.toggleOpenClosed = this.toggleOpenClosed.bind(this);
    }
    toggleOpenClosed = () => {
        this.setState({
            open: !this.state.open
        })
    }
    render() {
        const {books} = this.props;
        return(
            <div>
                <h1>The Library is {this.state.open ? 'open' : 'closed'}.</h1>
                <button onClick={this.toggleOpenClosed}>Change</button>
                { books.map( (book, i) => <Book key={i} title={book.title} author={book.author} pages={book.pages} /> ) }
            </div>
        )
    }
}

ReactDOM.render(
    <Library books={bookList} />,
    document.getElementById('root')
)