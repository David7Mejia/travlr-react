// frontend/src/App.js
import './index.css'
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, useLocation  } from "react-router-dom";
import * as sessionActions from "./store/session";
import SignupForm from "./components/SignupFormModal";
import Navigation from "./components/Navigation";
import Homepage from "./components/Homepage";
import Upload from "./components/Upload";
import SinglePost from "./components/SinglePost";
import EditPost from './components/EditPost';
import Profile from './components/Profile';
import Footer from './components/Footer';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

 const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <div>

        <Navigation isLoaded={isLoaded} />
        <Footer />
      {isLoaded && (
        <Switch>
          <Route path="/signup">
            <SignupForm />
            </Route>
            <Route path='/upload-image'>
              <Upload />
            </Route>
            <Route path='/edit-image'>
              <EditPost />
            </Route>
            <Route exact path='/'>
            <Homepage />
            </Route>
            <Route path='/images/:id'>
              <SinglePost />
            </Route>
            <Route path='/user/:id'>
              <Profile  />
            </Route>
          </Switch>
        )}
      </div>
      </>
  );

}

export default App;
