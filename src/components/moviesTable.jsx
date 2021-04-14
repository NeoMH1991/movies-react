import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Like from './common/like';
import TableBody from './common/tableBody';
import TableHeader from './common/tableHeader';
import Table from './common/table';

class MoviesTable extends Component {
  columns = [ //property instead of state as this doesnt change
    {path: 'title', 
    label: 'Title', 
    content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
  },
    {path: 'genre.name', label: 'Genre'},
    {path: 'numberInStock', label: 'Stock'},
    {path: 'dailyRentalRate', label: 'Rate'},
    {key: 'like', content: movie => (<Like 
    liked={movie.liked}
    onClick={() => this.props.onLike(movie)}
    /> )},
    {key: 'delete', content: movie => (
    <button
    onClick={() => this.props.onDelete(movie)}
    className='btn btn-danger btn-sm'
    > Delete</button>) },
  ]

  render() { 
    const {movies, onLike, onDelete, onSort, sortColumn} = this.props; //onLike is a func-reference to the handleer in the parent

    return (
    <Table columns={this.columns} data={movies} sortColumn={sortColumn} onSort={onSort}/>
    )
  }
}
 

 
export default MoviesTable;