// src/components/MovieListing.js
import React, { Component } from 'react';
import MovieCard from './MovieCard';
import Axios from 'axios';
import queryString from 'query-string';
const ombdApiKey = process.env.REACT_APP_OMDB_API_KEY;


class MovieListing extends Component {
    state = { movies: [] }

    componentDidMount() {
        this.fetchMovies();
        console.log('this.props', this.props);
    }

    componentDidUpdate(prevProps) {
        if(this.props.location !== prevProps.location) {
            this.fetchMovies();
        }
    }

    fetchMovies = () => {
        let q = queryString.parse(this.props.location.search);
        Axios.get(`http://www.omdbapi.com/?apikey=${ombdApiKey}&s=${q.searchText}`)
            .then(resp=>resp.data)
            .then(data=>data.Search)
            .then(movies=>this.setState({movies}))

    }
    render() {
        const movieList = this.state.movies.map((m, index) => <MovieCard movie={m} key={index} />)
        return (
            <div className="columns">
                {movieList}
            </div>
        );
    }
}

export default MovieListing;