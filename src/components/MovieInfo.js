import React, { Component } from 'react';
import Axios from 'axios';
import queryString from 'query-string';
import DataLoading from "../app/images/loading_spinner.gif";
const ombdApiKey = process.env.REACT_APP_OMDB_API_KEY;

class MovieInfo extends Component {
    state = { movie: {} }

    componentDidMount() {
        this.fetchMovies();
        console.log('this.props', this.props);
    }

    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            this.fetchMovies();
        }
    }

    fetchMovies = () => {
        let q = queryString.parse(this.props.location.search);
        Axios.get(`http://www.omdbapi.com/?apikey=${ombdApiKey}&i=${q.imdbID}`)
            .then(resp => resp.data)
            .then(movie => this.setState({ movie }))

    }

    render() {
        let { movie } = this.state;

        let output = <div className="text-center">
			<img src={DataLoading} className="img_responsive" alt="data loading ..." title="data loading ..." />
        </div>;

        if (movie && Object.keys(movie).length > 0) {
            output = <div className="columns">

                <div class="column is-1">
                </div>
                <div className="column is-4">
                    <img src={movie.Poster} alt={movie.Title} className="image img-thumbnail" />
                </div>
                <div className="column is-7">

                    <h1 className="is-size-2 has-text-weight-bold has-text-link-dark  has-text-centered">{movie.Title}</h1>

                    <table className="table">
                        <tbody>
                            <tr>
                                <td>Genre</td>
                                <td><strong>{movie.Genre}</strong> </td>
                            </tr>
                            <tr>
                                <td>Actors</td>
                                <td>{movie.Actors}</td>
                            </tr>
                            <tr>
                                <td>Director</td>
                                <td>{movie.Director}</td>
                            </tr>
                            <tr>
                                <td>Plot</td>
                                <td>{movie.Plot}</td>
                            </tr>
                            <tr>
                               <td>Released</td>
                                <td>{movie.Released}</td>
                            </tr>
                            <tr>
                                <td>Writer</td>
                                <td>{movie.Writer}</td>
                            </tr>
                            <tr>
                                <td>Language</td>
                                <td>{movie.Language}</td>
                            </tr>

                            <tr>
                                <td>Awards</td>
                                <td>{movie.Awards}</td>
                            </tr>

                            <tr>
                                <td>Box office</td>
                                <td>{movie.BoxOffice}</td>
                            </tr>
                            <tr>
                                <td>Year</td>
                                <td><strong>{movie.Year}</strong> </td>
                            </tr>
                        </tbody>
                    </table>

                    <button className="button is-link is-large" onClick={() => this.props.history.go(-1)}><span className="icon is-small"><i className="fas fa-arrow-left"> </i></span><span> Back </span></button>

                </div>
            </div>;
        }
        return output;
    }
}

export default MovieInfo;
