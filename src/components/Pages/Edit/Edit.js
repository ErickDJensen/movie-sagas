import React, { Component } from 'react'

import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

class Edit extends Component {
    render() {
        return (
            <div>
                <p>Edit here</p>
            </div>
        )
    }
}

export default withRouter(connect()(Edit));
