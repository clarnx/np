import Head from 'next/head';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Block from '../../Components/Block/Block';

//comp
import CopyButton from '../../Components/CopyButton/CopyButton';
import Input from '../../Components/Result/Input/Input'

const idGenerator = () => {

    const { register, formState: { errors }, handleSubmit } = useForm()
    const codes = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
        'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '5', '6', '7', '8', '9']

    const submittedClickedHandler = (data) => {
        let result = ''

        for (let i = 0; i < 16; i++) {
            const car = codes[Math.floor(Math.random() * codes.length)]
            result += car

            if (data.hyphens) {
                if (i == 3 || i == 7 || i == 11) {
                    result += '-'
                }
            }
        }

        if (data.majs) {
            result = result.toLocaleUpperCase()
        }

        const result_input = document.getElementById('result')
        result_input.value = result
    }

    return (
        <>
            <Head>
                <title>Generateur d'ID</title>
            </Head>

            <main>
                <div className='pres'>
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/128/338/338903.png" />
                        <h1 className='title'>Generateur d'ID</h1>
                    </div>
                    <p>Vous pouvez choisir de mettre des tirets et des majuscules ou non.</p>
                </div>
                <img className='arrow' src="https://cdn-icons-png.flaticon.com/128/159/159694.png" />
                <Block>
                    <form onSubmit={handleSubmit(submittedClickedHandler)}>
                        <div className='switchContainer'>
                            <p>
                                <label className="switch">
                                    <input {...register('majs')} type="checkbox" />
                                    <span className="slider round"></span>
                                </label>
                                <label>Majuscules</label>
                            </p>
                            <p>
                                <label className="switch">
                                    <input {...register('hyphens')} type="checkbox" />
                                    <span className="slider round"></span>
                                </label>
                                <label>Tirets</label>
                            </p>
                        </div>

                        <div className='resultandvalidContainer'>
                            <Input />

                            <button>Valider</button>
                        </div>
                    </form>
                </Block>
            </main>
        </>
    );
};

export default idGenerator;