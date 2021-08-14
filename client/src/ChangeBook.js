import React, { useState } from 'react'
import axios from 'axios'
import { observer } from 'mobx-react-lite'
import BooksStore from './store/BooksStore'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const ChangeBook = observer((props) => {
    const [author, setAuthor] = useState(props.author)
    const [name, setName] = useState(props.name)
    const [genre, setGenre] = useState(props.genre)
    const [seria, setSeria] = useState(props.seria)
    const [language, setLanguage] = useState(props.language)
    const [summary, setSummary] = useState(props.summary)
    const [note, setNote] = useState(props.note)
    const [picture, setPicture] = useState('')

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { getBooks } = BooksStore

    const changeBook = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('author', author.trim())
        formData.append('name', name.trim())
        formData.append('genre', genre.trim())
        formData.append('seria', seria.trim())
        formData.append('language', language.trim())
        formData.append('summary', summary.trim())
        formData.append('note', note.trim())
        formData.append('picture', picture)

        await axios({
            method: "put",
            url: `http://localhost:8888/${props.id}`,
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
        }).catch(err => console.log(err))
        getBooks()
        handleClose()
    }

    return (
        <>
            <button onClick={handleShow} className='btn btn-outline-primary'>edit</button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>change book</Modal.Title>
                </Modal.Header>
                <Modal.Body><form>
                    <input className='form-control mb-2' placeholder='Автор' name='author' value={author} onChange={e => setAuthor(e.target.value)} type='text' />
                    <input className='form-control mb-2' placeholder='Назва' name='name' value={name} onChange={e => setName(e.target.value)} type='text' />
                    <input className='form-control mb-2' placeholder='Жанр' name='genre' value={genre} onChange={e => setGenre(e.target.value)} type='text' />
                    <input className='form-control mb-2' placeholder='Серія' name='seria' value={seria} onChange={e => setSeria(e.target.value)} type='text' />
                    <input className='form-control mb-2' placeholder='Мова' name='language' value={language} onChange={e => setLanguage(e.target.value)} type='text' />
                    <input className='form-control mb-2' placeholder='Анотація' name='summary' value={summary} onChange={e => setSummary(e.target.value)} type='text' />
                    <input className='form-control mb-2' placeholder='Примітка' name='note' value={note} onChange={e => setNote(e.target.value)} type='text' />

                    <input
                        className='form-control mb-2'
                        name='picture'
                        type='file'
                        onChange={e => setPicture(e.target.files[0])} />
                </form></Modal.Body>
                <Modal.Footer>
                   <Button 
                   disabled={picture ? false : true}
                   variant="primary" onClick={e => changeBook(e)}>
                        change
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
})

export default ChangeBook
