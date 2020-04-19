import React, { Component } from 'react'

import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

import './Details.css';

class Details extends Component {

    //function to go back to the home page
    goBack = () => {
        this.props.history.push('/');
    }

    //function to go to the edit page
    editPage = () => {
        this.props.history.push('/edit');
    }

    render() {
        return (
            <>
                <button onClick={this.goBack}>Go Back</button><button onClick={this.editPage}>Edit</button>
                <h1 className="details">{this.props.details.title}</h1>
                <p className="details">{this.props.details.description}</p>
                <h3 className="details">Genres</h3>
                <ul className="details">{this.props.genres.map((genre, i) => <li key={i}>{genre.name}</li>)}</ul>
            </>
        )
    }
}

//access to the redux store
const mapStateToProps = reduxState => ({
    details: reduxState.details,
    genres: reduxState.genres,
});

export default withRouter(connect(mapStateToProps)(Details));
