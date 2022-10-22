import { useState } from 'react';
import close from './../assets/close.svg'
import menu from './../assets/menu.svg'

const Navigation = () => {

    const handleNavMenu = () => {
        setNavMenu(!navMenu)
    };

    const [navMenu, setNavMenu] = useState(false);

    return(
        <header id="Navigation">
        
            <a href="#" id="logo"><div className='nickname'>Goc<span>s</span></div></a>

            <nav style={navMenu ? {transform: "translateX(0)"} : null }>
                <img src={close} className="close" alt="close menu" onClick={handleNavMenu}/>
                <ul>
                    <li><a href="#" onClick={handleNavMenu}>Home</a></li>
                    <li><a href="#Projects" onClick={handleNavMenu}>Project</a></li>
                    <li><a href="#Arts" onClick={handleNavMenu}>Art</a></li>
                    <li><a href="#Contacts" onClick={handleNavMenu}>Contact</a></li>
                </ul>
            </nav>
        
            <img src={menu} className="menu" alt="menu svg" onClick={handleNavMenu}/>
               
        </header>
    );
}

export default Navigation;