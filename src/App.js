import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/pages/Navbar';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Notfound from './components/pages/Notfound';
import Adduser from './components/pages/Adduser';
import Edituser from './components/pages/Edituser';
import View from './components/pages/View';
import LoginForm from './components/pages/Loginform';
import RegistrationForm from './components/pages/Registrationform';
import SearchFilter from './components/pages/Searchfilter';
import Viewadmin from './components/pages/Viewadmin';


function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />

      <Routes>
       <Route exact path='/' element={<LoginForm/> } />
        <Route exact path='/register' element={<RegistrationForm/> } />
        <Route exact path='/home' element={<Home/>} />
        <Route exact path='/about' element={<About/>} />
        <Route exact path='/contact' element={<Contact/>} />
        <Route exact path='/adduser' element={<Adduser/>} />
        <Route exact path='/edituser/:id' element={<Edituser/>} />
        <Route exact path='/view/:id' element={<View/>} />
        <Route exact path='/viewadmin/:id' element={<Viewadmin/>} />
        <Route exact path='search' element={< SearchFilter/>} />
        <Route element={<Notfound/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
