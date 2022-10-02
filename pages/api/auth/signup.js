import { passwordHasher } from '../../../helpers/auth'
import { connectToDB } from "../../../helpers/mongodb";

export default async function handler(req, res) {
    if (req.method == 'POST') {
        const { pseudo, email, confirmedPassword, photo } = req.body
        let { password } = req.body

        if (!pseudo || !email || !password || !confirmedPassword) {
            res.status(422).json({
                message: 'Tous les champs sont requis'
            })
        }

        if (password != confirmedPassword) {
            res.status(422).json({
                message: 'Votre mot de passe de confirmation doit etre le meme que votre mot de passe'
            })
            return
        }


        password = await passwordHasher(password)

        const user = {
            pseudo,
            email,
            password,
            photo: photo ? photo : 'https://media.istockphoto.com/vectors/avatar-5-vector-id1131164548?k=6&m=1131164548&s=612x612&w=0&h=3-7WOnmaUlfAmYIkDVHxcOZhgfl0AeMPOgbd3xgi48c='
        }

        let clientMongoDB

        try {
            clientMongoDB = await connectToDB()
        }
        catch {
            clientMongoDB.close()
            res.status(500).json({
                message: 'Erreur lors de la connexion à la base de données'
            })
        }

        const db = clientMongoDB.db()

        // const users = await db.collection('users').find({ email: email }).toArray()

        // if (users) {
        //     clientMongoDB.close()
        //     res.status(422).json({
        //         message: 'Cette addresse e-mail est deja utilisée'
        //     })
        // }

        try {
            await db.collection('users').insertOne(user)
        }
        catch {
            clientMongoDB.close()
            res.status(500).json({
                message: "Erreur lors de la création de l'utilisateur"
            })
        }

        // const result = await signIn('credentials', {
        //     email: email,
        //     password: password,
        //     redirect: false
        // })

        // if (result.error) {
        //     toast.error('La connexion a echouée. Veuillez vous connecter manuellement.')
        // }
        // else if (!result.error) {
        //     router.push(routes.home)
        //     toast.success('Connexion reussie avec succès')
        // }

        clientMongoDB.close()
        res.status(201).json({
            message: 'Utilisateur crée avec succès => Vous pouvez vous connecter'
        })

        // res.status(201).json({
        //     message: 'Vous êtes connecté'
        // })
    }
}