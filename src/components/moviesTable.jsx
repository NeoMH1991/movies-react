import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Like from './common/like';
import TableBody from './common/tableBody';
import TableHeader from './common/tableHeader';

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
    <table className="table">
    <TableHeader 
      columns={this.columns}
      sortColumn={sortColumn}
      onSort={onSort}
    />



<TableBody 
  columns={this.columns}
  data={this.props.movies}
/>
  {/* <tbody>
      {movies.map(m => (
        <tr key={m._id}>
          <td>{m.title}</td>
          <td>{m.genre.name}</td>
          <td>{m.numberInStock}</td>
          <td>{m.dailyRentalRate}</td>
          <td><Like 
          liked={m.liked} 
          onClick={() => onLike(m)}
          /></td>
          <td>
            <button 
            onClick={() => onDelete(m)}
            className='btn btn-danger btn-sm'
            >Delete</button>
          </td>
        </tr>
      ))}
  </tbody>   */}
</table>)
      
  }
}
 

 
export default MoviesTable;