import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import EditMovie from './EditMovie'
import Movies from './Movies'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { actions } from '../redux/action/action';
import './style.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import Loading from './Loading';

const AppMovies = (props) => {
    const { getAllMovies, movie } = props
    const [showModal, setShowModal] = useState(false)
    useEffect(() => {
        getAllMovies()
    }, [])

    return (
        <>
            <Navbar bg="light" expand="lg" className="position-sticky top-0">
                    <Navbar.Brand className="ms-4">
                        <img className="imgLogo" src="https://upload.wikimedia.org/wikipedia/commons/5/56/ABC_%282013%29_Dark_Grey.svg"></img>
                  <strong> Top10 Movies</strong>
                    </Navbar.Brand>
            </Navbar>
            {movie.loading && <Loading />}
            <Router>
                <Switch>
                    <Route path="/Movies" >
                        <Movies {...props} showModal={showModal} setShowModal={setShowModal} />
                    </Route>
                    <Route path="/EditMovie/:idMovie" >
                        <EditMovie {...props} showModal={showModal} setShowModal={setShowModal} />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}
const mapStateToProps = (state) => ({
    ...state
})

const mapDispatchToProps = (dispatch) => ({
    getAllMovies: () => dispatch(actions.getAllMovies())
})

export default connect(mapStateToProps, mapDispatchToProps)(AppMovies)

