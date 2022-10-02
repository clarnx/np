import React from 'react';
import classes from '../Result.module.scss'

//comp
import CopyButton from '../../CopyButton/CopyButton';

const Result = () => {
    return (
        <div className={classes.resultContainer}>
            <label>Résultat</label>
            <div>
                <input id='result' />
                <CopyButton />
            </div>
        </div>
    );
};

export default Result;