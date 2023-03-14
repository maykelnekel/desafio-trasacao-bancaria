import { DataSource } from "typeorm"
import "dotenv/config"

const {
    POSTGRES_PASSWORD,
    POSTGRES_DB,
    POSTGRES_USER,
    POSTGRES_HOST,
    POSTGRES_PORT,
} = process.env

export const AppDataSource = new DataSource({
    type: "postgres",
    host: POSTGRES_HOST,
    port: Number(POSTGRES_PORT),
    username: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    database: POSTGRES_DB,
    logging: true,
    synchronize: false,
    entities: ["./entities/**.{ts,js}"],
    migrations: ["./migrations/**.{ts,js}"],
})

export const databaseConnection = async () => {
    return AppDataSource.initialize()
        .then(() => {
            console.log("Data Source has been initialized!")
        })
        .catch((err) => {
            console.error("Error during Data Source initialization", err)
        })
}
