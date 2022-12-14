import fs from 'fs'
import MongoStore from 'connect-mongo'

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const mongoUrl = JSON.parse(await fs.promises.readFile(__dirname + '/mongodb.json', 'utf-8'))

export const sessionConfig = {
    store: MongoStore.create({mongoUrl}),
    secret: 'manzana',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 600000,
      }
}

export default mongoUrl