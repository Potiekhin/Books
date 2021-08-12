import { makeAutoObservable } from 'mobx'
import axios from 'axios'

class BooksStore {
    books = []
    url = 'http://localhost:8888/'
    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
        if (!this.books.length) { this.getBooks() }
    }

    getBooks = async () => {
        const response = await axios.get(this.url)
        this.books = response.data
    }


    deleteBook = async (id) => {
        await axios.delete(this.url+id)
        this.getBooks()
    }
    ///////////////////////
    // sortByField(array, field) {
    //     array.sort((a, b)=>{
    //         if(a.book[field].toLowerCase() < b.book[field].toLowerCase()) {
    //             return -1
    //         }
    //         if(a.book[field].toLowerCase() > b.book[field].toLowerCase()) {
    //             return 1
    //         }
    //         return 0
    //     })
    //     this.books = array 
    // }
    sortByField(field) {
        this.books.sort((a, b)=>{
            if(a.book[field].toLowerCase() < b.book[field].toLowerCase()) {
                return -1
            }
            if(a.book[field].toLowerCase() > b.book[field].toLowerCase()) {
                return 1
            }
            return 0
        })
    }

}

export default new BooksStore()