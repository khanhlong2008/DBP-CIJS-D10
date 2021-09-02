import React, { Component } from 'react';
import Search from '../Components/Search';
import MovieList from "./../Components/MovieList";

class Popular extends Component {
    render() {
        return (
            <div>
                <Search/>
                <MovieList/>
            </div>
        );
    }
}

export default Popular;