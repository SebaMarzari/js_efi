import './App.css';
import { Button, Switch, Select } from 'antd'
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Contact from './pages/Contact/Contact';
import Product from './pages/Product/Product';
import { Routes, Route, Link } from 'react-router-dom'
import LoginContext from './context/Login/LoginContext';
import ThemeContext from './context/Theme/ThemeContext';
import TranslateContext from './context/Translate/TranslateContext';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

function App() {
    const { isLogged } = useContext(LoginContext);
    const { toggleDarkMode, darkMode } = useContext(ThemeContext);
    const { toggleLanguage } = useContext(TranslateContext);
    const { t } = useTranslation();

    return (
        <div className='appContainer'>
            <nav className='navBar'>
                <Button>
                    <Link to='/'>
                        {t("home")}
                    </Link>
                </Button>
                <Button>
                    <Link to='/contact'>
                        {t("contact")}
                    </Link>
                </Button>
                {!isLogged ? <Button>
                    <Link to='/login'>
                        {t("login")}
                    </Link>
                </Button> : <></>}
                <Select
                    defaultValue="Español"
                    options={
                        [
                            { value: 'es', label: 'Español' },
                            { value: 'en', label: 'English' },
                        ]
                    }
                    onSelect={(e) => toggleLanguage(e)}
                />
                <Switch
                    checked={darkMode}
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
