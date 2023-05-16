import mongoose from "mongoose";

let isConnected = false

export const connectToDB = async () => {
    mongoose.set('strictQuery', true)

    if (isConnected) {
        console.log('MongoDB is already connected to database')
        return
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI,
            {
                dbName: "share_prompts",
                useNewUrlParser: true,
                useUnifiedUrlParser: true,
            })

        isConnected = true
        console.log('MongoDB is connected')
    } catch (error) {
        console.log(error)
    }
}