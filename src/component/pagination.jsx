import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

const Pagination = (props) => {

    const {itemCount, pageSize, onPageChange, curruntPage} = props;
    const pageCount = Math.ceil(itemCount / pageSize);
    
    if(pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1);

    return (

        <nav aria-label="Page navigation example">

            <ul className="pagination">
            {pages.map(page => (

                <li key={page} className={curruntPage === page ? 'page-item active' : 'page-item'}>
                    <a onClick={() => onPageChange(page)} className="page-link" >{page}</a>
                </li>

            ))}
                                               
            </ul>
        </nav>
        
    );
};

//................Type checking with proptypes.........................

Pagination.propTypes = {
    itemCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
};
 
export default Pagination;

