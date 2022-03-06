import Works from './Works';
import About from './About';
import Header from './Header';
import Facade from './Facade';
import Services from './Services';
import Results from './Results';
import Ideas from './Ideas';


const BaseComponent = () => {


  return (
    <div>
      <Header />
      <Facade />
      <About />
      <Works />
    </div>
  )
}


export default BaseComponent;

