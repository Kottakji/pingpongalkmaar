import { h, Component } from "preact";
import { Router } from "preact-router";
import { Provider } from "@preact/prerender-data-provider";

// Code-splitting is automated for routes
import Home from "./views/Home/Home.js";
import NotFoundPage from "./views/NotFound/NotFound.js";
import AboutUs from "./views/AboutUs/AboutUs";
import HelpUsGrow from "./views/HelpUsGrow/HelpUsGrow";
import LetsHaveFun from "./views/LetsHaveFun/LetsHaveFun";
import LetsPlay from "./views/LetsPlay/LetsPlay";
import Schools from "./views/Schools/Schools";

export default class App extends Component {
  /** Gets fired when the route changes.
   *  @param {Object} event    "change" event from [preact-router](https://github.com/preactjs/preact-router)
   *  @param {string} event.url  The newly routed URL
   */
  handleRoute = (e) => {
    this.currentUrl = e.url;
  };

  render(props) {
    return (
      <Provider value={props}>
        <div id="app">
          <Router onChange={this.handleRoute}>
            <Home path="/" />
            {/* Somehow doesn't work when doing [nl, en].map() */}
            {/* IMPORTANT: Also updated prerender-urls if you add a url*/}
            {/* NL */}
            <Home path={`/nl`} />
            <LetsPlay path={`/nl/lets-play`} />
            <LetsHaveFun path={`/nl/lets-have-fun`} />
            <HelpUsGrow path={`/nl/help-us-grow`} />
            <Schools path={`/nl/schools`} />
            <AboutUs path={`/nl/about-us`} />

            {/* EN */}
            <Home path={`/en`} />
            <LetsPlay path={`/en/lets-play`} />
            <LetsHaveFun path={`/en/lets-have-fun`} />
            <HelpUsGrow path={`/en/help-us-grow`} />
            <Schools path={`/en/schools`} />
            <AboutUs path={`/en/about-us`} />

            <NotFoundPage type="404" default />
          </Router>
        </div>
      </Provider>
    );
  }
}
