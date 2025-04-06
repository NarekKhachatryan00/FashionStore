import React, { useState, useEffect } from "react";
import './style/shop.css';
import axios from 'axios';

function Shop() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setProducts(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching products:", error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="shop">
            <div className="carousel">
                {products.map((product) => (
                    <div key={product.id} className="carousel-item">
                        <img src={product.image} alt={product.title} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Shop;