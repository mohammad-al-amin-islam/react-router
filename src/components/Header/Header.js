import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h1>Welcome To My Routing website</h1>
            <nav>
                {/* <Link to='/'>Home</Link>
                <Link to='/about'>About</Link> */}
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/friends'>Friends</CustomLink>
                <CustomLink to='/post'>Post</CustomLink>
                <CustomLink to='/about'>About</CustomLink>

            </nav>
        </div>
    );
};

export default Header;