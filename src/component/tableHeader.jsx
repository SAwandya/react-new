import React, { Component } from 'react';


class TableHeader extends Component {
    
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

    renderSortIcon = (column) => {
        const { sortColomn } = this.props;

        if (column.path !== sortColomn.path) return null;

        if (sortColomn.order === 'asc') return <i className="fa fa-sort-asc"></i>
        return <i className="fa fa-sort-desc"></i>;
    }
    render() { 
        return (
            <thead>
                <tr>
                    {this.props.columns.map(column => 
                        <th key={column.path} onClick={() => this.raiseSort(column.path)}>
                            {column.label} {this.renderSortIcon(column)}</th>
                        )}
                    
                </tr>
            </thead>

        );
    }
}
 
export default TableHeader;