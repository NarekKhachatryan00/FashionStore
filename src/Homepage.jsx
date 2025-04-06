import React from 'react';
import './style/homepage.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function HomePage() {
    const history = useHistory()
    const clicked = () => {
        history.push('/shop')
    }
    return (
    <div className="homepage">
        <div className="overlay"></div>
        <div className="content">
            <button onClick={clicked}>
                shop now
            </button>
        </div>
    </div>
    );
};

export default HomePage;