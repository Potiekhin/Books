import React, { useRef } from 'react'
import { observer } from 'mobx-react-lite'
import BooksStore from './store/BooksStore'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const Book = observer(() => {

    const { addBook } = BooksStore

    const nameRef = useRef('')
    const authorRef = useRef('')

    return (
        <div>
            <Form>
                <Row className="align-items-center">
                    <Col xs="auto">
                        <Form.Control
                            id="name"
                            placeholder="Автор"
                            ref={nameRef}
                        />
                    </Col>
                    <Col xs="auto">
                        <Form.Control
                            id="author"
                            placeholder="Назва"
                            ref={authorRef}
                        />
                    </Col>
                    <Col xs="auto">
                        <Form.Control
                            id="author"
                            placeholder="Жанр"
                            ref={authorRef}
                        />
                    </Col>

                    <Col xs="auto">
                        <Form.Control
                            id="author"
                            placeholder="Серія"
                            ref={authorRef}
                        />
                    </Col>

                    <Col xs="auto">
                        <Form.Control
                            id="author"
                            placeholder="Мова"
                            ref={authorRef}
                        />
                    </Col>

                    <Col xs="auto">
                        <Form.Control
                            id="author"
                            placeholder="Анотація"
                            ref={authorRef}
                        />
                    </Col>

                    <Col xs="auto">
                        <Form.Control
                            id="author"
                            placeholder="Титулка"
                            ref={authorRef}
                        />
                    </Col>

                    <Col xs="auto">
                        <Form.Control
                            id="author"
                            placeholder="Примітка"
                            ref={authorRef}
                        />
                    </Col>
                    <Col xs="auto">
                        <Button
                            onClick={() => addBook({ "name": nameRef.current.value, "author": authorRef.current.value })}
                            type="submit"
                        >
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
})

export default Book
