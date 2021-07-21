import React from 'react'
import { observer } from 'mobx-react-lite'
import BooksStore from './store/BooksStore'

const Books = observer(() => {
    const { books, getBooks } = BooksStore
    return ( <
        div >
        <
        button onClick = { getBooks } > get books < /button>   <
        div > { books.length > 0 && JSON.stringify(books) } < /div>   < /
        div >
    )
})
export default Books