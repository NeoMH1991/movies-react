import React, { Component } from "react";
import MoviesTable from './moviesTable';
import Pagination from './common/pagination';
import ListGroup from './common/listGroup';
import { getMovies } from "../services/fakeMovieService";
import { paginate } from '../utils/paginate'
import _ from 'lodash';
import { genres, getGenres } from "../services/fakeGenreService";
import { filter } from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    pageSize: 4, //renders 4 movies per page
    currentPage: 1,
    genres: [],
    selectedGenre: '',
    sortColumn: { path: 'title', order: 'asc'}
  };

componentDidMount() {
  const genres = [{ _id:'', name: 'All Genres'}, ...getGenres()] //using ... to insert 1 more item in array
  this.setState({
    movies: getMovies(),
    genres
  })
}

handleDelete = movie => { //Function reference are not hoisted
  const movies = this.state.movies.filter(m => m._id !== movie._id);
  this.setState({ movies });
};

handleLike = movie => {
  const movies = [...this.state.movies];
  const index = movies.indexOf(movie);
  movies[index] = { ...movies[index] };
  movies[index].liked = !movies[index].liked;
  this.setState({ movies });
};

handlePageChange = page => {
  //receives a page number and forward user to that page
  this.setState({ 
    currentPage: page
  });
}

handleGenreSelect = genre => {
  this.setState({
    selectedGenre: genre,
    currentPage: 1,
  });
}

handleSort = sortColumn => {
  this.setState({ sortColumn });
}

  render() {  
    //Object destructuring
    const {pageSize, currentPage, movies:allMovies, selectedGenre, sortColumn} = this.state;

const filtered = selectedGenre && selectedGenre !== 'All Genres' //if both are truthy then execute filter
? allMovies.filter(m => m.genre.name === selectedGenre) 
: allMovies;

const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order])
const movies = paginate(sorted, currentPage, pageSize); //something wrong here

    return (
      <div className='row'>
      <div className="col-3">
<ListGroup //inputs it needs to receive
items={this.state.genres}
selectedItem={this.state.selectedGenre}
onItemSelect={this.handleGenreSelect}
/>

      </div>
      <div className="col">
      <p>Showing {filtered.length} movies in the database</p>

      <MoviesTable 
        movies={movies}
        sortColumn={sortColumn}
        onLike={this.handleLike}
        onDelete={this.handleDelete}
        onSort = {this.handleSort}
      />

<Pagination  //inputs this component needs to receive
itemsCount={filtered.length} //Total no.of.items to render
pageSize={this.state.pageSize}        //Renders 4 item/page
currentPage={this.state.currentPage}  //Current page user is at
onPageChange={this.handlePageChange} //Clickevent when user click page.no
/>

      </div>
      </div>

     
      );
  }
}

export default Movies;
