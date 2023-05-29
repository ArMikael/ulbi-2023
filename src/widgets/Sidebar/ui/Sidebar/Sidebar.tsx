import React, {useState} from 'react';
import classes from "./Sidebar.module.scss";
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import {useTranslation} from "react-i18next";
import {LangSwitcher} from "widgets/LangSwitcher/LangSwitcher";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev);
    }

    const { t } = useTranslation();

    return (
        <div className={classNames(classes.Sidebar, {[classes.collapsed]: collapsed}, [className])}>
            <button onClick={onToggle}>{ t('collapse') }</button>

            <div>
                <LangSwitcher className={classes.langSwitcher} />
                <ThemeSwitcher />
            </div>
        </div>
    );
};