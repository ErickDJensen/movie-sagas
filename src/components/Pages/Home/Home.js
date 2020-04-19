import React, { Component } from 'react'

import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

import './Home.css';


class Home extends Component {

    componentDidMount() {
        this.getMovies();
    }
    //function that gets all movies to display on the DOM
    getMovies = () => {
        console.log('In getMovies');
        this.props.dispatch({ type: 'FETCH_MOVIES' })
    }
    //function that gets a single movie's title and description to display on the details page
    showDetails = (event, id) => {
        console.log('in showDetails', id);
        this.props.dispatch({ type: 'FETCH_MOVIES_DETAILS', payload: id });
        this.getGenres(event, id);
        this.props.history.push(`/Details`);
    }
    //function that gets the genres for each corresponding movie to display on the details page
    getGenres = (event, id) => {
        console.log('in getGenres', id);
        this.props.dispatch({ type: 'FETCH_GENRES', payload: id })
    }


    render() {
        return (
            <div>
                <div>
                    {this.props.movies.map(movie =>
                        <div key={movie.id} id={movie.id} className="grid-container" onClick={(event) => this.showDetails(event, movie.id)}>
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

//access to the redux store
const mapStateToProps = reduxState => ({
    movies: reduxState.movies,
});

export default withRouter(connect(mapStateToProps)(Home));
