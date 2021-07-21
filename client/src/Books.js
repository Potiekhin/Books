import React, { useState } from 'react'
import { observer } from 'mobx-react-lite'
import BooksStore from './store/BooksStore'
import Button from 'react-bootstrap/Button'
import Book from './Book'

const Books = observer(() => {

    const [add, setAdd] = useState(false)
    const { books } = BooksStore

    return (
        <div>
            <Button variant="success" className='m-3' onClick={() => setAdd(!add)}> Add Book</Button>
            {
                add && <Book />
            }
            <div> {books.length > 0 && books.map((el, index) => (
                <div key={index}>
                    <div>{`name-${el.book.name} author-${el.book.author}`}</div>
                </div>
            ))} </div>
        </div >
    )
})
export default Books