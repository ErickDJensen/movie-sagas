import React, { Component } from 'react'

import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

import './Home.css';


class Home extends Component {

state = {
    id: '',
}



    componentDidMount() {
        this.getMovies();
    }

    getMovies = () => {
        console.log('In getMovies');
        this.props.dispatch({ type: 'FETCH_MOVIES' })
    }

    showDetails = (event, id) => {
        console.log('in showDetails', id);
        this.props.dispatch({ type: 'FETCH_MOVIES_DETAILS', payload: id });
        this.props.history.push(`/Details`);
    }


    render() {
        return (
            <div>
                <div>
                    {this.props.movies.map(movie =>
                        <div key={movie.id} id={movie.id} className="grid-container" onClick={(event) => this.showDetails(event, movie.id) }>
                            <div className="item1" id="item1"><img src={movie.poster} alt="movie poster" /></div>
                    <div className="item2" id="item2">{movie.title}</div>
                    <div className="item3">{movie.description}</div>
                </div>
                )}
                </div>
            </div >
        )
    }
}

const mapStateToProps = reduxState => ({
    movies: reduxState.movies,
});

export default withRouter(connect(mapStateToProps)(Home));
