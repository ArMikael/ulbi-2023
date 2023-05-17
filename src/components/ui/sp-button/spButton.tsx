import React from 'react';
import classes from './spButton.module.scss';

const SpButton = () => {
    return (
        <div className={classes.spButtonContainer}>
            <button className={classes.spButton}>Click Me</button>
            <button className={classes.kebabCaseClass}>Test</button>
        </div>
    );
};

export default SpButton;