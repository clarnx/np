import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import classes from '../../../styles/scss/form.module.scss'
import { signIn } from 'next-auth/client';
import { useRouter } from 'next/router';
import routes from '../../../config/routes'
import { dismissToast, notify } from '../../../helpers/toastParams';

//comp
import Button from '../../Button/Button'
import ErrorLabel from '../../Errors/ErrorLabel'

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const router = useRouter()
    const toastId = useRef(null);

    const submittedClickedHanlder = async (data) => {
        notify(toastId)

        const result = await signIn('credentials', {
            email: data.email,
            password: data.password,
            redirect: false
        })

        if (result.error) {
            dismissToast(toastId.current)
            toast.error(result.error)
        }
        else if (!result.error) {
            dismissToast(toastId.current)
            router.push(routes.home)
            toast.success('Connexion reussie avec succès')
        }
    }

    return (
        <div className={classes.form}>
            <h2>Connexion</h2>
            <form onSubmit={handleSubmit(submittedClickedHanlder)}>
                FORMULAIRE
            </form>
        </div>
    );
};

export default Login;