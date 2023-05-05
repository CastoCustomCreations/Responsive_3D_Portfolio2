import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Navbar, Tech, Works, StarsCanvas, Tech1 } from "./components";
import WalkingCat from "./components/WalkingCat";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          {/* <Hero /> */}
        </div>
        <About />
        <WalkingCat />
        <Experience />
        <Tech />
        <Tech1 />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
