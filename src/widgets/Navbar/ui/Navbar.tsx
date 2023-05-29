import React from 'react';
import classes from "./Navbar.module.scss";
import {classNames} from 'shared/lib/classNames/classNames';
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {useTranslation} from "react-i18next";

interface NavbarProps {
    className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(classes.navbar, {}, [className])}>
            <div className={classes.navLinkPanel}>
                <AppLink theme={AppLinkTheme.PRIMARY} className={classes.navLink} to={'/'}>
                    { t('home') }
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} className={classes.navLink} to={'/about'}>
                    { t('about') }
                </AppLink>
            </div>
        </div>
    );
};

export default Navbar;