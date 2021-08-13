import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'

const ShowImg = (props) => {
    const [show,] = useState(props.show);
    return (
        <>
            <Modal
                contentClassName='bg-danger d-flex justify-content-center w-25  border-0'
                show={show} onHide={props.handleClose}>
                <div
                    className='d-flex justify-content-center'
                    >
                    <img src={props.picture} alt='' />
                </div>
            </Modal>
        </>
    );
}

export default ShowImg
