import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import BooksStore from './store/BooksStore'
import AddBook from './AddBook'
import ChangeBook from './ChangeBook'
import ShowModal from './ShowModal'
import Table from 'react-bootstrap/Table'

const Books2 = observer(() => {

    const [editMode, setEditMode] = useState(false)
    const [searchTeg, setSearchTeg] = useState('')
    const [showImg, setShowImg] = useState(false)
    const [showText, setShowText] = useState(false)
    const [picture, setPicture] = useState('')
    const [summary, setSummary] = useState('')

    const handleClose = () => {
        setShowImg(false)
        setShowText(false)
    };
    const handleShow = (showType, setType, data) => {
        showType(true)
        setType(data);
    }

    const { books, getBooks, deleteBook, sortByField } = BooksStore

    useEffect(() => {
        getBooks()
    }, [])

    return (
        <div>
            <nav className="navbar navbar-dark justify-content-evenly mt-3 pb-0">
                <input onChange={e => setSearchTeg(e.target.value)} className='form-control w-25' placeholder='Пошук' type='text' />
                <button onClick={() => setEditMode(!editMode)} className='btn btn-outline-primary'>Редагувати</button>
                <AddBook />
            </nav>

            <div className='m-5'>
                <Table striped bordered hover variant="light">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th style={{ cursor: 'pointer' }} onClick={() => sortByField('author')} >Автор</th>
                            <th style={{ cursor: 'pointer' }} onClick={() => sortByField('name')} >Назва</th>
                            <th style={{ cursor: 'pointer' }} onClick={() => sortByField('genre')} >Жанр</th>
                            <th style={{ cursor: 'pointer' }} onClick={() => sortByField('seria')} >Серія</th>
                            <th style={{ cursor: 'pointer' }} onClick={() => sortByField('language')} >Мова</th>
                            <th style={{ cursor: 'pointer' }} onClick={() => sortByField('summary')} >Анотація</th>
                            <th style={{ cursor: 'pointer' }}  >Титулка</th>
                            <th style={{ cursor: 'pointer' }} onClick={() => sortByField('note')} >Примітка</th>
                            {editMode && <th style={{ cursor: 'pointer' }} onClick={() => sortByField('note')} >Змінити</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            books.length ? books.map((book, index) => (
                                Object.values(book.book).slice(0, -1).join().toLocaleLowerCase().includes(searchTeg) &&
                                <tr key={book.id}>
                                    <td>{index + 1}</td>
                                    <td>{book.book.author}</td>
                                    <td>{book.book.name}</td>
                                    <td>{book.book.genre}</td>
                                    <td>{book.book.seria}</td>
                                    <td>{book.book.language}</td>
                                    <td >
                                        <span
                                            style={{ cursor: 'pointer', display: '-webkit-box', overflow: 'hidden', textOverflow: 'ellipsis', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}
                                            onClick={() => handleShow(setShowText, setSummary, book.book.summary)}
                                        >
                                            {book.book.summary}
                                        </span>
                                        {showText && <ShowModal show={true} handleShow={handleShow} handleClose={handleClose} summary={summary} />}
                                    </td>
                                    <td  >
                                        <img
                                            onClick={() => handleShow(setShowImg, setPicture, 'img/' + book.book.picture)}
                                            style={{ height: 50, cursor: 'pointer' }} src={'img/' + book.book.picture} alt='' />
                                        {showImg && <ShowModal show={true} handleShow={handleShow} handleClose={handleClose} picture={picture} />}
                                    </td>
                                    <td>{book.book.note}</td>
                                    {editMode && <td className='d-flex align-items-center text-center justify-content-evenly'>
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
                                    </td>}
                                </tr>

                            ))
                                : <h2 className='d-flex justify-content-center mt-5'>В книгарні пусто</h2>

                        }

                    </tbody>
                </Table>
            </div>

        </div >
    )
})
export default Books2