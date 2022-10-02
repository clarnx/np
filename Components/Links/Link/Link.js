import React from 'react';
import classes from './Link.module.scss'
import Link from 'next/link';

const OneLink = (props) => {

    const { link, text, des, icon } = props.data

    return (
        <Link href={link}>
            <a className={classes.Link}>
                <img src={icon} />
                <h2>{text}</h2>
                <p>{des}</p>
            </a>
        </Link>
    );
};

export default OneLink;