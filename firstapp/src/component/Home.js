import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import JSON from './db.json';
import NewsDetails from './NewsDisplay'

class Home extends Component{
    constructor(){
        super()

        this.state={
            news:JSON,
            filtered:JSON
        }
    }

    /*
        var a = [5,3,35,6,45,3,42,34,3,24,35]
        a.filter((data) => { return data>25})
    */
    filterNews=(keyword) => {
        const output = this.state.news.filter((data) => {
            return data.title.toLowerCase().indexOf(keyword.toLowerCase())>-1
        })
        this.setState({filtered:output})
    }

    render(){
        //console.log(this.state.news)
        return(
            <>
                <Header userText={(data) => {this.filterNews(data)}}/>
                <NewsDetails newsdata={this.state.filtered}/>
                <Footer year="2021" month="March"/>
            </>
        )
    }
}


export default Home;