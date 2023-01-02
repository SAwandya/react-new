import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getMovies } from '../servieces/fakeMovieService';
import Pagination from './pagination';
import { paginate } from '../utils/paginate';

class Movies extends Component {
    state = { 

        movies : getMovies(),
        pagesize: 4,
        curruntPage: 1
     }
     
    handleDelete = (movie) => {

        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies : movies});
    } 
    
    handlePageChange = (page) => {

        this.setState({curruntPage: page});

    }
    

    render() { 
        
        const {length: count} = this.state.movies;
        const {pagesize, curruntPage, movies: allMovies} = this.state;

        if(count === 0) 
            return <h1>There are no movies</h1>

        const movies = paginate(allMovies, curruntPage, pagesize);

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
                    {movies.map(movie => (

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
            <Pagination itemCount={count} pageSize={pagesize} onPageChange={this.handlePageChange} curruntPage={curruntPage}/>
            </React.Fragment>
        )
    }
}
 
export default Movies;