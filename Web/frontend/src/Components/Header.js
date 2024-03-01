import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <div className='Header'>
            <div className='Left'>
                <img src={require('../img/favicon.png')} alt='png'></img>
                <h1>Melody Music</h1>
            </div>
            <div className='Right'>
                <ul>
                    <Link to='/'>
                        <li>
                            <i className="fa-solid fa-house"></i><span>Home</span>
                        </li>
                    </Link>
                    <Link to='/search'>
                        <li>
                            <i className="fa-solid fa-magnifying-glass"></i><span>Search</span>
                        </li>
                    </Link>
                    <Link to='/profile'>
                        <li>
                            <i className="fa-solid fa-user"></i><span>
                                {
                                    (localStorage.getItem('Token')) ? localStorage.getItem('Token') : 'Profile'
                                }
                            </span>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Header