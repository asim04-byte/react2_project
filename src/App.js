import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavbarComponent from './e-cart/navbar/navbar.jsx';
import { LatestItems } from './e-cart/latest/latest.jsx';
import Signups from './e-cart/signup/signup.jsx';
import Signins from './e-cart/signin/sign.jsx';
import Men from './e-cart/men/men.jsx'
import Kid from './e-cart/kid/kid.jsx'
import Womens from './e-cart/womens/womens.jsx'

function App() {
  
  const isAuthenticated = true; 

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="sign_up" element={<Signups />} />
          <Route path="/latest" element={<LatestItems />} />
          <Route path="/" element={< Signins/>} />
          <Route path="/navbar" element={<NavbarComponent isAuthenticated={isAuthenticated} />}/>
          <Route path="/men" element={<Men/>}/>
          <Route path="/kids" element={<Kid/>}/>
          <Route path="/womens" element={<Womens/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App