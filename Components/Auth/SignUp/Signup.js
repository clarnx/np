import { useRouter } from 'next/router';
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import classes from '../../../styles/scss/form.module.scss'
import { dismissToast, notify } from '../../../helpers/toastParams'

//comp
import ErrorLabel from '../../Errors/ErrorLabel';
import Button from '../../Button/Button';

const SignUp = () => {

    const { register, formState: { errors }, handleSubmit } = useForm()
    const router = useRouter()

    const toastId = useRef(null);

    const submittedClickedHandler = async (data) => {
        notify(toastId)

        const response = await fetch('/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const fetchedData = await response.json()

        if (!response.ok) {
            toast.error(fetchedData.message)
            dismissToast(toastId.current)
        }
        else {
            toast.success(fetchedData.message)
            dismissToast(toastId.current)
        }
    }

    return (
        <div className={classes.form}>
            <h2>Inscription</h2>
            <form onSubmit={handleSubmit(submittedClickedHandler)}>
                <p>
                    <label htmlFor='pseudo'>Pseudo</label>
                    <input {...register('pseudo', {
                        required: true,
                        maxLength: 20,
                        minLength: 2
                    })} type='text' id='pseudo' placeholder="Nom d'utilisateur" />
                    {errors.pseudo && errors.pseudo.type == 'required' && <ErrorLabel>Ce champ est obligatoire</ErrorLabel>}
                    {errors.pseudo && errors.pseudo.type == 'minLength' && <ErrorLabel>2 cararctères minimum</ErrorLabel>}
                    {errors.pseudo && errors.pseudo.type == 'maxLength' && <ErrorLabel>20 cararctères maximum</ErrorLabel>}
                </p>
                <p>
                    <label htmlFor='email'>E-mail</label>
                    <input {...register('email', {
                        required: true,
                        pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    })} type='email' id='email' placeholder="Addresse e-mail" />
                    {errors.email && errors.email.type == 'required' && <ErrorLabel>Ce champ est obligatoire</ErrorLabel>}
                    {errors.email && errors.email.type == 'pattern' && <ErrorLabel>Syntaxe invalide</ErrorLabel>}
                </p>
                <p>
                    <label htmlFor='photo'>Photo de profil</label>
                    <input {...register('photo', {
                        required: false
                    })} type='text' id='email' placeholder="URL de votre photo de profil" />
                    {errors.photo && errors.photo.type == 'required' && <ErrorLabel>Ce champ est obligatoire</ErrorLabel>}
                </p>
                <p>
                    <label htmlFor='password'>Mot de passe</label>
                    <input {...register('password', {
                        required: true,
                        maxLength: 20,
                        minLength: 6
                    })} type='password' id='password' placeholder="Mot de passe" />
                    {errors.password && errors.password.type == 'required' && <ErrorLabel>Ce champ est obligatoire</ErrorLabel>}
                    {errors.password && errors.password.type == 'minLength' && <ErrorLabel>6 cararctères minimum</ErrorLabel>}
                    {errors.password && errors.password.type == 'maxLength' && <ErrorLabel>20 cararctères maximum</ErrorLabel>}
                </p>
                <p>
                    <label htmlFor='confirmedPassword'>Confirmer Mot de passe</label>
                    <input {...register('confirmedPassword', {
                        required: true,
                        maxLength: 20,
                        minLength: 6
                    })} type='password' id='confirmedPassword' placeholder="Mot de passe" />
                    {errors.confirmedPassword && errors.confirmedPassword.type == 'required' && <ErrorLabel>Ce champ est obligatoire</ErrorLabel>}
                    {errors.confirmedPassword && errors.confirmedPassword.type == 'minLength' && <ErrorLabel>6 cararctères minimum</ErrorLabel>}
                    {errors.confirmedPassword && errors.confirmedPassword.type == 'maxLength' && <ErrorLabel>20 cararctères maximum</ErrorLabel>}
                </p>
                <Button>Continuer</Button>
            </form>
        </div>
    );
};

export default SignUp;