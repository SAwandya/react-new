import React, { Component } from 'react';

const ListGroup = (props) => {
    const {items, textProperty, valuePrperty, onItemSelect, selectedItem} = props;

    return <ul className="list-group">
        {items.map(item => 
            <li className={item === selectedItem? 'list-group-item active' : 'list-group-item'} 
                onClick={() => onItemSelect(item)} 
                key={item[valuePrperty]}>
                {item[textProperty]}
            </li>
            
            )}
        
    </ul>;
     
};

ListGroup.defaultProps = {
    textProperty: "name",
    valuePrperty: "_id"
};
 
export default ListGroup;