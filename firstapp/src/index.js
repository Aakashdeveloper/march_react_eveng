import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';


const App =() => {
    return(
        <div>
            <Header/>
            <h1>Hi from react</h1>
            <h2>Nareshit</h2>
            <Footer/>
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'))