import React from 'react';

const Pagination = ({ productsPerPage, totalProducts, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="pagination">
            <ul>
                {pageNumbers.map(number => (
                    <li key={number}>
                        <button
                            onClick={() => paginate(number)}
                            className={currentPage === number ? 'active' : ''}
                        >
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;