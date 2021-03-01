//you need to "hit" the API's route https://ih-beers-api2.herokuapp.com/beers and the API will return an array of beers
//display image, name, tagline, contributed_by
// link for details to /beers/:beerId

import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default class Beers extends Component {

    state = {
        beers: []
    }

    componentDidMount(){

        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then((response) => {
            this.setState({
                beers: response.data,
                image_url: response.data,
                name: response.data,
                tagline: response.data,
                contibuted_by: response.data,
            })
        })
        .catch(() => {
            console.log('Failed')
        })
    }


    render() {
        const {image_url, name, tagline, contibutedBy} = this.state

        return (
            <div>
                {
                    this.state.beers.map((beer) => {
                        return <div><Link to={`/beers/${beer.name}`}> 
                        <h4>
                        {beer.name} <br></br>
                        {beer.tagline} <br></br>
                        {beer.contributed_by}<br></br>
                        <img src={beer.image_url} /><br></br>
                        </h4>
                        
                        </Link> </div>
                    })
                }
            </div>
        )
    }
}
