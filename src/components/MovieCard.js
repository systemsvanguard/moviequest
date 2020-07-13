import React from 'react';
import {withRouter} from 'react-router-dom';

const MovieCard = ({movie, history}) => {

    const getMovieDetails = (imdbID) => {
        history.push('/info?imdbID='+imdbID);
    }

    return (
      <div className="column">
            <div className="card" onClick={ ()=> getMovieDetails(movie.imdbID) }>


                <div className="card-image">
                    <figure className="image is-2by3">
                    <img src={movie.Poster} alt={movie.Title} />
                    </figure>
                </div>

                <div className="content">

                    <p className="card-text has-text-weight-bold">{movie.Year}</p>
                    <h5 className="card-title has-text-link-dark has-text-left">{movie.Title}</h5>
                </div>
            </div>
      </div>
    );
};

export default withRouter(MovieCard);
