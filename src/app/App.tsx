import React from 'react';
import {Link} from 'react-router-dom';
import SpButton from "../components/ui/sp-button/spButton";
import './styles/index.scss';
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={ classNames('app', {}, [theme]) }>
            <div className="navbar">
                <Link className='nav-link' to={'/'}>Home</Link>
                <Link className='nav-link' to={'/about'}>About</Link>
            </div>

            <AppRouter />
            <button onClick={toggleTheme}>Change Theme</button>
            <SpButton />
        </div>
    );
};

export default App;