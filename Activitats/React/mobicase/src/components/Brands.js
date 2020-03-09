import React, { Component } from 'react';

import Translate from "./locals/Translate";
import axios from 'axios';

const url = 'info.json';
const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'react';
class Brands extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hits: [],
            isLoading: false,
            error: null,
        };
    }

    componentDidMount() {

        this.setState({ isLoading: true });

        axios.get(API + DEFAULT_QUERY)
            .then(result => this.setState({
                hits: result.data.hits,
                isLoading: false
            }))
            .catch(error => this.setState({
                error,
                isLoading: false
            }));
    }

    render() {
        const { hits, isLoading, error } = this.state;

        if (error) {
            return <p>{error.message}</p>;
        }

        if (isLoading) {
            return <p>Loading ...</p>;
        }

        return (
            <div className="App">
                <div className="container">
                    <br/>
                    <h1>FAQ about React used in this page</h1>
                    <table  className="table table-striped table-bordered">
                        <thead>
                        <tr><th>Topics</th></tr>
                        </thead>
                        <tbody>{hits.map(function(item, key) {
                            return (
                                <ul key = {key}>
                                    <li><a href={item.url}>{item.title}</a></li>
                                </ul>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}


export default Brands;