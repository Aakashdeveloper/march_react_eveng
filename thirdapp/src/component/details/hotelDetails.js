import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const url = `https://developerfunnel.herokuapp.com/hotelsdetails`

class HotelDetails extends Component{
    constructor(){
        super()

        this.state={
            details:'',
            tripid: sessionStorage.getItem('tripid')?sessionStorage.getItem('tripid'):'1'
        }
    }
    render(){
        // let details = this.state.details;
        let {details} = this.state;
        return(
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3>{this.state.details.name}</h3>
                    </div>
                    <div className="panel-body">
                        <div className='row'>
                            <div className="col-md-12">
                                <img className="img-responsive" src={details.thumb} style={{height:400,width:1500}}/>
                            </div>
                            <div className="col-md-6">
                                <h3>{details.name}</h3>
                                <h3>{details.locality}</h3>
                                <h3>{details.address}</h3>
                            </div>
                            
                        </div>
                        <hr/>
                            <Tabs>
                                <TabList>
                                    <Tab>Description</Tab>
                                    <Tab>Contact</Tab>
                                    
                                </TabList>

                                <TabPanel>
                                    <h2>{details.name}</h2>
                                    <p>{details.name} is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                </TabPanel>
                                <TabPanel>
                                    <h3>{details.locality}</h3>
                                    <h3>{details.address}</h3>
                                    <h3>Phn: 97776642443</h3>
                                </TabPanel>
                            </Tabs>
                        <Link to={`/list/${this.state.tripid}`} className="btn btn-danger">Back</Link> &nbsp;
                        <Link to={`/booking/${details.name}`} className="btn btn-success">Proceed</Link>
                    </div>
                </div> 
            </div>
        )
    }

    async componentDidMount(){
        let hotelId = this.props.match.params.id;
        let response = await axios.get(`${url}/${hotelId}`)
        this.setState({details:response.data[0]})
        sessionStorage.setItem('cost',response.data[0].cost)
    }
}

export default HotelDetails;