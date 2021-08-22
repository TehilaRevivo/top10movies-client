import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Card, Button, Form, Row, Col } from 'react-bootstrap'
import { actions } from '../redux/action/action'
import { useHistory } from 'react-router-dom'
import ModalForm from './ModalForm'
import { types } from '../movieTypes'
import './movie.style'
import { Rating } from '@material-ui/lab'


const Movies = (props) => {
    const { movie, addMovie, showModal, setShowModal } = props
    const history = useHistory()
    const [moviesToShow, setMoviesToShow] = useState(undefined)
    const [inputsNewMovie, setInputNewMovie] = useState(
        { name: '', image: null, type: '', rating: null }
    )

    useEffect(() => {
        setMoviesToShow([].concat(movie.movies)
            .sort((a, b) => a.rating < b.rating ? 1 : -1)
            .slice(0, 10))
    }, [movie.movies])

    const sortMovies = (e) => {
        const val = e.target.value
        let m = [].concat(movie.movies)
            .sort((a, b) => a.rating < b.rating ? 1 : -1).slice(0, 10)
        if (val === "")
            setMoviesToShow(m)
        else {
            m = m.filter(movie => movie.typeMovie && movie.typeMovie === val)
            setMoviesToShow(m)
        }

    }

    const handleSubmit = async () => {
        console.log('handleSubmit')
        await addMovie(inputsNewMovie);
        setShowModal(false)
    }

    const handleChange = e => {
        const { name, value } = e.target
        setInputNewMovie(prev => ({ ...prev, [name]: value }))
    }

    return (
        <>

            <div className="d-flex justify-content-between m-3 flex-wrap">
                <Form.Group className=" col-md-3 col-12 mb-2 mb-md-0">
                    <Form.Label>Filter by movie type:</Form.Label>
                    <Form.Select name="typeMovie" onChange={sortMovies} >
                        {types.map(item => (
                            <option value={item}>{item}</option>
                        ))}
                    </Form.Select>
                </Form.Group>

                <Button className="align-self-center col-12 col-md-2" onClick={() => { console.log(showModal); setShowModal(true) }}>+ Add a movie</Button>
            </div>
            <ModalForm
                show={showModal}
                setShow={setShowModal}
                inputsMovie={inputsNewMovie}
                setInputNewMovie={setInputNewMovie}
                {...props} handleSubmit={handleSubmit}
                handleChange={handleChange}
                textModal={"Add Movie"} />

            <Row xs={1} md={4} className="m-0 justify-content-start" >
                {moviesToShow && moviesToShow
                    .map((item, index) => {
                        const editMovie = async () => {
                            history.push(`/EditMovie/${item._id}`)
                        }
                        return (
                            <>
                                {item &&
                                    <Card key={item._id} className="movieInList m-auto mb-3 p-0" onClick={editMovie}>
                                        <Card.Img variant="top" src={item.image} />
                                        <Card.ImgOverlay className="d-flex flex-column">
                                            <Rating name="half-rating-read" value={item.rating} precision={0.5} readOnly />

                                            <Card.Title className="text-center m-auto">
                                                <h2 className="p-1">{item.name}</h2>
                                            </Card.Title>
                                        </Card.ImgOverlay>
                                    </Card>
                                }
                            </>
                        )
                    })}
            </Row>
        </>
    )
}

const mapStateToProps = (state) => ({
    movie: state.movie
})

const mapDispatchToProps = (dispatch) => ({
    addMovie: (data) => dispatch(actions.addMovie(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Movies)
