import React, { Component } from 'react'

import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

class Details extends Component {

goBack = () => {
    this.props.dispatch({ type: 'CLEAR_STATE' })
    this.props.history.push('/');
}




    render() {
        return (
            <div>
                <h1>Details</h1>
                <button onClick={this.goBack}>Go Back</button><button>Edit</button>
                {/* {this.props.movies.map((details, movie) =>
                        <div key={details.id}>
                    <div>{details.title}</div>
                    <pre>{JSON.stringify(this.props.movies)}</pre>
                </div>
                )} */}
                <pre>{JSON.stringify(this.props.movies[this.props.movie])}</pre>
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    movies: reduxState.movies,
    movie: reduxState.fetchSingleMovie
});

export default withRouter(connect(mapStateToProps)(Details));
