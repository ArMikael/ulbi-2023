import React from 'react';
import SpButton from "../components/ui/sp-button/spButton";
import './styles/index.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {useTheme} from "app/providers/ThemeProvider";
import {Sidebar} from "widgets/Sidebar";

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={ classNames('app', {}, [theme]) }>
            <Navbar />
            <div className="main-content">
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    );
};

export default App;