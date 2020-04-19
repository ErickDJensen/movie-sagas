import React, { Component } from 'react'

import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

import './Details.css';

class Details extends Component {

goBack = () => {
    this.props.dispatch({ type: 'CLEAR_STATE' })
    this.props.history.push('/');
}




    render() {
        return (
            <div>
                <button onClick={this.goBack}>Go Back</button><button>Edit</button>
                {/* {this.props.movies.map((details, movie) =>
                        <div key={details.id}>
                    <div>{details.title}</div>
                    <pre>{JSON.stringify(this.props.movies)}</pre>
                </div>
                )} */}
                <h1 className="details">{this.props.details.title}</h1>
                <p className="details">{this.props.details.description}</p>
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    movies: reduxState.movies,
    movie: reduxState.fetchSingleMovie,
    details: reduxState.details,
});

export default withRouter(connect(mapStateToProps)(Details));
