import React,{Component} from 'react';
import {connect} from 'react-redux';
import {movieList} from '../action/actionfile';
import Display from '../component/Display'

class Home extends Component{ 
    //call action
    componentDidMount(){
        this.props.dispatch(movieList())
    }

    render(){
        return(
            <div>
                <h1>Redux</h1>
                <Display datalist={this.props.myData}/>
            </div>
            
        )
    }
}

//will recive state from store
function mapStateToProps(state){
 return{
     myData:state.films
 }
}

export default connect(mapStateToProps)(Home)