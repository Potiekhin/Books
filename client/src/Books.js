import React from 'react'
import { observer } from 'mobx-react-lite'
import BooksStore from './store/BooksStore'

const Books = observer(() => {
    const { books, getBooks } = BooksStore
    console.log(JSON.stringify(books));
    return ( <
        div >
        <
        button onClick = { getBooks } > get users < /button>   <
        div > { books.length > 0 && JSON.stringify(books) } < /div>   < /
        div >
    )
})
export default Books