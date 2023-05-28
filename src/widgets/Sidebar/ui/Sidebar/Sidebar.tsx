import React, {useState} from 'react';
import classes from "./Sidebar.module.scss";
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev);
    }

    return (
        <div className={classNames(classes.Sidebar, {[classes.collapsed]: collapsed}, [className])}>
            <button onClick={onToggle}>Toggle</button>

            <div className="switchers-container">
                <ThemeSwitcher />
            </div>
        </div>
    );
};