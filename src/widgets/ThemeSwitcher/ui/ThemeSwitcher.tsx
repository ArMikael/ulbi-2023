import React from 'react';
import classes from "./ThemeSwitcher.module.scss";
import {classNames} from 'shared/lib/classNames/classNames';
import {useTheme} from "app/providers/ThemeProvider";
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import {Theme} from "app/providers/ThemeProvider/ThemeContext";
import {Button, ButtonTheme} from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames(classes.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            {
                theme === Theme.DARK ? <DarkIcon /> : <LightIcon />
            }
        </Button>
    );
};