import React from "react";

import './App.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './views/home';
import About from './views/about';
import Esg from './views/esg';
import Ebt from './views/ebt';
import Edt from './views/edt';
import Overview from './views/overview';
import History from './views/history';
import SharePrice from './views/shareprice';
import Reports from './views/reports';
import Investors from './views/investors';
import Disclaimer from './views/disclaimer';
import Accessibility from './views/accessibility';
import Terms from './views/terms';
import SiteMap from './views/sitemap';
import RegulatoryNews from './views/regulatorynews';
import AdviserPage from './views/adviserpage';
import DirectorsPage from './views/directorspage';
import Team from './views/team';
import NewsPage from './views/newspage';
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
          <Route path="/enhanced-battery-technology">
            <div className="content">
              <Ebt />
            </div>
          </Route>
          <Route path="/enhanced-drive-technology">
            <div className="content">
              <Edt />
            </div>
          </Route>
          <Route path="/technologies">
            <div className="content">
              <Technologies />
            </div>
          </Route>
          <Route path="/news">
            <div className="content">
              <NewsPage />
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
          <Route path="/esg">
            <div className="content">
              <Esg />
            </div>
          </Route>
          <Route path="/overview">
            <div className="content">
              <Overview />
            </div>
          </Route>
          <Route path="/history">
            <div className="content">
              <History />
            </div>
          </Route>
          <Route path="/share-price">
            <div className="content">
              <SharePrice />
            </div>
          </Route>
          <Route path="/reports-documents">
            <div className="content">
              <Reports />
            </div>
          </Route>
          <Route path="/regulatory-news">
            <div className="content">
              <RegulatoryNews />
            </div>
          </Route>
          <Route path="/advisers">
            <div className="content">
              <AdviserPage />
            </div>
          </Route>
          <Route path="/directors">
            <div className="content">
              <DirectorsPage />
            </div>
          </Route>
          <Route path="/investors">
            <div className="content">
              <Investors />
            </div>
          </Route>
          <Route path="/disclaimer">
            <div className="content">
              <Disclaimer />
            </div>
          </Route>
          <Route path="/accessibility">
            <div className="content">
              <Accessibility />
            </div>
          </Route>
          <Route path="/terms">
            <div className="content">
              <Terms />
            </div>
          </Route>
          <Route path="/sitemap">
            <div className="content">
              <SiteMap />
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
