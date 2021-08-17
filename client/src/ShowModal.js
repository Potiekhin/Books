import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'

const ShowModal = (props) => {
    const [show,] = useState(props.show);
    return (
        <>
            {
                props.picture ? <Modal
                    contentClassName='bg-danger d-flex justify-content-center w-25  border-0'
                    show={show} onHide={props.handleClose}>
                    <div
                        className='d-flex justify-content-center'
                    >
                        <img src={props.picture} alt='' />
                    </div>
                </Modal>
                    :
                    <Modal
                        contentClassName='p-3 d-flex justify-content-center'
                        show={show} onHide={props.handleClose}>
                        <div
                            className='d-flex justify-content-center'
                        >
                            {props.summary}
                        </div>
                    </Modal>
            }
        </>
    );
}

export default ShowModal
