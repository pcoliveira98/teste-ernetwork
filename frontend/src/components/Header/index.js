import React from 'react';
import {Link} from 'react-router-dom'
import './styles.css';

export default function Header() {
    return (
        <div>
            <ul id="header">
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/clientes'>Clientes</Link>
                </li>
                <li>
                    <Link to='/cidades'>Cidades</Link>
                </li>
            </ul>
            <hr />
        </div >
    )
}
