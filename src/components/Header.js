import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div>
                <header>
                <Link to={`/`}>HEADER</Link>
                </header>
            </div>
        )
    }
}
