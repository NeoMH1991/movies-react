import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Like from './common/like';
import TableHeader from './common/tableHeader';
import TableBody from './common/tableBody';

class MoviesTable extends Component {
  columns = [ //property instead of state as this doesnt change
    {path: 'title', 
    label: 'Title', 
    content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
  }, 
    {path: 'genre.name', label: 'Genre'},     //2
    {path: 'numberInStock', label: 'Stock'},  //3
    {path: 'dailyRentalRate', label: 'Rate'}, //4
    {key: 'like', content: movie => (<Like    //5
    liked={movie.liked}
    onClick={() => this.props.onLike(movie)}
    /> )},
    {key: 'delete', content: movie => (       //6
    <button
    onClick={() => this.props.onDelete(movie)}
    className='btn btn-danger btn-sm'
    > Delete</button>) },
  ]

  render() { 
    const {data, onLike, onDelete, onSort, sortColumn} = this.props; //onLike is a func-reference to the handleer in the parent

    return (
      <table className='table'>
        <TableHeader columns={this.columns} sortColumn={sortColumn} onSort={onSort} />
        <TableBody columns={this.columns} data={data}/>
        </table>    )
  }
}
 

 
export default MoviesTable;