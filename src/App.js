import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SiteBanner from "./includes/SiteBanner";
import SiteFooter from "./includes/SiteFooter";
import SiteNavBar from "./includes/SiteNavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import MovieListing from './components/MovieListing';
import MovieInfo from './components/MovieInfo';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <SiteNavBar />
        <SiteBanner />
        <Switch>
          <Route component={Home} path="/" exact />
          <Route path="/movies" component={MovieListing} />
          <Route path="/info" component={MovieInfo} />
          <Route component={About} path="/about" />
          <Route component={Resources} path="/resources" />
          <Route component={Contact} path="/contact" />
          <Route component={NotFound} />
        </Switch>
        <SiteFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
