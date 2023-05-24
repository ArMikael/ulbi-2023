import React, {FC} from 'react';
import classes from "./AppLink.module.scss";
import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from "react-router-dom";

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(classes.AppLink, {}, [className, classes[theme]])}
            {...otherProps}
        >
            { children }
        </Link>
    );
};