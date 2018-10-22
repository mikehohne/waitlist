import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import db from './DB';
import router from './Routes/Routes';

class App {
    public express: any;
    public db: any;
    public routes: any;

    constructor() {
        this.config();
    }

    private config(): void {
        this.db = db;
        this.express = express();
        this.express.use(bodyParser.urlencoded({ extended: true }));
        this.express.use(bodyParser.json());
        this.express.use('/api', router);
        dotenv.load();
    }

    private getEnv(): string {
        return '';
    }
}

export default new App().express