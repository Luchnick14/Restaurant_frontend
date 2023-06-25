import React from 'react';
import { GiHambugerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);
    return (
        <nav className="app__navbar">
            <div className='app__navbar-logo'>
                <img src={images.gerincht} alt="app_logo" />
            </div>
            
            <ul className='app__navbar-links'>
                <li className='p__opensans'><a href='#home'>Home</a></li>
                <li className='p__opensans'><a href='#home'>About</a></li>
                <li className='p__opensans'><a href='#home'>Menu</a></li>
                <li className='p__opensans'><a href='#home'>Awards</a></li>
                <li className='p__opensans'><a href='#home'>Contact</a></li>
            </ul>
            
            <div className='app__navbar-login'>
                <a href="#login" className='p__opensans'>Log In / Sign In</a>
                <div style={{ backgroundColor: 'red'}}/> {/*Hay que quitar el color del div al mostrarse*/}
                <a href="/" className='p__opensans'>Book a Table</a>
            </div>
            
            <GiHambugerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
            {toggleMenu && (
                <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
                    <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
                    <ul className='app__navbar-smallscreen_links'>
                        <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
                        <li><a href="#home" onClick={() => setToggleMenu(false)}>About</a></li>
                        <li><a href="#home" onClick={() => setToggleMenu(false)}>Menu</a></li>
                        <li><a href="#home" onClick={() => setToggleMenu(false)}>Awards</a></li>
                        <li><a href="#home" onClick={() => setToggleMenu(false)}>Contact</a></li>
                    </ul>               
                </div>
            )}
        </nav>
    )
}

export default Navbar