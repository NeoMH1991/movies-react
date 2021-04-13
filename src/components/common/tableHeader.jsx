import React, { Component } from 'react';

class TableHeader extends Component {

    //colums: array
    //sortColumn: obj
    //onSort: func

    //Logic for sorting - when func is required, cc instead of sfc
    raiseSort = path => {
    const sortColumn = {...this.props.sortColumn};
      if (sortColumn.path === path) 
      sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc';
      else {
        sortColumn.path = path;
        sortColumn.order = 'asc'
      }
      this.props.onSort(sortColumn);
      };

    render() { 
        return (
            <thead>
                <tr> 
{this.props.columns.map(c => (
    <th 
    onClick={() => this.raiseSort(c.path)}
    key={c.path || c.key}
    >{c.label}</th>
))}
                </tr>
            </thead>

        );
    }
}
 
export default TableHeader;