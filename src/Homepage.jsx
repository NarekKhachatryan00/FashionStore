import React from 'react';
import './style/homepage.css';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
    <div className="homepage">
        <div className="overlay"></div>
        <div className="content">
            <button>
                <Link to='/shop'>shop now</Link>
            </button>
        </div>
    </div>
    );
};

export default HomePage;