import React from 'react';
import classes from './Auth.module.scss'

//comp
import SignIn from './SignIn/Signin'
import SignUp from './SignUp/Signup'

const Auth = () => {
    return (
        <div className={classes.formDiv}>
            <SignUp />
            <SignIn />
        </div>
    );
};

export default Auth;