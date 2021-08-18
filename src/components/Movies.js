import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Card, Button } from 'react-bootstrap'
import { actions } from '../redux/action/action'
import { useHistory } from 'react-router-dom'


const Movies = (props) => {
    const { movie, setCurrentMovie } = props
    const history = useHistory()

    useEffect(() => {
        console.log(movie);
    }, [movie])
    return (
        <div>
            {movie && movie.movies.map((item, index) => {
                const editMovie = async() => {
                    await setCurrentMovie(index)
                    history.push('/EditMovie')
                }
                return (
                    <>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={item.image} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary" onClick={editMovie}>Edit details</Button>
                            </Card.Body>
                        </Card>
                    </>
                )
            })}
        </div>
    )
}

const mapStateToProps = (state) => ({
    movie: state.movie
})

const mapDispatchToProps = (dispatch) => ({
    setCurrentMovie: (data) => dispatch(actions.setCurrentMovie(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Movies)
