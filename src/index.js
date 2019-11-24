import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

let bookList = [
    {'title': 'Hunger', 'author': 'Roxane Gay', 'pages': 320 },
    {'title': 'The Sun also rises', 'author': 'Ernest Hemingway', 'pages': 260 },
    {'title': 'Whute Teeth', 'author': 'Zadie Smith', 'pages': 480 },
    {'title': 'Cat`s Cradle', 'author': 'Kurt Vonnegut', 'pages': 304 },
];

const Book = ({title='No title Provided', author='No Author', pages=0, freeBookMark}) => {
    return(
        <section>
            <h2>{title}</h2>
            <p>by: {author}</p>
            <p>Pages: {pages} pages</p>
            <p>Free Bookmark Today: {freeBookMark ? 'yes' : 'no'}</p>
        </section>
    )
}

const Hiring = () => {
    return(
        <div>
            <p>The Library is hiring. Go to www.library.com/jobs for more information.</p>
        </div>
    )
}

const NotHiring = () =>
    <div>
        <p>The Library is not hiring. Check back later for more info.</p>
    </div>

class Library extends Component {
    static defaultProps = {
        books: [
            {'title': 'Default Title', 'author': 'Default author', 'pages': 1000}
        ]
    }

    state = {
        open: true,
        freeBookMark: false,
        hiring: false,
        data: [],
        loading: false
    }

    componentDidMount() {
        this.setState({
            loading: true
        })
        fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
            .then(data => data.json())
            .then(data => this.setState({ data, loading: false}))
    }

    componentDidUpdate() {
        console.log('The component is now updated')
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
                {this.state.hiring ? <Hiring /> : <NotHiring />}
                {this.state.loading
                    ? 'loading..'
                    : <div>
                        {this.state.data.map(product => {
                            return(
                                <div key={product.id}>
                                    <h3>Library product of the week</h3>
                                    <h4>{product.name}</h4>
                                    <img alt={product.name} src={product.image} height={100} />
                                </div>
                            )
                        })}
                        </div>
                }
                <h1>The Library is {this.state.open ? 'open' : 'closed'}.</h1>
                <button onClick={this.toggleOpenClosed}>Change</button>
                { books.map( (book, i) => <Book key={i} title={book.title} author={book.author} pages={book.pages} freeBookMark={this.state.freeBookMark} /> ) }
            </div>
        )
    }
}

Book.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    pages: PropTypes.number,
    freeBookMark: PropTypes.bool
}

Library.propTypes = {
    books: PropTypes.array
}

ReactDOM.render(
    <Library books={bookList} />,
    document.getElementById('root')
)