import React, { Component } from 'react'

import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';


class Home extends Component {
    render() {
        return (
            <div>
                <p>Movies here</p>
            </div>
        )
    }
}

export default withRouter(connect()(Home));
