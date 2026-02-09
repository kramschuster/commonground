import { Connection, createConnection } from 'typeorm';

const dbConnection = async () => {
    try {
        const connection = await createConnection({
            type: 'postgres',
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT),
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            entities: [/* add your entities here */],
            synchronize: true,
        });
        console.log('Database connected successfully');
        return connection;
    } catch (error) {
        console.error('Database connection failed:', error);
        throw error;
    }
};

export default dbConnection;
