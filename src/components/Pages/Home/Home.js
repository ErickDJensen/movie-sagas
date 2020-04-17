import React, { Component } from 'react'

import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';


class Home extends Component {

    componentDidMount(){
        this.getMovies();
      }
      
      getMovies(){
        console.log('In getMovies');
        this.props.dispatch({type: 'FETCH_MOVIES'})
      }

      
    render() {
        return (
            <div>
                <p>Movies here</p>
                <ul>
                {this.props.movies.map(movie =>
                    <li key={movie.id}>{movie.title}</li>)}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    movies: reduxState.movies,
});

export default withRouter(connect(mapStateToProps)(Home));
