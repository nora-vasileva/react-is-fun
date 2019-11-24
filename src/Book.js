import React from 'react'

export const Book = ({title='No title Provided', author='No Author', pages=0, freeBookMark}) => {
    return(
        <section>
            <h2>{title}</h2>
            <p>by: {author}</p>
            <p>Pages: {pages} pages</p>
            <p>Free Bookmark Today: {freeBookMark ? 'yes' : 'no'}</p>
        </section>
    )
}