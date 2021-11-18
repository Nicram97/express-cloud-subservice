import * as express from "express"
import * as fs from 'fs-extra'
import * as path from 'path'

async function main() {
    const app = express();
    app.use(express.json());

    app.get('/', (req, res) => {
        try {
            const jsonList = fs.readJSONSync(path.resolve(__dirname, 'carsList/cars.json'));
            res.json(jsonList);
        } catch(e) {
            throw new Error('Couldnt load config file');
        }
    });
    
    app.listen(3001);
    console.log('Listening on port 3001')
}

main();