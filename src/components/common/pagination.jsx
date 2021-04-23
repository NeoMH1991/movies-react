import React from "react";
import PropTypes from 'prop-types';
import _ from 'lodash';

const Pagination = (props) => {
    //Create an array and map it to page-link, get info from parents
    const {itemsCount, pageSize, onPageChange, currentPage} = props;

    const pagesCount = Math.ceil(itemsCount/pageSize);
    if (pagesCount === 1) return null;
    const pages = _.range(1, pagesCount+1); //=> [1,2,3]
    return <nav>
    
  <ul className="pagination">
  {pages.map(p => (
    <li key={p} className={p === currentPage? 'page-item active' : 'page-item'}>
    <a className="page-link" 
       onClick={() => onPageChange(p)}
    >{p}</a>
    </li>
  ))}
  </ul>
</nav>
;}

Pagination.propTypes = { //Adding a new property to Pagination
    itemsCount: PropTypes.number.isRequired, //Add validation to all the props
    pageSize: PropTypes.number.isRequired, 
    onPageChange: PropTypes.func.isRequired, 
    currentPage: PropTypes.number.isRequired
};

 
export default Pagination;   

