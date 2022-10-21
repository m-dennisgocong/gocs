import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Arts from './components/Arts';
import Contacts from './components/Contacts';

import './styles/Navigation.scss';
import './styles/Hero.scss';
import './styles/Projects.scss';
import './styles/Arts.scss';
import './styles/Contacts.scss'

import './App.scss';


function App() {
 
  return (
    <>
      <Navigation />
      <Hero/>
      <Projects/>
      <Arts/>
      <Contacts/>
    </>
  )
}

export default App
