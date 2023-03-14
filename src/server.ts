import app from "./app"
import "dotenv/config"
import { AppDataSource } from "./data-source"

const { APP_PORT } = process.env

app.listen(APP_PORT, async () => {
    AppDataSource.initialize()
        .then(() => {
            console.log("Data Source has been initialized!")
        })
        .catch((err) => {
            console.error("Error during Data Source initialization", err)
        })
    console.log(`server running at http://localhost:${APP_PORT}`);
})
