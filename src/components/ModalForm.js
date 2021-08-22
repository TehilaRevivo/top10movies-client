import React, { useState, useEffect } from 'react'
import { Modal, Button, Form } from 'react-bootstrap';
import { types } from '../movieTypes';

const ModalForm = (props) => {
    const { movie, setShow, show, inputsMovie, textModal, handleSubmit, handleChange } = props
    const [error, setError] = useState('')
    useEffect(() => {
        console.log("inputsMovie",inputsMovie);
    }, [])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const submit = (e) => {

        e.preventDefault()
        const d = movie.movies.find(movie => movie._id !== inputsMovie._id && movie.name === inputsMovie.name)
        if (d)
            setError('There is a movie with the same name')
        else{
            setError('')
            handleSubmit()}
    }
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{textModal}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {inputsMovie &&
                        <Form onSubmit={submit}>
                            <Form.Group className="mb-3" >
                                <Form.Label>name</Form.Label>
                                <Form.Control type="text" name="name" placeholder="name" onChange={handleChange} value={inputsMovie.name} required/>
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>image</Form.Label>
                                <Form.Control type="text" name="image" placeholder="image" onChange={handleChange} value={inputsMovie.image} />
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>type</Form.Label>
                                <Form.Select name="typeMovie" onChange={handleChange} value={inputsMovie.typeMovie}>
                                    {types.map(item => (
                                        <option value={item}>{item}</option>
                                    ))}
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>rating</Form.Label>
                                <Form.Control type="number" placeholder="rating" onChange={handleChange} name="rating" min={0} max={5} value={inputsMovie.rating} />
                            </Form.Group>



                            <Button variant="primary" className="me-2" type="submit">
                                Save
                            </Button>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <br/>
                            <small className="text-danger">{error}</small>
                        </Form>
                    }
                </Modal.Body>
            </Modal>
        </>
    );
}


export default ModalForm
