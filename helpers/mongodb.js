import { MongoClient } from 'mongodb'

export async function connectToDB() {
    const client = await MongoClient.connect(
        `mongodb+srv://${process.env.username}:${process.env.password}@cluster0.ybqjg.mongodb.net/${process.env.name}?retryWrites=true&w=majority`
    )

    return client
}