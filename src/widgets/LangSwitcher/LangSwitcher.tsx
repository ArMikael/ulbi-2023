import React from 'react';
import classes from "./LangSwitcher.module.scss";
import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from "react-i18next";
import {Button, ButtonTheme} from "shared/ui/Button/Button";

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
    }

    return (
        <Button
            className={classNames(classes.LangSwitcher, {}, [className])}
            theme={ ButtonTheme.CLEAR }
            onClick={toggleLanguage}>{ t('language') }
        </Button>
    );
};