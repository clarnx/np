import Head from 'next/head';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { getText, getParagraph, getSentence, getCharacters } from 'speech-code'
import Block from '../../Components/Block/Block';

//comp
import Input from '../../Components/Result/Input/Input'

const idGenerator = () => {

    const { register, formState: { errors }, handleSubmit } = useForm()

    const textToCodes = {
        a: '🅰',
        b: '🅱',
        c: '©',
        d: 'Ď',
        e: '€',
        f: '₣',
        g: 'Ɠ',
        h: 'Ħ',
        i: 'Ī',
        j: 'ʖ',
        k: 'Ҝ',
        l: 'Ƚ',
        m: 'Ⓜ',
        n: 'Ñ',
        o: '🅾',
        p: 'ק',
        q: 'Գ',
        r: '®',
        s: '$',
        t: 'Ŧ',
        u: 'µ',
        v: 'Ɣ',
        w: '￦',
        x: '❌',
        y: 'Ỵ',
        z: '乙'
    }

    const inverse = (obj) => {
        var retobj = {};
        for (var key in obj) {
            retobj[obj[key]] = key;
        }
        return retobj;
    }

    const codesToText = inverse(textToCodes)

    const submittedClickedHandler = (data) => {
        let result = ''

        for (let letter in data.text) {
            if (data.type == 'texttochar') {
                for (let car in textToCodes) {
                    if (data.text[letter] == car) {
                        result += textToCodes[car]
                    }
                }
            }
            else {
                for (let car in codesToText) {
                    if (data.text[letter] == car) {
                        result += codesToText[car]
                    }
                }
            }
        }

        const result_input = document.getElementById('result')
        result_input.value = result
    }

    return (
        <>
            <Head>
                <title>Convertisseur de caractères</title>
            </Head>

            <main>
                <div className='pres'>
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/128/5564/5564400.png" />
                        <h1 className='title'>Convertisseur de caractères</h1>
                    </div>
                    <p>Vous voulez transformer un mot, votre pseudo en caractères spéciaux ? C'est possible avec cet outil.</p>
                </div>
                <img className='arrow' src="https://cdn-icons-png.flaticon.com/128/159/159694.png" />
                <Block>
                    <form onSubmit={handleSubmit(submittedClickedHandler)}>
                        <p>
                            <input {...register('type')} value='texttochar' type='radio' id="texttochar" name='type' />
                            <label style={{ cursor: 'pointer', marginLeft: '-90px' }} htmlFor='texttochar'>Texte vers Caractères speciaux</label>
                        </p>
                        <p>
                            <input {...register('type')} value='chartotext' type='radio' id='chartotext' name='type' />
                            <label style={{ cursor: 'pointer', marginLeft: '-90px' }} htmlFor='chartotext'>Caractères speciaux vers Texte</label>
                        </p>
                        <p>
                            <label>Votre texte</label>
                        </p>
                        <p>
                            <input {...register('text')} />
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