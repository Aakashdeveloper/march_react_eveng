import React,{Component} from 'react';
import {Link, withRouter} from 'react-router-dom'

class Header extends Component  {
    constructor(){
        super()

        this.state={
            username:'',
            imageUrl:''
        }
    }

    conditionalHeader = () => {
        if(sessionStorage.getItem('username') == null || sessionStorage.getItem('username') == undefined){
            return(
                <li>
                    <a href="https://github.com/login/oauth/authorize?client_id=930f92e500db2f4d357c">
                        Login With Github
                    </a>
                </li>
            )
        }else{
            return(
                <li>
                    <a href="">
                        Hi
                        <img src={this.state.imageUrl} style={{height:50,width:50}}/>
                        {sessionStorage.getItem('username')}
                    </a>
                </li>
            )
        }
    }

    render(){
        return(
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>                        
                        </button>
                        <Link className="navbar-brand" to="/">Developer Hotel</Link>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li><Link to="/">Home</Link></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            {this.conditionalHeader()}
                        </ul>
                    </div>
                </div>
                </nav>
            </div>
        )
    }

    componentDidMount(){
        const code = (this.props.location.search).split('=')[1];
        if(code){
            let requestedData={
                code:code
            }
            fetch('http://localhost:9900/oauth',{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(requestedData)
            })
            .then((res) => res.json())
            .then((data) => {
                var user = data.login;
                var img = data.avatar_url;
                sessionStorage.setItem('username',user);
                this.setState({username:user,imageUrl:img})
            })
        }
    }


}

export default withRouter(Header)