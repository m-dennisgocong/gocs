import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Arts from './components/Arts';

import './styles/Navigation.scss';
import './styles/Hero.scss';
import './styles/Projects.scss';
import './App.scss';


function App() {
 
  return (
    <>
      <Navigation />
      <Hero/>
      <Projects/>
      <Arts/>
    </>
  )
}

export default App
