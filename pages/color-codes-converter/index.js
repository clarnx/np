import Head from 'next/head';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


//comp
import Block from '../../Components/Block/Block';
import Input from '../../Components/Result/Input/Input'

const idGenerator = () => {

    const { register, formState: { errors }, handleSubmit } = useForm()

    const submittedClickedHandler = (data) => {
        let result = ''

        try {
            if (data.type == 'rgbtohex') {
                let a = data.value.split("(")[1].split(")")[0]
                a = a.split(",")

                for (let i = 0; i < a.length; i++) {
                    a[i] = a[i].trim()
                }

                result = a.map((x) => {
                    x = parseInt(x).toString(16);
                    return (x.length == 1) ? "0" + x : x;
                })
                result = "#" + result.join("");
            }

            else {
                let hex = data.value;
                let red = parseInt(hex[1] + hex[2], 16);
                let green = parseInt(hex[3] + hex[4], 16);
                let blue = parseInt(hex[5] + hex[6], 16);

                if ("(NaN, NaN, NaN)") {
                    toast.error('Une erreur est survenue')
                }
                else {
                    result = `(${red}, ${green}, ${blue})`
                }
            }
        }
        catch {
            toast.error('Une erreur est survenue')
        }

        const result_input = document.getElementById('result')
        result_input.value = result
    }


    return (
        <>
            <Head>
                <title>Convertisseur binaire</title>
            </Head>

            <main>
                <div className='pres'>
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/128/3819/3819710.png" />
                        <h1 className='title'>Convertisseur de codes couleur</h1>
                    </div>
                    <p>On veut parfois un code couleur différent que celui que l'on a. Avec cet outil, il est possible de convertir un code HEX en code RGB et inversement.</p>
                </div>
                <img className='arrow' src="https://cdn-icons-png.flaticon.com/128/159/159694.png" />
                <Block>
                    <form onSubmit={handleSubmit(submittedClickedHandler)}>
                        <p>
                            <input {...register('type')} value='rgbtohex' type='radio' id="rgbtohex" name='type' />
                            <label style={{ cursor: 'pointer', marginLeft: '-90px' }} htmlFor='rgbtohex'>RGB vers Code Hexadecimal</label>
                        </p>
                        <p>
                            <input {...register('type')} value='hextorgb' type='radio' id='hextorgb' name='type' />
                            <label style={{ cursor: 'pointer', marginLeft: '-90px' }} htmlFor='hextorgb'>Code Hexadecimal vers RGB</label>
                        </p>
                        <p>
                            <label>Votre couleur</label>
                        </p>
                        <p>
                            <input {...register('value')} />
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