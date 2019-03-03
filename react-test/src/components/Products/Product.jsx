import React from 'react';

const Product = (props) => {
    return (
        <div className='card-container'>
            <div className='card'>
                <div>
                    <img src={props.product.url} alt=""/>
                </div>
                <div>
                    <p>
                        {props.product.name}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Product;