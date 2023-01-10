//import logo from './logo.svg';
import './App.css';
import Movies from './component/movies';
import { Redirect, Route, Switch  } from 'react-router-dom';
import Customers from './component/customers';
import Rentals from './component/rentals';
import NotFound from './component/notFound';
import React, {Component} from 'react';
import NavBar from './component/navBar';
import MovieForm from './component/movieForm';
import LogingForm from './component/loging';


class App extends Component {
  
  render() { 
    return (

      <React.Fragment>
        <NavBar/>

        <main>
          <Switch>
            <Route path="/loging" component={LogingForm}></Route>
            <Route path="/movies/:id" component={MovieForm}></Route>
            <Route path="/movies" component={Movies}></Route>
            <Route path="/customers" component={Customers}></Route>
            <Route path="/rentals" component={Rentals}></Route>
            <Route path="/notFound" component={NotFound}></Route>
            <Redirect from="/" exact to="/movies"></Redirect>
            <Redirect to="/notFound"></Redirect>
          </Switch>

        </main>

      </React.Fragment>

       
    );
  }
}
 
export default App;

