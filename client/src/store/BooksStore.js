import { makeAutoObservable } from 'mobx'

class BooksStore {
    books = []
    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }
    getBooks() {
        fetch('http://localhost:8888')
            .then(res => res.json())
            .then(json => {
                this.books = json
            })
    }
}

export default new BooksStore()