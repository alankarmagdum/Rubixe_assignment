import './App.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import Main from './components/Main';
import Section from './components/Section';
import Contact from './components/Contact';
import SmallSection from './components/SmallSection';

import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Header/>
        <Section/>
        <SmallSection/>
        <Main/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
