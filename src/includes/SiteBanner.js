// src/includes/SiteBanner.js
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class SiteBanner extends Component {

    submitHandler = (evt) => {
        evt.preventDefault();
        let {history} = this.props;
        history.push('/movies?searchText=' + this.refs.searchTf.value);
    }

    render() {
			const siteName = "MovieQuest";
			const siteMotto = "Search for all your favourite movies!";

        return (
					<div>
						<section className="hero is-link">
						<div className="hero-body">
							<div className="container has-text-centered">
								<h1 className="is-size-3 has-text-weight-bold has-text-danger has-text-centered">{siteName}</h1>
								<h2 className="is-size-5 has-text-weight-bold has-text-centered">{siteMotto}</h2>


								<form onSubmit={this.submitHandler}>
									<div className="field is-grouped">
										<p className="control is-expanded">
										<input className="input" type="search"  ref="searchTf" placeholder="Search for a movie. Example 'War'. " />
										</p>
										<p className="control">
											<button className="button is-danger">
												<span className="icon is-small"><i className="fas fa-search"></i></span>  <span> Search</span>
											</button>
										</p>
									</div>
								</form>



							</div>
						</div>
						</section>
					</div>
        );
    }
}

export default withRouter(SiteBanner);
