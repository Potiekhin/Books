import React, {useRef} from 'react'
import { observer } from 'mobx-react-lite'
import BooksStore from './store/BooksStore'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const Book = observer(() => {

    const {addBook} = BooksStore

    const nameRef = useRef('')
    const authorRef = useRef('')

    return (
        <div>
            <Form>
                <Row className="align-items-center">
                    <Col xs="auto">
                        <Form.Control
                            id="name"
                            placeholder="Name"
                            ref={nameRef}
                        />
                    </Col>
                    <Col xs="auto">
                        <Form.Control
                            id="author"
                            placeholder="Author"
                            ref={authorRef}
                        />
                    </Col>
                    <Col xs="auto">
                        <Button 
                        onClick={()=> addBook({"name":nameRef.current.value, "author": authorRef.current.value})}
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
