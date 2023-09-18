import './App.css';
import { useReducer } from 'react';
import Home from './components/Home';
import Login from './components/Login';
import NavBar from './components/NavBar';
import HelpCenter from './components/HelpCenter';
import Footer from './components/Footer';
import { Route, Routes, } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import Career from './components/Career';
import SingleProduct from './components/SingleProduct';
import Cart from './components/Cart';

function App() {
  const user = useSelector((state) => state.user.value)
  const url=useSelector((state)=>state.urlPage.value)
  function reducer(state, action) {
    switch (action.type) {
      case "username": return { ...state, username: action.payload }
      case "password": return { ...state, password: action.payload }
      case 'userName': return { ...state, user: state.user = action.payload }
      case 'link':return{...state,pageUrl:state.pageUrl=action.payload}
      default: return state
    }
  }
  const [state, dispatch] = useReducer(reducer, {
    username: '',
    password: '',
    pageUrl:''
  })


  return (
      <div className="container-fluid overflow-hidden p-0">
      {!user.login && <Login state={state} dispatch={dispatch} />}
      {user.login && <NavBar state={state} theDispatch={dispatch} />}
      {user.login &&
      <Routes>
        <Route path='/home'  element={<Home />} />
        <Route path={`/${url}`} element={<Products />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact/> } />
          <Route path='/career' element={<Career/> } />
          <Route path='/product' element={<SingleProduct/> } />
          <Route path='/cart' element={<Cart/> } />
      </Routes>
    }
    {user.login && <HelpCenter />}
    {user.login && <Footer />}
    </div>
  );
}

export default App;


