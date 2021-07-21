import { makeAutoObservable } from 'mobx'

class BooksStore {
    books = []
    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
        if(!this.books.length){this.getBooks()}
    }
    getBooks() {
        fetch('http://localhost:8888')
            .then(res => res.json())
            .then(json => {
                this.books = json
            })
            
    }

    addBook(data) {
        fetch('http://localhost:8888', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(res => res.json())
          .then(json => {
              this.getBooks()
          })
    }
}

export default new BooksStore()