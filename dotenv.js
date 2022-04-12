import { webpack } from "webpack";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

module.exports = (env) => {
    const currentPath = path.join(__dirname);

    const basePath = currentPath + '/.env'

    const envPath = `${basePath} . ${env.ENVIRONMENT}`

    const finalPath = fs.existsSync(envPath) ? envPath : basePath;

    const fileEnv = dotenv.config({path: finalPath}).parsed

    const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
        prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
        return prev;
    }, {});


    return {
        plugins: [
            new webpack.DefinePlugin(envKeys)
        ]
    };
}