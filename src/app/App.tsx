import React from 'react';
import SpButton from "../components/ui/sp-button/spButton";
import './styles/index.scss';
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/navbar";

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={ classNames('app', {}, [theme]) }>
            <Navbar />
            <AppRouter />
            <button onClick={toggleTheme}>Change Theme</button>
            <SpButton />
        </div>
    );
};

export default App;