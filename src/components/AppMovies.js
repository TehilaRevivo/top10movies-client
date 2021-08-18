import React from 'react'
import { connect } from 'react-redux'
import EditMovie from './EditMovie'
import Movies from './Movies'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
const AppMovies = (props) => {
    return (
        <Router >
            <Switch>
                <Route path="/Movies" >
                    <Movies {...props} />
                </Route>
                <Route path="/EditMovie" >
                    <EditMovie {...props} />
                </Route>
            </Switch>
        </Router>
    )
}
const mapStateToProps = (state) => ({
    ...state
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(AppMovies)

