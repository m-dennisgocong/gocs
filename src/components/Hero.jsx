import arrowDown from './../assets/arrow-down.svg'
const Hero = () => {

    return(
        <section id="Hero">
        <h1><span id="underline">Hi, I'm Dennis Goc-ong</span></h1>
        <p><span id="rule">Frontend Developer</span> <br/> being able to translate any design into code makes me happy.</p>
        <img id="arrowDown" src={arrowDown} alt="arrow point down" />
        </section>
    );
}
export default Hero;