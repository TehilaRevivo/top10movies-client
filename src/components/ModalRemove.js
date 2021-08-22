import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const ModalRemove = (props) => {
    const { showModalRemove, handleClose, remove } = props

    return (
        <Modal show={showModalRemove} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Are you sure you want to remove the movie?</Modal.Title>
            </Modal.Header>

            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={remove}>
                    Remove
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalRemove
