import './App.css';
import { Button, Switch, Select } from 'antd'
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Contact from './pages/Contact/Contact';
import Product from './pages/Product/Product';
import { Routes, Route, Link } from 'react-router-dom'
import LoginContext from './context/Login/LoginContext';
import ThemeContext from './context/Theme/ThemeContext';
import { useContext } from 'react';

function App() {
    const { isLogged } = useContext(LoginContext);
    const { toggleDarkMode } = useContext(ThemeContext);

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
                        Iniciar Sesion
                    </Link>
                </Button> : <></>}
                <Select
                    defaultValue="Español"
                    options={
                        [
                            { value: 'Español', label: 'Español' },
                            { value: 'English', label: 'English' },
                        ]
                    }
                />
                <Switch
                    //checked={theme === 'dark'}
                    onChange={() => toggleDarkMode()}
                    checkedChildren="Dark"
                    unCheckedChildren="Light"
                />
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
