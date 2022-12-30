import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getMovies } from '../servieces/fakeMovieService';

class Movies extends Component {
    state = { 

        movies : getMovies()
     }
     
    handleDelete = (movie) => {

        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies : movies});
    } 
    
    

    render() { 
        
        const {length: count} = this.state.movies;

        if(count === 0) 
            return <h1>There are no movies</h1>

        return (
            <React.Fragment>

            <p>showing {count} movies</p>
            
            <table className="table">
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Genre</td>
                        <td>Stock</td>
                        <td>Rate</td>
                        <td>Delete</td>
                    </tr>
                </thead>
                <tbody>
                    {this.state.movies.map(movie => (

                        <tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td><button onClick={() => this.handleDelete(movie)} type="button" className="btn btn-danger">Danger</button></td>
                        </tr>

                    ))}
                    
                </tbody>

            </table>
            </React.Fragment>
        )
    }
}
 
export default Movies;