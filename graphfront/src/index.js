import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';

const client = new ApolloClient({
    uri:`http://localhost:8600/graphql`
})

const GET_PRODUCTS = gql`
    query product($id:Int){
        product(id:$id){
            name,
            rating_text,
            locality
        }
    }
`
const Product = () => {
    return(
        <div>
            <Query query={GET_PRODUCTS} client={client} variables={{id:3}}>
                {({loading,error,data}) => {
                    if(loading) return <p>Loading.....</p>
                    if(error) return <p>Error.....</p>
                    return(
                        <div>
                            <h2>{data.product.name}</h2>
                            <h2>{data.product.rating_text}</h2>
                            <h2>{data.product.locality}</h2>
                        </div>
                    )
                }}
            </Query>
        </div>
    )
}

ReactDOM.render(<Product/>, document.getElementById('root'))