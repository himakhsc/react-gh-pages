import React from 'react';
import ShopMen from './../../assets/p1.jpg';
import ShopWomen from './../../assets/p2.jpg';
import './styles.css';


const Directory = props => {
    return (
        <div className="directory">
            <div className="hero_section">
                <div 
                    className="item"
                    style={{
                        backgroundImage: `url(${ShopWomen})`,
                    }}
                >
                    <a href="#">Shop For Women</a>
                </div>
                <div 
                    className="item"
                    style={{
                        backgroundImage: `url(${ShopMen})`,

                    }}
                >
                    <a href="#">Shop For Men</a>
                </div>
            </div>
           
        </div>
    )
}

export default Directory