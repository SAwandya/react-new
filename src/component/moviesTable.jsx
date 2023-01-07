import React, { Component } from 'react';

class MoviesTable extends Component {
    
    raiseSort = path => {

        const sortColomn = {...this.props.sortColomn};
        if (sortColomn.path === path)
            sortColomn.order = (sortColomn.order === 'asc')? 'desc': 'asc';
        else{
            sortColomn.path = path;
            sortColomn.order = 'asc';
        }

        this.props.onSort(sortColomn);

    };

    render() { 

        const { movies, onDelete } = this.props;

        return (

            <table className="table">
                        <thead>
                            <tr>
                                <td onClick={() => this.raiseSort("title")}>Title</td>
                                <td onClick={() => this.raiseSort("genre.name")}>Genre</td>
                                <td onClick={() => this.raiseSort("numberInStock")}>Stock</td>
                                <td onClick={() => this.raiseSort("dailyRentalRate")}>Rate</td>
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
                                <td><button onClick={() => onDelete(movie)} type="button" className="btn btn-danger">Danger</button></td>
                            </tr>

                        ))}
                        
                    </tbody>

                </table>

        );
    }
}
 
export default MoviesTable;