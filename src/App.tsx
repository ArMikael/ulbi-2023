import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import SpButton from "./components/ui/sp-button/spButton";
import './styles/index.scss';
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {useTheme} from "./theme/useTheme";


const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div>
            <div className="navbar">
                <Link className='nav-link' to={'/'}>Home</Link>
                <Link className='nav-link' to={'/about'}>About</Link>
            </div>
            React App
            <Suspense fallback={<div>Loading... </div>}>
                <Routes>
                    <Route path={'/'} element={<MainPageAsync/>} />
                    <Route path={'/about'} element={<AboutPageAsync/>} />
                </Routes>
            </Suspense>

            <button onClick={toggleTheme}>Change Theme</button>
            <SpButton />
        </div>
    );
};

export default App;