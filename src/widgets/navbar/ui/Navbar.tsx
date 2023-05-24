import React from 'react';
import classes from "./Navbar.module.scss";
import {classNames} from 'shared/lib/classNames/classNames';
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";

interface NavbarProps {
    className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(classes.navbar, {}, [className])}>
            <AppLink theme={AppLinkTheme.PRIMARY} className={classes.navLink} to={'/'}>Home</AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} className={classes.navLink} to={'/about'}>About</AppLink>
        </div>
    );
};

export default Navbar;