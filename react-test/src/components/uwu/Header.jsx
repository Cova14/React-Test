import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

class Header extends Component {
    render (){
        return (
            <div id='header'>
                <ul>
                    <NavLink className='link' to='/'>
                        <li>Home</li>
                    </NavLink>
                    <NavLink className='link' to='/products'>
                        <li>Products</li>
                    </NavLink>
                    <NavLink className='link' to='/contact'>
                        <li>Contact</li>
                    </NavLink>
                </ul>
            </div>
        );
    }
}

export default Header;