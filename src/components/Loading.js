import React from 'react'
import { connect } from 'react-redux'
import Loader from "react-loader-spinner";

import './movie.style'

const Loading = (props) => {
    return (
        <>
            <div id="loading" className="d-flex">
                <div className="m-auto">
                    <Loader
                        type="Puff"
                        color="#00BFFF"
                        height={100}
                        width={100} 
                    />
                </div>
            </div>

        </>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Loading)
