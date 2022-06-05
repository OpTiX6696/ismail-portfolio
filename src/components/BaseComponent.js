import Works from './Works';
import About from './About';
import Header from './Header';
import Facade from './Facade';
import Footer from './Footer';
// import Results from './Results';
// import Ideas from './Ideas';
import Contact from './Contact';
import Tools from './Tools';


const BaseComponent = () => {


  return (
    <div>
      <Header />
      <Facade />
      <About />
      <Works />
      <Contact />
      <Tools />
      <Footer />
    </div>
  )
}


export default BaseComponent;

