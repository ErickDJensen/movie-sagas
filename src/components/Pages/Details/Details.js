import React, { Component } from 'react'

import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

class Details extends Component {
    render() {
        return (
            <div>
                <h1>Details</h1>
                {this.props.details.map(details =>
                        <div>
                    <div>{details.name}</div>
                    <div>{details.description}</div>
                </div>
                )}
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    details: reduxState.details,
});

export default withRouter(connect(mapStateToProps)(Details));
