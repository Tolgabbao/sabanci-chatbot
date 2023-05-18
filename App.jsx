import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import Login from './pages/login';
import Home from './pages/home';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Route
        exact
        path="/"
        render={() => (user ? <Redirect to="/home" /> : <Redirect to="/login" />)}
      />
      <Route
        path="/login"
        render={() => (user ? <Redirect to="/home" /> : <Login />)}
      />
      <Route
        path="/home"
        render={() => (user ? <Home /> : <Redirect to="/login" />)}
      />
    </Router>
  );
};

export default App;
