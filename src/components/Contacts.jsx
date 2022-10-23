import { FaGithub, FaTwitter, FaCodepen, FaFreeCodeCamp } from 'react-icons/fa';
const Contacts = () => {

    return(
        <section id="Contacts">
            <h2>Let's connect</h2>
            <p>Get in touch for opportunities or just to say hi! 👋 <br /> <span>m.dennisgocong@gmail.com</span></p>

            <div id="socials-wrapper">
                <a href="https://github.com/m-dennisgocong" target="_blank"><FaGithub/></a> <a href="https://twitter.com/dennisgocong" target="_blank"><FaTwitter/></a> <a href="https://www.freecodecamp.org/gocs" target="_blank"><FaFreeCodeCamp/></a> <a href="https://codepen.io/dennisgocong" target="_blank"><FaCodepen/></a>
            </div>
        </section>
    );
}
export default Contacts;