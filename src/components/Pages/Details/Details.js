import React, { Component } from 'react'

import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

class Detail_Page extends Component {
    render() {
        return (
            <div>
                <p>details here</p>
            </div>
        )
    }
}

export default withRouter(connect()(Detail_Page));
