import Head from 'next/head';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { getText, getParagraph, getSentence, getCharacters } from 'speech-code'
import Block from '../../Components/Block/Block';

//comp
import Textarea from '../../Components/Result/Textarea/Textarea'

const idGenerator = () => {

    const { register, formState: { errors }, handleSubmit } = useForm()

    const submittedClickedHandler = (data) => {
        let result = ''

        if (data.type == 'Paragraphes') {
            for (let i = 0; i < data.genNumber; i++) {
                result += `${getParagraph(1 + Math.round(Math.random(0, 3)), 'en')} \n`
            }
        }

        else if (data.type == 'Textes') {
            for (let i = 0; i < data.genNumber; i++) {
                result += `${getText()} \n`
            }
        }

        else if (data.type == 'Phrases') {
            for (let i = 0; i < data.genNumber; i++) {
                result += `${getSentence('en')}`
            }
        }

        const result_input = document.getElementById('result')
        result_input.value = result
    }

    return (
        <>
            <Head>
                <title>Generateur de texte</title>
            </Head>

            <main>
                <div className='pres'>
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/128/2911/2911230.png" />
                        <h1 className='title'>Generateur de texte</h1>
                    </div>
                    <p>Un générateur de textes est très pratique pour simuler du texte. Choisissez de générer des paragraphes, des phrases, ou des textes complets.</p>
                </div>
                <img className='arrow' src="https://cdn-icons-png.flaticon.com/128/159/159694.png" />
                <Block>
                    <form onSubmit={handleSubmit(submittedClickedHandler)}>
                        <p>
                            <label>Nombre de generations</label>
                            <input {...register('genNumber')} type='number' />
                        </p>
                        <p>
                            <label>Type de generation</label>
                        </p>
                        <p>
                            <select {...register('type')}>
                                <option>Paragraphes</option>
                                <option>Phrases</option>
                                <option>Textes</option>
                            </select>
                        </p>

                        <div className='resultandvalidContainer'>
                            <Textarea />

                            <button>Valider</button>
                        </div>
                    </form>
                </Block>
            </main>
        </>
    );
};

export default idGenerator;