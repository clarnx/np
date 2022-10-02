import React from 'react';
import classes from './Errors.module.scss'

const ErrorLabel = (props) => {
    return (
        <label className={classes.errorLabel}>
            {props.children}
        </label>
    );
};

export default ErrorLabel;