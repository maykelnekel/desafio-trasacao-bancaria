import { DataSource } from "typeorm"
import "dotenv/config"
import Seller from "./entities/seller.entity"
import Client from "./entities/client.entity"
import path from "path"
const {
    POSTGRES_PASSWORD,
    POSTGRES_DB,
    POSTGRES_USER,
    POSTGRES_HOST,
    POSTGRES_PORT,
} = process.env

const migrationPath = path.join(__dirname, '/migrations/**.{ts,js}')
const entitiePath = path.join(__dirname, '/entities/**.{ts,js}')

export const AppDataSource = new DataSource({
    type: "postgres",
    host: POSTGRES_HOST,
    port: Number(POSTGRES_PORT),
    username: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    database: POSTGRES_DB,
    logging: true,
    synchronize: false,
    entities: [entitiePath],
    migrations: [migrationPath],
})


