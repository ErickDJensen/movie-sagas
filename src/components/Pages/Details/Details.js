import React, { Component } from 'react'

import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

import './Details.css';

class Details extends Component {


goBack = () => {
    this.props.history.push('/');
}

    render() {
        return (
            <>
            
                <button onClick={this.goBack}>Go Back</button><button>Edit</button>
                <h1 className="details">{this.props.details.title}</h1>
                <p className="details">{this.props.details.description}</p>
                <h3 className="details">Genres</h3>
                <ul className="details">{this.props.genres.map( (genre, i) => <li key={i}>{genre.name}</li>)}</ul>
                    
            
            </>
        )
    }
}

const mapStateToProps = reduxState => ({
    details: reduxState.details,
    genres: reduxState.genres,
});

export default withRouter(connect(mapStateToProps)(Details));
