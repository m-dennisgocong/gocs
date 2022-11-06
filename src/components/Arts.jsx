import { myArts } from "../data/ArtsList.js";
const Arts = () => {
    return(
    <section id="Arts">
        <h2>CSS Arts</h2>
        <p>In my spare time, I'm on <a href="https://codepen.io/dennisgocong" target="_blank">CodePen</a> making art out of code or doing the <a href="https://codepen.io/challenges" target="_blank">CodePen Challenges</a>. <br />Here's my collection, check it out:</p>
        <div className="scrollong-wrapper snaps-inline">
            {myArts.map((art,index)=> <a className="card" key={index} href={art.link} target="_blank"><img src={art.img}/></a>)}   
        </div>
    </section>
    );
}
export default Arts;