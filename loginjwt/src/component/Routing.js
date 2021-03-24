import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import UserList from './UserApi';
import LoginComponent from './Login';
import RegisterComponent from './Register';
import ProfileComponent from './Profile';

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
                <Route exact path="/" component={RegisterComponent}/>
                <Route path="/login" component={LoginComponent}/>
                <Route path="/profile" component={ProfileComponent}/>
                <Route path="/list" component={UserList}/>
            <Footer/>
        </BrowserRouter>
    )
}


export default Routing