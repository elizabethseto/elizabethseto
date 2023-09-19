import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Home, Navbar } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Home />
        </div>
        <About />
        <Experience />
        <div className='relative z-0'>
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;