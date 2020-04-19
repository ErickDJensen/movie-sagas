import React, { Component } from 'react'

import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

import axios from 'axios';

import './Edit.css';

class Edit extends Component {

    state = {
        id: this.props.details.id,
        title: '',
        description: '',
    }
    //function to cancel an edit
    cancelEdit = () => {
        this.props.history.push('/details');
    }
    //function to get the input text for movie title
    handleInputChange = (event) => {
        console.log('in handleInputChange', event.target.value);
        this.setState({
            title: event.target.value,
        })
    }
    //function to get the input for movie description
    handleTextAreaChange = (event) => {
        console.log('in handleTextAreaChange', event.target.value);
        this.setState({
            description: event.target.value,
        })
    }
    //function to save movie title and description to the database
    SaveInfo = () => {
        console.log('in SaveInfo', this.state);
        axios.put('/api/update', this.state)
            .then(response => {
            })
            .catch(error => {
                alert(`Couldn't update the database, Try again later`);
                console.log('Error updating inventory count', error);
            })

    }


    render() {
        return (
            <div className="container">
                <button onClick={this.cancelEdit}>Cancel</button><button onClick={this.SaveInfo}>Save</button>
                <input type="text" onChange={this.handleInputChange}></input>
                <textarea type="text" onChange={this.handleTextAreaChange}></textarea>
                <h1 className="details">{this.props.details.title}</h1>
                <p className="details">{this.props.details.description}</p>
                <h3 className="details">Genres</h3>
                <ul className="details">{this.props.genres.map((genre, i) => <li key={i}>{genre.name}</li>)}</ul>
            </div>
        )
    }
}

//access to the redux store
const mapStateToProps = reduxState => ({
    details: reduxState.details,
    genres: reduxState.genres,
});

export default withRouter(connect(mapStateToProps)(Edit));
