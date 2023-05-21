import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import SpButton from "../components/ui/sp-button/spButton";
import './styles/index.scss';
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={ classNames('app', {}, [theme]) }>
            <div className="navbar">
                <Link className='nav-link' to={'/'}>Home</Link>
                <Link className='nav-link' to={'/about'}>About</Link>
            </div>
            React App
            <Suspense fallback={<div>Loading... </div>}>
                <Routes>
                    <Route path={'/'} element={<MainPage />} />
                    <Route path={'/about'} element={<AboutPage />} />
                </Routes>
            </Suspense>

            <button onClick={toggleTheme}>Change Theme</button>
            <SpButton />
        </div>
    );
};

export default App;