import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {NavigationBar} from "./navigation-bar/NavigationBar";
import {Footer} from "./footer/Footer";
import {ContactPage} from "./contact-page/ContactPage";
import {HomePage} from "./home-page/HomePage";

export default function App() {

  return (

      <BrowserRouter>

          <div>

              <NavigationBar/>

              <Switch>

                  <Route path={'/contact'}>
                      <ContactPage/>
                  </Route>

                  <Route path={'/'}>
                      <HomePage/>
                  </Route>

              </Switch>

              <Footer/>

          </div>

      </BrowserRouter>

  );
}
