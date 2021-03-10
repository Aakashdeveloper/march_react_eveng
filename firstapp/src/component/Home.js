import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Home =() => {
    return(
        <>
            <Header/>
            <h1>Hi from react</h1>
            <h2>Nareshit</h2>
            <Footer year="2021" month="March"/>
        </>
    )
}

export default Home;