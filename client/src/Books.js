import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import BooksStore from './store/BooksStore'
import AddBook from './AddBook'
import ChangeBook from './ChangeBook'
import ShowImg from './ShowImg'

const Books = observer(() => {

    const [editMode, setEditMode] = useState(false)
    const [searchTeg, setSearchTeg] = useState('')
    const [show, setShow] = useState(false);
    const [picture, setPicture] = useState('')

    const handleClose = () => setShow(false);
    const handleShow = (picture) => {
        setShow(true)
        setPicture(picture);
    }

    const { books, getBooks, deleteBook, sortByField } = BooksStore

    useEffect(() => {
        getBooks()
    }, [])

    return (
        <div>
            <nav className="navbar navbar-dark justify-content-evenly mt-3 pb-0">
                <input onChange={e => setSearchTeg(e.target.value)} className='form-control w-25' placeholder='search' type='text' />
                <button onClick={() => setEditMode(!editMode)} className='btn btn-outline-primary'>Редагувати</button>
                <AddBook />
            </nav>

            <div className='m-5'>
                <div className='row'>
                    <div style={{ fontWeight: 'bold' }} className='col btn btn-outline-dark rounded-0'>#</div>
                    <div onClick={() => sortByField('author')} style={{ fontWeight: 'bold' }} className='col btn btn-outline-dark rounded-0'>Автор</div>
                    <div onClick={() => sortByField('name')} style={{ fontWeight: 'bold' }} className='col btn btn-outline-dark rounded-0'>Назва</div>
                    <div onClick={() => sortByField('genre')} style={{ fontWeight: 'bold' }} className='col btn btn-outline-dark rounded-0'>Жанр</div>
                    <div onClick={() => sortByField('seria')} style={{ fontWeight: 'bold' }} className='col btn btn-outline-dark rounded-0'>Серія</div>
                    <div onClick={() => sortByField('language')} style={{ fontWeight: 'bold' }} className='col btn btn-outline-dark rounded-0'>Мова</div>
                    <div onClick={() => sortByField('summary')} style={{ fontWeight: 'bold' }} className='col-3 btn btn-outline-dark rounded-0'>Анотація</div>
                    <div style={{ fontWeight: 'bold' }} className='col btn btn-outline-dark rounded-0'>Титулка</div>
                    <div onClick={() => sortByField('note')} style={{ fontWeight: 'bold' }} className='col btn btn-outline-dark rounded-0'>Примітка</div>
                    {editMode && <div onClick={() => sortByField('note')} style={{ fontWeight: 'bold' }} className='col btn btn-outline-dark rounded-0'>Змінити</div>}
                </div>
                {
                    books.length ? books.map((book, index) => (
                        Object.values(book.book).slice(0, -1).join().toLocaleLowerCase().includes(searchTeg) &&
                        <div key={book.id} className='row'>
                            <div className=' d-flex justify-content-center align-items-center col text-center border border-dark '>{index + 1}</div>
                            <div className=' d-flex justify-content-center align-items-center col text-center border border-dark '>{book.book.author}</div>
                            <div className=' d-flex justify-content-center align-items-center col text-center border border-dark '>{book.book.name}</div>
                            <div className=' d-flex justify-content-center align-items-center col text-center border border-dark '>{book.book.genre}</div>
                            <div className=' d-flex justify-content-center align-items-center col text-center border border-dark '>{book.book.seria}</div>
                            <div className=' d-flex justify-content-center align-items-center col text-center border border-dark '>{book.book.language}</div>
                            <div className=' d-flex justify-content-center align-items-center col-3 text-center border border-dark '>{book.book.summary}</div>
                            <div className=' d-flex justify-content-center align-items-center col text-center border border-dark '>
                                <img
                                    onClick={()=>handleShow('img/' + book.book.picture)}
                                    style={{ height: 50 }} src={'img/' + book.book.picture} alt='' />
                                {show && <ShowImg show={true} handleShow={handleShow} handleClose={handleClose} picture={picture} />}
                            </div>
                            <div className=' d-flex justify-content-center align-items-center col text-center border border-dark '>{book.book.note}</div>
                            {editMode && <div className='  d-flex align-items-center col text-center border border-dark justify-content-evenly'>
                                <ChangeBook
                                    id={book.id}
                                    author={book.book.author}
                                    name={book.book.name}
                                    genre={book.book.genre}
                                    seria={book.book.seria}
                                    language={book.book.language}
                                    summary={book.book.summary}
                                    note={book.book.note}
                                />
                                <button onClick={() => deleteBook(book.id)} className='btn btn-outline-danger'>x</button>
                            </div>}
                        </div>

                    ))
                        : <h2 className='d-flex justify-content-center mt-5'>В книгарні пусто</h2>

                }

            </div>

        </div >
    )
})
export default Books