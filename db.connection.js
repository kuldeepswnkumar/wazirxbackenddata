import mongoose from "mongoose";

const mongodbconnection = async () => {
    try {
        const dbConnection = await mongoose.connect(`${process.env.MONGODB_LINK}/${process.env.DATABASE_NAME}`);
        console.log(`Database Connected!! DB Host: ${dbConnection.connection.host}`)
    } catch (error) {
        console.log("Database connection failed!", error);
    }
}

export default mongodbconnection

