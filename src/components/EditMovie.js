import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link, useHistory, useParams } from 'react-router-dom'
import { actions } from '../redux/action/action'
import { Rating } from '@material-ui/lab';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ModalForm from './ModalForm'
import ModalRemove from './ModalRemove';


const EditMovie = (props) => {
    const { movie, removeMovie, showModal, setShowModal, editMovie } = props;
    const { idMovie } = useParams();
    const [indexMovie, setIndexMovie] = useState(null);
    const [detailsMovie, setDetailsMovie] = useState(movie.movies.find(m => m._id === idMovie))
    const history = useHistory()
    const [showModalRemove, setshowModalRemove] = useState(false);
    const handleClose = () => setshowModalRemove(false);
    const handleShow = () => setshowModalRemove(true);
    useEffect(() => {
        if (movie.movies.length > 0) {
            let index = movie.movies.findIndex(m => m._id === idMovie)
            setIndexMovie(index)
            setDetailsMovie(movie.movies[index])
            console.log(index);
        }
    }, [movie.movies])

    const remove = (async () => {
        await removeMovie(idMovie)
        handleClose()
        history.push('/Movies')
    })


    const handleSubmit = async () => {
        await editMovie({ indexMovie: indexMovie, detailsMovie: detailsMovie, idMovie: idMovie })
        setShowModal(false)
    }

    const handleChange = e => {
        const { name, value } = e.target
        setDetailsMovie(prev => ({ ...prev, [name]: value }))
    }


    return (
        <>
            {movie && indexMovie != null &&
                <div className="d-flex flex-wrap container justify-content-center">
                    <div className="col-md-5 p-4" >
                        <img src={movie.movies[indexMovie].image} className="movieImg" />
                    </div>

                    <div className="col-md-6 p-4">
                        <div className="mb-3 d-flex justify-content-between align-items-center">
                            <h1>{movie.movies[indexMovie].name}</h1>
                            <div>
                                <button className="btn p-0" onClick={() => setShowModal(true)} title="Editing details"> <EditIcon /></button>
                                <button className="btn p-0 ms-3" onClick={handleShow} title="Deleting a movie"> <DeleteIcon /></button>
                            </div>
                        </div>

                        <div className="mb-3">
                            <strong>name:</strong>
                            <p> {movie.movies[indexMovie].name}</p>
                        </div>
                        <div className="mb-3">
                            <strong>category:</strong>
                            <p> {movie.movies[indexMovie].typeMovie}</p>
                        </div>
                        <div className="mb-3">
                            <strong>rating:</strong>
                            <p>
                                <Rating name="half-rating-read" value={movie.movies[indexMovie].rating} precision={0.5} readOnly />
                            </p>
                        </div>
                        <Link to='/Movies' className="btn btn-primary">Return to all movies</Link>
                    </div>

                   <ModalRemove showModalRemove={showModalRemove} handleClose={handleClose} remove={remove}/>

                    <ModalForm
                        show={showModal}
                        setShow={setShowModal}
                        inputsMovie={detailsMovie}
                        setInputNewMovie={setDetailsMovie}
                        {...props}
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}
                        textModal={"Edit Movie"} />

                </div>
            }
        </>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    removeMovie: (data) => dispatch(actions.removeMovie(data)),
    editMovie: (data) => dispatch(actions.editMovie(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditMovie)
