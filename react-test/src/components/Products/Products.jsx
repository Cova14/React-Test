import React, {Component} from 'react';
import Product from './Product';
import './product.css';

class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    name: 'HotDog',
                    url: 'https://www.viajejet.com/wp-content/viajes/el-consumo-de-comida-rapida-en-estados-unidos.jpg'
                },
                {
                    name: 'Chilaquiles',
                    url: 'https://img.chilango.com/2018/07/comida-en-el-torito.jpg'
                },
                {
                    name: 'Hamburguesa',
                    url: 'http://as01.epimg.net/deporteyvida/imagenes/2018/04/04/portada/1522855616_827022_1522855733_noticia_normal.jpg'
                }
            ]
        }
    }

    render () {
        return (
            <div>
                {this.state.products.map((product, index) => (
                <Product product={product}/>
            )
                )}
            </div>
        );
    }
}

export default Products;