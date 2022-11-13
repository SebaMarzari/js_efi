import './App.css';
import { Button } from 'antd'
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Contact from './pages/Contact/Contact';
import Product from './pages/Product/Product';
import { Routes, Route, Link } from 'react-router-dom'
import LoginProvider from './context/Login/LoginProvider';
import LoginContext from './context/Login/LoginContext';
import { useContext } from 'react';

function App() {
    const { isLogged } = useContext(LoginContext);
    return (
        <div className='appContainer'>
            <nav className='navBar'>
                <Button>
                    <Link to='/'>
                        Inicio
                    </Link>
                </Button>
                <Button>
                    <Link to='/contact'>
                        Contacto
                    </Link>
                </Button>
                {!isLogged ? <Button>
                    <Link to='/login'>
                        Registrarse
                    </Link>
                </Button> : <></>}
            </nav>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/product/:id' element={<Product />} />
            </Routes>
        </div>
    );
}

export default App;
