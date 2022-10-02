import Head from 'next/head';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Block from '../../Components/Block/Block';

//comp
import Input from '../../Components/Result/Input/Input'

const idGenerator = () => {

    const { register, formState: { errors }, handleSubmit } = useForm()

    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const numbers = ['1', '2', '3', '4', '5', '5', '6', '7', '8', '9']
    const symbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+']

    const submittedClickedHandler = (data) => {
        let result = []

        for (let i = 0; i < data.lettersNumber; i++) {
            if (data.majs && Math.round(Math.random(0, 1)) == 1) {
                result.push(letters[Math.floor(Math.random() * letters.length)].toLocaleUpperCase())
            }
            else {
                result.push(letters[Math.floor(Math.random() * letters.length)])
            }
        }

        for (let i = 0; i < data.symbolsNumber; i++) {
            result.push(symbols[Math.floor(Math.random() * symbols.length)])
        }

        for (let i = 0; i < data.numbersNumber; i++) {
            result.push(numbers[Math.floor(Math.random() * numbers.length)])
        }

        result = result.sort(() => Math.random() - 0.5)
        result = result.join('')

        const result_input = document.getElementById('result')
        result_input.value = result
    }

    return (
        <>
            <Head>
                <title>Generateur de mot de passe</title>
            </Head>

            <main>
                <div className='pres'>
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/128/159/159478.png" />
                        <h1 className='title'>Generateur de mot de passe</h1>
                    </div>
                    <p>Choisissez le nombres de lettres, de numéros et de symboles que votre mot de passe doit contenir. Vous pouvez aussi choisir s'il doit comprendre ou non des majuscules.</p>
                </div>
                <img className='arrow' src="https://cdn-icons-png.flaticon.com/128/159/159694.png" />
                <Block>
                    <form onSubmit={handleSubmit(submittedClickedHandler)}>
                        <p>
                            <label>Nombre de lettres</label>
                            <input {...register('lettersNumber')} type='number' />
                        </p>
                        <p>
                            <label>Nombre de numéros</label>
                            <input {...register('numbersNumber')} type='number' />
                        </p>
                        <p>
                            <label>Nombre de symboles</label>
                            <input {...register('symbolsNumber')} type='number' />
                        </p>
                        <p>
                            <label className="switch">
                                <input {...register('majs')} type="checkbox" />
                                <span className="slider round"></span>
                            </label>
                            <label>Majuscules</label>
                        </p>

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