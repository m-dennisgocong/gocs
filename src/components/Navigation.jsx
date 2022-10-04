
import menu from './../assets/menu.svg'
const Navigation = () => {

    return(
        <header id="Navigation">
        
            <a href="#"><div className='nickname'>Goc<span>s</span></div></a>

            <nav>
                <ul>
                    <li><a href="#">Project</a></li>
                    <li><a href="#">Art</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                
            </nav>
        
            <img src={menu} className="menu" alt="menu svg" />
               
        </header>
    );
}

export default Navigation;