import React, { Component } from 'react'

import Ajax from 'react-ajax'


export default class AjaxCop extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        let url = "data.json"
        return (
            <div>
                <Ajax url={url}></Ajax>
            </div>
        )
    }
}