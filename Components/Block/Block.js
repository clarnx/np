import React from 'react';
import classes from './Block.module.scss'

const Block = (props) => {
    return (
        <div className={classes.block}>
            {props.children}
        </div>
    );
};

export default Block;