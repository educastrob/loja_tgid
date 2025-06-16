import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import Pagination from '../components/Pagination';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 9;

    useEffect(() => {
        fetch('http://localhost:3001/products')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="home">
            <h1>TGID Store - Ultimos Produtos</h1>
            <div className="products-grid">
                {currentProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <Pagination
                productsPerPage={productsPerPage}
                totalProducts={products.length}
                paginate={paginate}
                currentPage={currentPage}
            />
        </div>
    );
};

export default Home;