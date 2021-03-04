import React from "react";

import bulma from 'bulma';
import './App.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

import Home from './views/home';
import About from './views/about';
import Team from './views/team';
import News from './views/news';
import Facilities from './views/facilities';
import Technologies from './views/technologies';
import Contact from './views/contact';
import Jobs from './views/jobs';
import Articles from './views/articles';
import Partners from './views/partners';
import Privacy from './views/privacy';
import Header from './layout/header';
import Footer from './layout/footer';

export default function App() {

  return (
      <Router>
        <Header />

        <Switch>
          <Route path="/privacy">
            <div className="content">
              <Privacy />
            </div>
          </Route>
          <Route path="/partners">
            <div className="content">
              <Partners />
            </div>
          </Route>
          <Route path="/about">
            <div className="content">
              <About />
            </div>
          </Route>
          <Route path="/team">
            <div className="content">
              <Team />
            </div>
          </Route>
          <Route path="/facilities">
            <div className="content">
              <Facilities />
            </div>
          </Route>
          <Route path="/technologies">
            <div className="content">
              <Technologies />
            </div>
          </Route>
          <Route path="/news">
            <div className="content">
              <News />
            </div>
          </Route>
          <Route path="/articles/:id">
            <div className="content">
              <Articles />
            </div>
          </Route>
          <Route path="/contact">
            <div className="content">
              <Contact />
            </div>
          </Route>
          <Route path="/jobs">
            <div className="content">
              <Jobs />
            </div>
          </Route>
          <Route path="/">
            <div className="content">
              <Home />
            </div>
          </Route>
        </Switch>
        <Footer />
      </Router>

    );

}
