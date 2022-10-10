import React from 'react';
import classes from '../Result.module.scss'

//comp
import CopyButton from '../../CopyButton/CopyButton';

const Result = () => {
    return (
        <div className={classes.resultContainer}>
            <label>Résultat</label>
            <div>
                <textarea style={{ marginLeft: '68px' }} id='result' />
                <CopyButton right="45px" />
            </div>
        </div>
    );
};

export default Result;