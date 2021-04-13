import React from "react";
import propType from 'prop-types';

const ListGroup = (props) => {
    const {items, onItemSelect, selectedItem,textProperty, valueProperty} = props; // => 

    return(
        <ul className="list-group">
    {items.map(g=> (
        <li key={g[valueProperty]} //replaced _id with valueProperty
        className={selectedItem===g.name ? 'list-group-item active' : 'list-group-item'}
        onClick={() => onItemSelect(g.name)}
        >{g[textProperty]}</li> //replaced name with textProperty
    ))} 
      
</ul>
    );
}

//Created defaultProps and deleted these 2 props from parent
ListGroup.defaultProps = {
    valueProperty: '_id',
    textProperty: 'name',
}
 
export default ListGroup;