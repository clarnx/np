import Head from 'next/head';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import moment from 'moment';

//comp
import Input from '../../Components/Result/Input/Input'
import Block from '../../Components/Block/Block';

const idGenerator = () => {

    const { register, formState: { errors }, handleSubmit } = useForm()

    const submittedClickedHandler = (data) => {
        let result = ''

        if (data.type == 'datetotimestamp') {
            let date = data.date.split("/");
            let newDate = new Date(date[2], date[1] - 1, date[0]);
            result = newDate.getTime()
        }

        else {
            result = Date(data.date)
        }

        const result_input = document.getElementById('result')
        result_input.value = result
    }

    return (
        <>
            <Head>
                <title>Convertisseur de dates</title>
            </Head>

            <main>
                <div className='pres'>
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/128/747/747310.png" />
                        <h1 className='title'>Convertisseur de dates</h1>
                    </div>
                    <p>Vous pouvez convertir une date au format JJ/MM/AAAA vers Timestamp et inversement</p>
                </div>
                <img className='arrow' src="https://cdn-icons-png.flaticon.com/128/159/159694.png" />
                <Block>
                    <form onSubmit={handleSubmit(submittedClickedHandler)}>
                        <p>
                            <input {...register('type')} value='datetotimestamp' type='radio' id="datetotimestamp" name='type' checked />
                            <label style={{ cursor: 'pointer', marginLeft: '-90px' }} htmlFor='datetotimestamp'>Date vers Timestamp</label>
                        </p>
                        <p>
                            <input {...register('type')} value='timestamptodate' type='radio' id='timestamptodate' name='type' />
                            <label style={{ cursor: 'pointer', marginLeft: '-90px' }} htmlFor='timestamptodate'>Timestamp vers Date</label>
                        </p>
                        <p>
                            <label>Votre date</label>
                        </p>
                        <p>
                            <input {...register('date')} />
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