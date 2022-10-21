import { FaGithub, FaTwitter, FaCodepen } from 'react-icons/fa';
const Contacts = () => {

    return(
        <section id="Contacts">
            <h2>Let's connect</h2>
            <p>Get in touch for opportunities or just to say hi! 👋 <br /> <span>m.dennisgocong@gmail.com</span></p>

            <div id="socials-wrapper">
                <FaGithub/> <FaTwitter/> <FaCodepen/>
            </div>
        </section>
    );
}
export default Contacts;