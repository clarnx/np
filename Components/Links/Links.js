import React from 'react';
import routes from '../../Config/routes';
import classes from './Links.module.scss'
import OneLink from './Link/Link'

const Links = () => {

    const datas = [
        {
            link: routes.idGenerator,
            text: "Generateur d'ID",
            des: "Vous pouvez choisir de mettre des tirets et des majuscules ou non.",
            icon: "https://cdn-icons-png.flaticon.com/128/338/338903.png"
        },
        {
            link: routes.passwordGenerator,
            text: "Generateur de mot de passe",
            des: "Choisissez le nombres de lettres, de numéros et de symboles que votre mot de passe doit contenir. Vous pouvez aussi choisir s'il doit comprendre ou non des majuscules.",
            icon: "https://cdn-icons-png.flaticon.com/128/159/159478.png"
        },
        {
            link: routes.datesConverter,
            text: "Convertisseur de dates",
            des: "Vous pouvez convertir une date au format JJ/MM/AAAA vers Timestamp et inversement",
            icon: "https://cdn-icons-png.flaticon.com/128/747/747310.png"
        },
        {
            link: routes.textGenerator,
            text: "Generateur de texte",
            des: "Un générateur de textes est très pratique pour simuler du texte. Choisissez de générer des paragraphes, des phrases, ou des textes complets.",
            icon: "https://cdn-icons-png.flaticon.com/128/2911/2911230.png"
        },
        {
            link: routes.charConverter,
            text: "Convertisseur de caractères",
            des: "Vous voulez transformer un mot, votre pseudo en caractères spéciaux ? C'est possible avec cet outil.",
            icon: "https://cdn-icons-png.flaticon.com/128/5564/5564400.png"
        },
        {
            link: routes.unitsConverter,
            text: "Convertisseur d'unités",
            des: "Choisissez le l'unité à convertir et celle voulue et le tour est joué !",
            icon: "https://cdn-icons-png.flaticon.com/128/4667/4667080.png"
        },
        {
            link: routes.binaryConverter,
            text: "Convertisseur binaire",
            des: "On veut parfois encoder du texte, pourquoi ne pas le convertir en langage binaire ? Entrer votre texte et c'est fini !",
            icon: "https://cdn-icons-png.flaticon.com/128/3793/3793553.png"
        },
        {
            link: routes.colorCodesConverter,
            text: "Convertisseur de codes couleur",
            des: "On veut parfois un code couleur différent que celui que l'on a. Avec cet outil, il est possible de convertir un code HEX en code RGB et inversement.",
            icon: "https://cdn-icons-png.flaticon.com/128/3819/3819710.png"
        },
    ]

    return (
        <div className={classes.links}>
            {datas.map(data => (
                <OneLink data={data} />
            ))}
        </div>
    );
};

export default Links;