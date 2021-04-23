import React, { Component } from "react";
import {Route, Redirect, Switch} from 'react-router-dom';
import Movies from './components/movies';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import NavBar from "./components/navBar";
import MovieForm from './components/movieForm';
import LoginForm from "./components/loginForm";
import Movie from './hoc/Movie';
import Counter from './hoc/counter'
import Users from './hoc/users';
import './App.css';
import axios from 'axios';
// import 'react-toastify/dist/react-toastify.css'
import registerForm from "./components/registerForm";
import Backend from "./components/backend";


class App extends Component {
  render() { 
    return (
        // <MoviePage />
      <React.Fragment>
        <NavBar />
        <main className="container">
        {/* <Backend /> */}
        <Switch>
        <Route path="/login" component={LoginForm} />
          <Route path="/movies/:id" component={MovieForm} />
          <Route path="/movies" component={Movies} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/register" component={registerForm} />
          <Redirect from='/' to='/movies' exact />
          <Redirect to='/not-found' />
        </Switch>
        </main>   
      </React.Fragment>
    );
  }
}

export default App;
