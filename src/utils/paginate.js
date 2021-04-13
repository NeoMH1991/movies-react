import _ from 'lodash';

//This function 

export function paginate(items, pageNumber, pageSize) {
    const startIndex = (pageNumber-1) * pageSize;
    return _(items) //convert movies to object for chaining methods
    .slice(startIndex) //returns an array with n elements sliced from start
    .take(pageSize)    //returns an array with n elements taken from beginning
    .value(); //returns a regular array
}


//pageNumber = currentpage = dynamic = 1
//items = Array of 9 Movies
//pagesize = 4 items per page
//startIndex = 