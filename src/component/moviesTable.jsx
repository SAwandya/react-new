import React, { Component } from 'react';
import Table from './table';

class MoviesTable extends Component {
    columns = [
        { path: 'title', label: 'Title'},
        { path: 'genre.name', label: 'Genre'},
        { path: 'numberInStock', label: 'Stock'},
        { path: 'dailyRentalRate', label: 'Rate'},
        { key: 'delete', content: movie => <button onClick={() => this.props.onDelete(movie)} type="button" className="btn btn-danger">Delete</button> }
        
    ];
    

    render() { 

        const { movies, onDelete, onSort, sortColomn } = this.props;

        return (

             <Table 
             columns={this.columns}
             data={movies}
             sortColomn={sortColomn}   
             onSort={onSort}
             />    
        );
    }
}
 
export default MoviesTable;