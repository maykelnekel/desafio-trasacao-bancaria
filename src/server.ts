import app from "./app"
import "dotenv/config"
import { AppDataSource } from "./data-source"

const { APP_PORT } = process.env

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
        app.listen(APP_PORT, async () => {
            console.log(`server running at http://localhost:${APP_PORT}`);
        })
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

