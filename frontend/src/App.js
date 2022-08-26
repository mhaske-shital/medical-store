import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MedicineDetails from './pages/MedicineDetails';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Index from './pages/Index';
import Profile from './pages/Profile';
import PageNotFound from './PageNotFound';
import Admin from './pages/Admin';
import Footer from './components/Footer';
import Cart from './pages/Cart';
function App() {
  return (
    <>
      <BrowserRouter>
      
        <Navbar />
        <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/MedicineDetails/:id?" component={MedicineDetails}/>
        <Route path="/signUp" component={SignUp}/>  
        <Route path="/login" component={Login}/>  
        <Route path="/admin" component={Admin}/>  
        <Route path="/indexpage" component={Index}/>  
        <Route path="/profile" component={Profile}/>  
        <Route path="/cart"  component={Cart}/>
        <Route path="/*" component={PageNotFound}/> 
        </Switch>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
