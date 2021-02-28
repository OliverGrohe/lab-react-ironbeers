import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Route, Switch} from 'react-router-dom'


export default class HomePage extends Component {
    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <Link to={`/beers`}>Beers</Link>
                <Link to={`/random-beer`}>Random Beer</Link>
                <Link to={`/new-beer`}>New Beer</Link>
            </div>
        )
    }
}
