import React, { Component } from 'react';
import './Search.css';

const url = "https://developerfunnel.herokuapp.com/location";

class Search extends Component{
    constructor(){
        super()
        console.log(">>>>>>>Inside constructor")
        this.state={
            location:''
        }
    }

    render(){
        console.log(">>>>>>>Inside render")
        return(
            <div className="imageContainer">
                <div id="logo">
                    D!
                </div>
                <div className="heading">
                    Plan Trip With Us
                </div>
                <div className="locationSelector">
                    <select className="locationDropDown">
                        <option>---------SELECT CITY-------</option>
                    </select>
                    <select className="reataurantsinput">
                        <option>---------SELECT Hotel-------</option>
                    </select>
                </div>
            </div>
        )
    }

    // onload api call
    componentDidMount(){
        console.log(">>>>>>>Inside componentDidMount");
        fetch(url,{method:'GET'})
        .then((response) => response.json())
        .then((data) => {
           this.setState({location:data})
        })
        .catch((err) => {console.log(err)})
        
    }

}

export default Search