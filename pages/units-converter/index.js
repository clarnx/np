import Head from 'next/head';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


//comp
import Block from '../../Components/Block/Block';
import Input from '../../Components/Result/Input/Input'

const idGenerator = () => {

    const math = require('mathjs')

    const { register, formState: { errors }, handleSubmit } = useForm()

    const units = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm', 'ns', 'μs', 'ms', 's', 'min', 'ng', 'μg', 'mg', 'cg', 'dg', 'g', 'dag', 'hg', 'kg', 'm/s', 'km/s', 'km/min', 'km/h', 'bit/s', 'Kb/s', 'Mb/s', 'Gb/s', 'Tb/s', 'B/s']

    const submittedClickedHandler = (data) => {
        let result = ''

        try {
            result = math.evaluate(`number(${data.value} ${data.defaultUnit}, ${data.searchedUnit})`)
        }
        catch {
            toast.error('Unités icomptaibles')
        }

        const result_input = document.getElementById('result')
        result_input.value = result
    }

    return (
        <>
            <Head>
                <title>Convertisseur d'unités</title>
            </Head>

            <main>
                <div className='pres'>
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/128/4667/4667080.png" />
                        <h1 className='title'>Convertisseur d'unités</h1>
                    </div>
                    <p>Choisissez le l'unité à convertir et celle voulue et le tour est joué !</p>
                </div>
                <img className='arrow' src="https://cdn-icons-png.flaticon.com/128/159/159694.png" />
                <Block>
                    <form onSubmit={handleSubmit(submittedClickedHandler)}>
                        <p>
                            <label>Valeur</label>
                        </p>
                        <p>
                            <input type='number' {...register('value')} />
                            <select {...register('defaultUnit')}>
                                {units.map((unit) => (
                                    <option>{unit}</option>
                                ))}
                            </select>
                        </p>
                        <p>
                            <label>Convertir en</label>
                        </p>
                        <p>
                            <select {...register('searchedUnit')}>
                                {units.map((unit) => (
                                    <option>{unit}</option>
                                ))}
                            </select>
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