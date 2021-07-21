import React from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

function Book() {
    return (
        <div>
            <Form>
                <Row className="align-items-center">
                    <Col xs="auto">
                        <Form.Control
                            id="inlineFormInput"
                            placeholder="Name"
                        />
                    </Col>
                    <Col xs="auto">
                        <Form.Control
                            id="inlineFormInput"
                            placeholder="Author"
                        />
                    </Col>
                    <Col xs="auto">
                        <Form.Control
                            id="inlineFormInput"
                            placeholder="Genre"
                        />
                    </Col>
                    <Col xs="auto">
                        <Form.Control
                            id="inlineFormInput"
                            placeholder="Jane Doe"
                        />
                    </Col>
                    <Col xs="auto">
                        <Form.Control
                            id="inlineFormInput"
                            placeholder="Jane Doe"
                        />
                    </Col>
                    <Col xs="auto">
                        <Form.Control
                            id="inlineFormInput"
                            placeholder="Jane Doe"
                        />
                    </Col>
                    <Col xs="auto">
                        <Button type="submit">
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default Book
