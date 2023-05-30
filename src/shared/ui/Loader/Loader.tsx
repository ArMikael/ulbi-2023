import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.module.scss';

interface LoadersProps {
    className?: string;
}

export const Loader = ({ className }: LoadersProps) => (
    <div className={classNames('lds-ripple', {}, [className])}>
        <div />
        <div />
    </div>
);
