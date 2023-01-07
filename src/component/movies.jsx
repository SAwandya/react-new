import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getMovies } from '../servieces/fakeMovieService';
import { getGenres } from '../servieces/fakeGenreService';
import Pagination from './pagination';
import { paginate } from '../utils/paginate';
import ListGroup from './listGroup';
import MoviesTable from './moviesTable';
import _ from 'lodash';

class Movies extends Component {
    state = { 

        movies : [],
        genres: [],
        pagesize: 4,
        curruntPage: 1,
        sortColomn: { path: 'title', order: 'asc'}
     }

     componentDidMount() {
        const genres = [{_id: "", name: 'All genres'}, ...getGenres()]; 

        this.setState({movies: getMovies(), genres});

     }
     
    handleDelete = (movie) => {

        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies : movies});
    } 
    
    handlePageChange = (page) => {

        this.setState({curruntPage: page});

    }
    
    handleGenreSelect = (genre) => {

        this.setState({selectedGenre: genre, curruntPage: 1})
    }

    handleSort = sortColomn => {   
       
        this.setState({ sortColomn });
    }

    render() { 
        
        const {length: count} = this.state.movies;
        const {pagesize, curruntPage, movies: allMovies, selectedGenre, sortColomn} = this.state;

        if(count === 0) 
            return <h1>There are no movies</h1>

        const filtered = selectedGenre && selectedGenre._id? allMovies.filter(m => m.genre._id === selectedGenre._id) : allMovies;

        const sorted = _.orderBy(filtered, [sortColomn.path], [sortColomn.order]);

        const movies = paginate(sorted, curruntPage, pagesize);

        return (
            <div className="row">
                <div className="col-3">
                    <ListGroup 
                        onItemSelect={this.handleGenreSelect} 
                        items={this.state.genres}
                        selectedItem={this.state.selectedGenre} 
                        />
                </div>
                <div className="col">
                    <p>showing {count} movies</p>
                    <MoviesTable 
                    movies={movies} 
                    onDelete={this.handleDelete}
                    onSort={this.handleSort}
                    sortColomn={sortColomn}
                    />
                    
                <Pagination itemCount={filtered.length} pageSize={pagesize} onPageChange={this.handlePageChange} curruntPage={curruntPage}/>

                </div>

            
            </div>
        )
    }
}
 
export default Movies;