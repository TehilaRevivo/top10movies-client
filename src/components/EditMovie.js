import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

const EditMovie = (props) => {
    const { movie, currentMovie } = props
    const [detailsMovie, setDetailsMovie] = useState(movie.movies[movie.currentMovie])


    return (
        <div>
         <p>name movie: </p>
            {detailsMovie && detailsMovie.name}
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(EditMovie)
